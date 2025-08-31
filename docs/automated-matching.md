---
title: "Automated Task Matching"
slug: "automated-matching"
sectionId: "volunteer-management"
tags: ["volunteer", "matching", "automation", "skills"]
difficulty: "intermediate"
estimatedTime: "10 minutes"
order: 4
lastUpdated: "2024-01-15"
---

# Automated Task Matching

This system automatically matches volunteers to tasks based on their skills and interests, handles notifications, and manages task assignments through a fair first-come-first-served process.

## System Overview

**How the Complete System Works:**

1. **Volunteer Account Creation**: Administrators create volunteer accounts and assign skills
2. **Skill Tracking**: System stores volunteer capabilities using ACF custom fields
3. **Task Creation**: Administrators create tasks and assign required skills  
4. **Automatic Matching**: System finds volunteers with matching skills
5. **Email Notifications**: Matching volunteers receive immediate email alerts via WP Mail SMTP
6. **Task Assignment**: First volunteer to accept gets the task
7. **Status Updates**: All participants receive appropriate confirmations

**Technology Stack:**
- **ACF (Advanced Custom Fields)**: Manages volunteer skills and task requirements
- **WP Mail SMTP**: Handles reliable email delivery for notifications
- **WordPress Code Snippets**: Custom automation logic
- **WordPress User Management**: Role-based access control

For detailed technical implementation, see [ACF & WP Mail SMTP Integration](/docs/custom-development/acf-wp-mail-smtp-integration).

## Setting Up Volunteer Profiles

**For Administrators - Managing Volunteer Skills:**

1. **Create Volunteer Account:**
   - Navigate to Users → Add New
   - Create new user account or upgrade existing subscriber
   - Assign "Volunteer" role to the user

2. **Access Volunteer Profile:**
   - Navigate to Users → All Users
   - Find the volunteer's account
   - Click Edit next to their name

3. **Locate Volunteer Tags Section:**
   - Scroll down to find "Volunteer Tags" field
   - This field uses Advanced Custom Fields (ACF) taxonomy
   - Multiple skills can be selected for each volunteer

4. **Assign Skills and Interests:**
   - Check all relevant skill categories for the volunteer
   - Common categories include:
     - Transportation and errands
     - Home maintenance and light repairs
     - Technology support and tutoring
     - Social visits and companionship  
     - Administrative and clerical assistance
     - Event setup and coordination
     - Professional services (nursing, legal, etc.)

5. **Save Profile:**
   - Click Update User
   - System automatically stores skills in user metadata
   - Volunteer is now eligible for matching tasks

**Technical Process (For Developers):**
```php
// ACF save_post hook triggers when user profile is saved
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
    }
}
```

## Creating and Managing Volunteer Tasks

**For Administrators - Task Creation Process:**

1. **Create New Task:**
   - Navigate to your WordPress dashboard
   - Look for "Volunteer Tasks" in the menu (custom post type)
   - Click Add New to create a task

2. **Task Information Fields:**
   - **Title**: Clear, descriptive task name
   - **Description**: Detailed explanation of what needs to be done
   - **Time Commitment**: Estimated hours or duration
   - **Location**: Where the task will take place (if applicable)
   - **Special Requirements**: Any specific qualifications or equipment needed
   - **Contact Information**: How volunteers can reach the task coordinator

3. **Assign Required Skills:**
   - Find the "Volunteer Tags" section (same taxonomy as volunteer profiles)
   - Select all skill categories that match this task
   - System will find volunteers with ANY of the selected skills
   - Multiple selections increase the pool of potential volunteers

4. **Publish Task:**
   - Click Publish to activate the task
   - System immediately begins volunteer matching process
   - Email notifications sent automatically to matching volunteers

**Technical Implementation (For Developers):**
```php
// Hook fires when any post is saved via ACF
add_action('acf/save_post', 'notify_matching_volunteers_on_task_publish', 20);

function notify_matching_volunteers_on_task_publish($post_id) {
    // Only process 'volunteer_task' post type
    if (get_post_type($post_id) !== 'volunteer_task') return;
    
    // Get task skill requirements
    $task_tags = get_field('volunteer_tags', $post_id, false);
    
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
    ]);
}
```

## Email Notification System

**How Volunteers Receive Tasks:**

1. **Immediate Notification:**
   - Email sent within seconds of task publication
   - Only volunteers with matching skills receive notifications
   - Subject line clearly identifies this as a volunteer opportunity

2. **Email Content Includes:**
   - Task title and complete description
   - Required skills and time commitment
   - Location information (if applicable)
   - Direct link to accept the task
   - "First come, first served" disclaimer
   - Contact information for questions

3. **Secure Acceptance Links:**
   - Each email contains a unique, authenticated link
   - Clicking the link immediately assigns the task
   - No additional login or confirmation required
   - Links are specific to each volunteer for security

