---
title: "ACF & WP Mail SMTP Integration"
description: "Advanced Custom Fields and WP Mail SMTP integration for volunteer management system"
sectionId: "custom-development"
slug: "acf-wp-mail-smtp-integration"
tags: ["acf", "advanced custom fields", "wp mail smtp", "email", "volunteer management", "automated matching", "notifications", "kcn seniors"]
difficulty: "intermediate"
estimatedTime: "30 minutes"
lastUpdated: "2025-01-15"
order: 4
---

# ACF & WP Mail SMTP Integration

## Overview

This documentation covers the integration of **Advanced Custom Fields (ACF)** and **WP Mail SMTP** plugins within the website volunteer management system. These plugins work together to create an automated volunteer matching and notification system that powers the volunteer booking service.

### System Integration Summary:
- **ACF**: Manages volunteer skills, interests, and task requirements
- **WP Mail SMTP**: Handles reliable email delivery for automated notifications
- **Together**: Enable automated volunteer-task matching with email alerts
- **Administrative Management**: All volunteer accounts created and managed by administrators

## Advanced Custom Fields (ACF) Plugin

### What is ACF?

Advanced Custom Fields is a WordPress plugin that allows you to add extra content fields to your WordPress edit screens, turning WordPress into a fully-fledged content management system. ACF proudly powers over 2 million sites with powerful, professional and intuitive fields.

### Core ACF Features:
- **Field Builder**: Quickly add fields to edit screens with simple clicks
- **Location Rules**: Fields can be added to posts, users, taxonomy terms, media, comments and custom options pages
- **30+ Field Types**: Including text, number, image, repeater, user, relationship fields and more
- **Developer-Friendly API**: Simple functions like `get_field()` and `the_field()` for theme integration

### KCN's ACF Implementation

Based on the ACF interface, the system uses two main field groups:

#### 1. **Volunteer Task Details** Field Group
- **Purpose**: Detailed information for volunteer tasks
- **Key**: `group_6867b2df8ae8a`
- **Location**: Applied to Volunteer Tasks
- **Fields**: 3 fields (title, brief description, full details, tags)

**Business Function:**
- **Title**: Task title displayed to all volunteers
- **Brief Description**: Shared with all volunteers of the particular tag
- **Full Details**: Only shared with assigned volunteer after acceptance
- **Tags**: Specific volunteer skill tags for task matching
- Enables automated matching system with role-based information sharing

### ACF Features

**KCN Currently Uses ACF**, which includes:
- All basic field types (text, textarea, number, email, url, password, image, gallery, select, checkbox, radio button, true/false, date picker, color picker, file, user, post object, page link, relationship, taxonomy)
- Field Groups and Location Rules
- Simple API for theme integration

### How ACF Works in KCN Volunteer System

#### Volunteer Profile Management:
```php
// Get volunteer skills from ACF field
$volunteer_skills = get_field('volunteer_skills', 'user_' . $user_id);

// Example skills array: ['gardening', 'transportation', 'technology_help']
if ($volunteer_skills) {
    foreach ($volunteer_skills as $skill) {
        // Use skills for task matching
        $matching_tasks = find_tasks_by_skill($skill);
    }
}
```

#### Task Creation and Matching:
```php
// Get required skills from task ACF field
$required_skills = get_field('required_skills', $task_id);

// Match volunteers with required skills
$qualified_volunteers = get_users(array(
    'meta_query' => array(
        array(
            'key' => 'volunteer_skills',
            'value' => $required_skills,
            'compare' => 'LIKE'
        )
    )
));
```

#### User Field Integration:
ACF's User field type is useful for creating relationships between data objects, storing values as WordPress user IDs and returning full WP_User data on retrieval.

### ACF Dashboard Location

**Access Path**: `WordPress Admin → ACF → Field Groups`

**Key Sections**:
1. **Field Groups**: Create and manage custom field collections
2. **Tools**: Import/Export field configurations
3. **Options** (if using Pro): Global settings pages