**Sample Email Format:**
```
Subject: New Volunteer Task Available!

Hi [Volunteer Name],

A new volunteer task is available that matches your interests:

Task: [Task Title]
Description: [Task Details]
Time Required: [Duration]
Location: [Task Location]

Click here to accept this task:
[Secure Acceptance Link]

Remember: This is first come, first served!

Questions? Contact [Task Coordinator]
```

## Task Assignment Process

**How First-Come-First-Served Works:**

1. **Multiple Volunteers Receive Emails:**
   - All volunteers with matching skills get simultaneous notifications
   - Email clearly states "first come, first served" policy
   - Volunteers understand they need to respond quickly

2. **Task Acceptance:**
   - First volunteer to click their email link gets the task
   - System immediately updates task status to "assigned"
   - Task is no longer available for other volunteers

3. **Automatic Notifications:**
   - **Accepted Volunteer**: Receives confirmation email with coordinator details
   - **Other Volunteers**: Receive notification that task was already taken
   - **Administrator**: Can track which volunteer accepted the task

**Technical Process (For Developers):**
```php
// Handle task acceptance via email link
add_action('template_redirect', 'handle_task_acceptance');

function handle_task_acceptance() {
    // Check for acceptance parameters in URL
    if (!isset($_GET['accept_task']) || !isset($_GET['user'])) return;
    
    $task_id = intval($_GET['accept_task']);
    $user_id = intval($_GET['user']);
    
    // Check if task is already accepted
    $already_accepted_by = get_post_meta($task_id, '_accepted_by', true);
    
    if (!empty($already_accepted_by)) {
        // Task already taken - redirect with appropriate message
        wp_redirect(get_permalink($task_id) . '?status=already-taken');
        exit;
    }
    
    // First to accept - assign task
    update_post_meta($task_id, '_accepted_by', $user_id);
    
    // Send confirmation and notification emails
    // Redirect to task page with success message
}
```

## Volunteer Assignment Tracking

### Dashboard Monitoring

**Assignment Status:**
- View which tasks have been accepted
- See which volunteer took each assignment
- Monitor task completion progress
- Track volunteer response times

**Administrative Coordination:**
- Contact information for assigned volunteers
- Member contact details for service coordination
- Task status updates and completion tracking
- Historical record of all assignments

### Monitoring and Managing Active Tasks

**For Administrators - Tracking Task Progress:**

1. **View Task Status:**
   - Navigate to your volunteer tasks list
   - See which tasks are pending, assigned, or completed
   - Track volunteer engagement and response times

2. **Assignment Information:**
   - View which volunteer accepted each task
   - See how many volunteers were originally notified
   - Monitor task completion and follow-up

3. **Volunteer Performance:**
   - Track which volunteers are most responsive
   - Identify popular skill categories and frequent needs
   - Monitor volunteer satisfaction and retention

**Database Storage (For Developers):**
```php
// Task metadata stored in wp_postmeta table:
'_matched_volunteers'  // Array of volunteer IDs who were notified
'_accepted_by'        // User ID of volunteer who accepted task
'_assignment_date'    // When task was accepted
'_completion_status'  // Task completion tracking
```

## Troubleshooting the Volunteer System

**Problem: Volunteers not receiving email notifications**
- **Check**: Verify volunteer has correct email address in profile
- **Test**: Send test email using WordPress admin to confirm email functionality
- **Solution**: Check if hosting provider blocks outgoing emails
- **Alternative**: Configure SMTP plugin for reliable email delivery

**Problem: Task assignment links not working**
- **Check**: Verify permalinks are set up correctly in Settings → Permalinks
- **Test**: Check if security plugins are blocking URL parameters
- **Solution**: Clear cache and test links in private browser window

**Problem: Wrong volunteers receiving notifications**
- **Check**: Review volunteer skill assignments in their profiles
- **Verify**: Confirm task skill requirements are set correctly
- **Solution**: Update volunteer profiles or task requirements as needed

**Problem: Multiple volunteers claiming same task**
- **Check**: Database for actual task assignment in post metadata
- **Solution**: First database entry determines actual assignment
- **Prevention**: Ensure email links include proper user authentication

## Integration with Other Systems

This automated task matching system integrates with:

- **[User Management System](/docs/user-management/user-management-overview)**: Uses volunteer roles and profiles
- **[Advanced Custom Fields](/docs/custom-development/acf-integration)**: Stores volunteer skills and task requirements
- **[Email Notification System](/docs/volunteer-management/email-notifications)**: Sends task alerts and confirmations
- **[ACF Integration](/docs/custom-development/acf-integration)**: Stores task metadata and assignments

## Next Steps

- Learn about [Managing Volunteer Profiles](/docs/volunteer-management/volunteer-profiles)
- Understand [Task Creation and Management](/docs/volunteer-management/task-management)
- Review [Email Notification System](/docs/volunteer-management/email-notifications)
- Explore [Custom Development](/docs/custom-development/acf-integration) for technical details

---

*This documentation covers the automated volunteer task matching system. For technical implementation details, see the Custom Development section.*