## WP Mail SMTP Plugin

### What is WP Mail SMTP?

WP Mail SMTP fixes email deliverability issues by reconfiguring WordPress to use a proper SMTP provider when sending emails. Most WordPress hosting companies don't have their servers properly configured for sending PHP emails, which is why WordPress emails aren't delivered.

### Core WP Mail SMTP Features:

#### Email Delivery Solutions:
- **SMTP Configuration**: Reconfigures `wp_mail()` function to use proper SMTP credentials
- **Provider Integrations**: Built-in support for major email services
- **Authentication**: Properly authenticates emails to avoid spam filters
- **API Integration**: Uses provider's direct API even if SMTP ports are blocked

#### Supported Email Services:
- Gmail, Yahoo, Office 365, Zoho
- Mailgun, SendGrid, Amazon SES
- SMTP.com, Brevo (formerly Sendinblue)
- Custom SMTP servers (like KCN's `mail.kcnseniors.coop`)

### KCN's WP Mail SMTP Configuration

Based on the configuration, the system uses:

#### SMTP Settings:
- **Mailer**: Other SMTP (Custom SMTP server)
- **SMTP Host**: `mail.kcnseniors.coop`
- **Encryption**: SSL (recommended for security)
- **SMTP Port**: 465 (standard SSL port)
- **Auto TLS**: Enabled
- **Authentication**: Enabled
- **SMTP Username**: `info@kcnseniors.coop`
- **SMTP Password**: Encrypted and secured

#### Security Configuration:
- SSL/TLS encryption ensures secure email transmission
- Authentication prevents spoofing and improves deliverability
- Custom domain email (kcnseniors.coop) improves trust and branding

### WP Mail SMTP Features

**KCN Currently Uses WP Mail SMTP**, which includes:
- Basic SMTP configuration and email sending
- Email testing functionality
- Support for all major email providers

**Additional Features** (available for future expansion):
- **Email Logging**: Detailed record of every email sent
- **Email Reports**: Track delivery rates, open rates, click-through rates
- **Backup Connection**: Secondary email provider if primary fails
- **Email Alerts**: Instant notifications when emails fail to send
- **Smart Routing**: Different email types through different providers

### Why SMTP is Critical for KCN

#### Email Deliverability Issues:
WordPress and plugins send email using PHP `mail()` function by default, but many hosting servers are not configured to use this function properly. Email providers also check if emails originate from the same location they claim to be sent from.

#### SMTP Solutions:
- SMTP (Simple Mail Transfer Protocol) fixes delivery issues by properly authenticating emails
- Increases email deliverability by adding authentication to emails sent from your site
- Prevents notification emails from ending up in spam folders or being blocked

### WP Mail SMTP Dashboard Location

**Access Path**: `WordPress Admin → WP Mail SMTP → Settings`

**Key Sections**:
1. **General**: SMTP configuration and provider settings
2. **Email Test**: Send test emails to verify configuration
3. **Email Log**: (Pro) Track sent emails and delivery status

## Integration: ACF + WP Mail SMTP in KCN System

### Automated Volunteer Notification Workflow

#### 1. **Volunteer Registration Process**
```php
// When administrator creates volunteer account
function kcn_create_volunteer_account($user_id, $skills_array) {
    // Assign volunteer role
    $user = new WP_User($user_id);
    $user->set_role('volunteer');
    
    // Add ACF skills using update_field()
    update_field('volunteer_skills', $skills_array, 'user_' . $user_id);
    update_field('volunteer_availability', $availability, 'user_' . $user_id);
    update_field('volunteer_contact_preference', $contact_pref, 'user_' . $user_id);
}
```

#### 2. **Task Creation and Matching**
```php
// When task is created with required skills
function kcn_create_volunteer_task($task_data) {
    // Create task post
    $task_id = wp_insert_post(array(
        'post_type' => 'volunteer_tasks',
        'post_title' => $task_data['title'],
        'post_content' => $task_data['description'],
        'post_status' => 'publish'
    ));
    
    // Add ACF fields for task requirements
    update_field('required_skills', $task_data['skills'], $task_id);
    update_field('task_deadline', $task_data['deadline'], $task_id);
    update_field('task_location', $task_data['location'], $task_id);
    
    // Trigger volunteer matching
    kcn_match_volunteers_to_task($task_id);
}
```

#### 3. **Automated Email Notifications**
```php
// Match volunteers and send notifications via WP Mail SMTP
function kcn_match_volunteers_to_task($task_id) {
    // Get required skills from ACF
    $required_skills = get_field('required_skills', $task_id);
    
    // Find matching volunteers
    $volunteers = get_users(array(
        'role' => 'volunteer',
        'meta_query' => array(
            array(
                'key' => 'volunteer_skills',
                'value' => $required_skills,
                'compare' => 'LIKE'
            )
        )
    ));
    
    foreach ($volunteers as $volunteer) {
        kcn_send_task_notification($volunteer, $task_id);
    }
}

function kcn_send_task_notification($volunteer, $task_id) {
    $task_title = get_the_title($task_id);
    $task_description = get_field('task_description', $task_id);
    $task_deadline = get_field('task_deadline', $task_id);
    
    $subject = "New Volunteer Opportunity: " . $task_title;
    $message = "
        Hello {$volunteer->display_name},
        
        A new volunteer task matches your skills:
        
        Task: {$task_title}
        Description: {$task_description}
        Deadline: {$task_deadline}
        
        Please contact us if you're available to help.
        
        Best regards,
        Team
    ";
    
    // WP Mail SMTP handles reliable delivery
    wp_mail($volunteer->user_email, $subject, $message);
}
```

### Email Templates and Personalization

#### Dynamic Content from ACF Fields:
```php
function kcn_personalized_volunteer_email($volunteer_id, $task_id) {
    // Get volunteer preferences from ACF
    $volunteer_name = get_field('preferred_name', 'user_' . $volunteer_id);
    $contact_preference = get_field('contact_preference', 'user_' . $volunteer_id);
    
    // Get task details from ACF
    $task_location = get_field('task_location', $task_id);
    $task_skills = get_field('required_skills', $task_id);
    $estimated_time = get_field('estimated_time', $task_id);
    
    // Create personalized message
    $message = customize_email_template($volunteer_name, $task_location, $task_skills, $estimated_time);
    
    return $message;
}
```

### System Benefits

#### For KCN Administrators:
1. **Automated Matching**: ACF tags enable automatic volunteer-task matching
2. **Reliable Delivery**: WP Mail SMTP ensures notifications reach volunteers
3. **Detailed Tracking**: Monitor which volunteers receive which notifications
4. **Scalable System**: Easy to add new volunteers and skills

#### For Volunteers:
1. **Relevant Opportunities**: Only receive notifications for matching skills
2. **Detailed Information**: ACF fields provide comprehensive task details
3. **Reliable Communication**: SMTP ensures emails don't end up in spam
4. **Professional Appearance**: Branded emails from kcnseniors.coop domain

## Configuration and Setup

### ACF Setup for Volunteer Management

#### 1. **Create Volunteer Skills Field Group**
```
Field Group: "Volunteer Fields Export"
Location Rules: User Role equals Volunteer
Fields:
  - Field Name: volunteer_skills
  - Field Type: Checkbox
  - Choices: gardening|Gardening
             transportation|Transportation  
             companionship|Companionship
             technology_help|Technology Help
             meal_preparation|Meal Preparation
```

#### 2. **Create Task Requirements Field Group**
```
Field Group: "Volunteer Task Details"
Location Rules: Post Type equals Volunteer Tasks
Fields:
  - Field Name: required_skills
  - Field Type: Checkbox (matching volunteer_skills choices)
  - Field Name: task_deadline
  - Field Type: Date Picker
  - Field Name: estimated_time
  - Field Type: Number
```

### WP Mail SMTP Setup for KCN

#### 1. **Install and Configure Plugin**
- Navigate to Plugins → Add New
- Search for "WP Mail SMTP by WPForms"
- Install and Activate

#### 2. **Configure SMTP Settings**
```
Mailer: Other SMTP
SMTP Host: mail.kcnseniors.coop
Encryption: SSL
SMTP Port: 465
Auto TLS: ON
Authentication: ON
SMTP Username: info@kcnseniors.coop
SMTP Password: [Secure Password]
```

#### 3. **Test Email Configuration**
- Go to WP Mail SMTP → Email Test
- Enter test recipient email address
- Click "Send Email" to verify delivery
- Check recipient inbox for successful delivery

## Integration with KCN Technology Stack

### WordPress Core Integration
- **User Management**: ACF extends WordPress users with volunteer skills
- **Post Types**: Custom post type for volunteer tasks with ACF fields
- **Email System**: WP Mail SMTP replaces `wp_mail()` function

### Plugin Compatibility
- **Members Plugin**: Role-based access works with ACF location rules
- **EventPrime**: Event-based volunteering can use ACF task fields
- **Elementor**: Forms can collect ACF data for volunteer applications
- **Hello Biz Theme**: Clean integration without theme conflicts

### Code Snippets Integration
The existing KCN Code Snippets can be enhanced with ACF/SMTP functionality:

```php
// Enhanced Code Snippet: Email notifications with ACF data
function kcn_enhanced_volunteer_notifications() {
    // Existing login/button customizations
    // Plus ACF-powered volunteer matching
    // Plus SMTP-delivered notifications
}
add_action('wp_loaded', 'kcn_enhanced_volunteer_notifications');
```

## Troubleshooting

### Common ACF Issues

#### Fields Not Displaying:
1. **Check Location Rules**: Verify field group is assigned to correct post type/user role
2. **Clear Cache**: Clear any caching plugins
3. **Check Permissions**: Ensure user role has permission to edit fields
4. **Plugin Conflicts**: Deactivate other plugins to test for conflicts

#### Field Data Not Saving:
1. **Verify Field Names**: Ensure `get_field()` uses correct field name
2. **Check User Permissions**: Verify user can edit the content
3. **Database Issues**: Check if field data appears in `wp_postmeta` or `wp_usermeta`
4. **Theme Conflicts**: Test with default WordPress theme

### Common WP Mail SMTP Issues

#### Emails Not Sending:
1. **SMTP Settings**: Verify host, port, and encryption settings
2. **Authentication**: Check username and password are correct
3. **Firewall Issues**: Ensure hosting provider isn't blocking SMTP ports
4. **DNS Configuration**: Verify mail server DNS settings

#### Emails Going to Spam:
1. **SPF Records**: Add SPF record to DNS settings
2. **DMARC Configuration**: Set up DMARC policy for domain
3. **From Email**: Ensure "From" email matches domain
4. **Content Issues**: Avoid spam trigger words in subject/content

### KCN-Specific Debugging

#### Volunteer Matching Not Working:
```php
// Debug ACF field retrieval
$volunteer_skills = get_field('volunteer_skills', 'user_' . $user_id);
error_log('Volunteer Skills: ' . print_r($volunteer_skills, true));

// Debug task requirements
$required_skills = get_field('required_skills', $task_id);
error_log('Required Skills: ' . print_r($required_skills, true));

// Test SMTP functionality
wp_mail('test@example.com', 'Test Subject', 'Test message');
```

#### Email Template Issues:
1. **ACF Field Errors**: Check if `get_field()` returns expected data
2. **Email Formatting**: Verify HTML/plain text formatting
3. **Character Encoding**: Ensure proper UTF-8 encoding for email content
4. **Variable Substitution**: Test dynamic content replacement

## Best Practices

### ACF Best Practices
1. **Naming Conventions**: Use descriptive field names (`volunteer_skills` vs `skills`)
2. **Field Organization**: Group related fields in logical field groups
3. **Performance**: Use `get_field()` instead of `get_post_meta()` when possible
4. **Backup**: Regular backup of field group configurations
5. **Documentation**: Document custom field purposes and usage

### SMTP Best Practices
1. **Security**: Use strong passwords and encryption
2. **Monitoring**: Regularly test email delivery
3. **Rate Limiting**: Avoid sending too many emails quickly
4. **Error Handling**: Implement proper error handling for failed emails
5. **Backup Plans**: Consider backup SMTP providers

### Integration Best Practices
1. **Error Logging**: Log ACF field retrieval and email sending attempts
2. **User Experience**: Provide feedback when emails are sent
3. **Data Validation**: Validate ACF data before using in emails
4. **Testing**: Regularly test the complete volunteer matching workflow
5. **Scalability**: Design system to handle growing volunteer database

## Future Enhancements

### Potential ACF Upgrades
- **Repeater Fields**: Multiple contact methods per volunteer
- **Flexible Content**: Complex task descriptions with multiple sections
- **Options Pages**: Global volunteer program settings

### Potential WP Mail SMTP Upgrades
- **Email Logging**: Track which volunteers receive notifications
- **Delivery Reports**: Monitor email open rates and engagement
- **Backup Connections**: Secondary SMTP for redundancy
- **Advanced Analytics**: Detailed volunteer communication metrics

### System Expansions
- **Mobile App Integration**: ACF API for mobile volunteer apps
- **Calendar Integration**: Link volunteer tasks to EventPrime events
- **Reporting Dashboard**: Analytics on volunteer engagement and task completion
- **Automated Follow-up**: Email sequences for task confirmations and completions

## Official Documentation Links

### ACF Resources:
- **ACF Official Documentation**: [advancedcustomfields.com/resources/](https://advancedcustomfields.com/resources/)
- **ACF Field Types Guide**: Getting Started with ACF
- **ACF Support Forum**: [support.advancedcustomfields.com](https://support.advancedcustomfields.com)
- **ACF Plugin Repository**: [wordpress.org/plugins/advanced-custom-fields/](https://wordpress.org/plugins/advanced-custom-fields/)

### WP Mail SMTP Resources:
- **WP Mail SMTP Documentation**: [wordpress.org/plugins/wp-mail-smtp/](https://wordpress.org/plugins/wp-mail-smtp/)
- **SMTP Configuration Guide**: WPForms SMTP Setup Tutorial
- **Email Deliverability Best Practices**: [wpmailsmtp.com](https://wpmailsmtp.com)

### WordPress Integration:
- **WordPress User Fields**: ACF User Field Documentation
- **WordPress Email Functions**: WordPress `wp_mail()` function documentation
- **Custom Post Types**: WordPress custom post type development guide

## Integration with Documentation

### Related Documentation Sections:
- **[Volunteer System Overview](/docs/volunteer-management/volunteer-system-overview)**: Complete volunteer management system
- **[Automated Task Matching](/docs/automated-matching)**: How the skill-based matching system works
- **[Email Notification System](/docs/email-notifications)**: Managing automated communications
- **[Functions.php Customizations](/docs/custom-development/functions-php)**: Technical implementation details
- **[Code Snippets Plugin](/docs/custom-development/code-snippets-plugin)**: Custom functionality management

### Cross-References:
- **Volunteer Management**: See [Volunteer Profiles](/docs/volunteer-profiles)
- **Task Management**: See [Task Creation and Management](/docs/task-management)
- **User Management**: See [User Management Overview](/docs/user-management/user-management-overview)
- **Event Integration**: See [Event Management Overview](/docs/event-management/event-management-overview)

---

*This documentation covers ACF and WP Mail SMTP integration for the volunteer management system. For technical implementation details, see the Functions.php Customizations and Code Snippets Plugin documentation.*
