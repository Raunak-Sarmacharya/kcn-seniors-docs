---
title: "EventPrime Plugin Integration"
description: "Technical integration details, advanced features, and troubleshooting for EventPrime"
sectionId: "event-management"
slug: "eventprime-integration"
tags: ["EventPrime", "integration", "technical", "advanced features", "troubleshooting", "plugin configuration"]
difficulty: "advanced"
estimatedTime: "30 minutes"
lastUpdated: "2025-01-15"
order: 4
---

# EventPrime Plugin Integration

This guide covers the technical integration details, advanced features, and troubleshooting for the EventPrime plugin in your KCN Seniors website.

## Technical Implementation

### Role-Based Access Control System

**Location Protection Implementation:**
Your website implements sophisticated access control that selectively hides sensitive venue information based on user roles while maintaining public visibility for general event information.

**Technical Implementation (from functions.php):**
```php
function hide_event_details_for_subscriber_and_guest() {
    $user = wp_get_current_user();
    $is_subscriber = in_array('subscriber', (array) $user->roles);
    $is_guest = !is_user_logged_in();

    if ( $is_guest || $is_subscriber ) {
        // CSS injection hides EventPrime venue elements
        // Replaces with "Become member to view" message
    }
}
add_action('wp_head', 'hide_event_details_for_subscriber_and_guest');
```

### Protected EventPrime Elements

**Hidden Components:**
```css
/* EventPrime elements that get hidden */
.ep-box-card-venue.ep-card-venue.ep-text-muted.ep-text-small.ep-text-truncate
div#ep-sl-venue-map  
.ep_event_popup_address
.ep-slide-item .ep-box-card-venue.ep-card-venue.ep-text-muted.ep-text-truncate
```

**Visual Replacement:**
- Original venue content becomes transparent
- CSS `::before` pseudo-elements display "Become member to view" message
- Red text (#d00) with bold styling for visibility
- Maintains layout structure while protecting information

### Global Role-Based Protection

**Consistent Access Control:**
All three display formats implement the same role-based access control:
- Event titles, descriptions, dates, and times remain visible to all users
- Venue details, addresses, and maps hidden from public and subscribers
- "Become member to view" messaging displayed consistently across all views

## Advanced Custom Fields (ACF) Integration

**Extended Functionality:**
```php
// ACF integration for EventPrime events
add_filter('acf/location/rule_values/post_type', function ($choices) {
    $choices['em_event'] = 'EventPrime Event';
    return $choices;
});

// Custom location shortcode
add_shortcode('location', function($atts) {
    return esc_html(get_field('location', $atts['id'] ?? get_the_ID()) ?: '');
});
```

**Benefits:**
- Add custom fields to events beyond EventPrime's defaults
- Create specialized event data collection
- Enhanced event categorization and filtering options
- Custom shortcodes for protected content display

## Available EventPrime Features (Not Currently Used)

### Booking and Ticketing System

**EventPrime Booking Features:**
- **Ticket Sales**: Paid and free event tickets
- **Booking Management**: Attendee registration and management (not currently enabled)
- **Payment Integration**: WooCommerce and payment gateway support
- **Capacity Management**: Event capacity limits and waitlists

**Documentation**: https://eventprime.io/documentation/bookings/

### Event Marketing Tools

**Available Marketing Features:**
- **Email Marketing**: Automated attendee communications
- **Social Media Integration**: Facebook, Twitter event promotion
- **Event Analytics**: Attendance tracking and event performance
- **Export Tools**: Attendee data export for marketing

**Documentation**: https://eventprime.io/documentation/marketing/

### Advanced Event Types

**Specialized Event Options:**
- **Multi-day Events**: Conferences and extended activities
- **Event Series**: Linked event sequences with shared information
- **Virtual Events**: Online event hosting and management
- **Hybrid Events**: Combined in-person and virtual attendance

**Documentation**: https://eventprime.io/documentation/event-types/

## Event Display Formats and Shortcodes

### Multiple Display Options

Your website showcases events in three distinct formats optimized for different user experiences:

#### 1. Slider Carousel (Home Page)
**Location**: Home page event showcase
**Purpose**: Dynamic, engaging presentation of upcoming events
**Features**:
- Horizontal scrolling through multiple events
- Visual event images and key details
- Role-based location protection applied
- Mobile-responsive design

**EventPrime Shortcode**: 
```php
[em_events view="slider"]  // Example - actual shortcode may vary
```

#### 2. Grid View (Home Page) 
**Location**: Home page event listing
**Purpose**: Organized overview of multiple events
**Features**:
- Card-based layout showing multiple events simultaneously
- Event images, titles, dates prominently displayed
- Role-based location restrictions applied
- Filterable and sortable options

**EventPrime Shortcode**:
```php
[em_events view="grid"]  // Example - actual shortcode may vary
```

#### 3. Calendar View (Events Page)
**Location**: Dedicated events page
**Purpose**: Traditional calendar interface for date-based event browsing
**Features**:
- Monthly calendar layout
- Events displayed on appropriate dates
- Click-through to detailed event pages
- Role-based venue protection on detail pages

**EventPrime Shortcode**:
```php
[em_events view="calendar"]  // Example - actual shortcode may vary
```

### Shortcode Configuration Options

**Common Shortcode Parameters:**
```php
[em_events 
    view="calendar"           // Display format
    limit="10"                // Number of events to show
    category="meetings"       // Filter by category
    orderby="date"            // Sort order
    order="ASC"               // Sort direction
    show_past="false"         // Include past events
]
```

**Advanced Shortcode Features:**
- Category filtering and exclusion
- Date range specifications
- Custom event ordering
- Pagination controls
- Responsive design options

## Integration with WordPress User System

### EventPrime and WordPress Roles

**Seamless Integration:**
EventPrime utilizes WordPress's built-in user system, making it fully compatible with your role-based access control:

- **WordPress Users**: All user accounts work with EventPrime
- **Role Recognition**: EventPrime respects WordPress role assignments
- **Capability System**: Integrates with WordPress capabilities and permissions

### Members Plugin Compatibility

**Enhanced Role Management:**
Your Members plugin configuration extends to EventPrime functionality:

- **Custom Roles**: All custom roles (Member, Volunteer) work with EventPrime
- **Capability Control**: Fine-tune EventPrime permissions per role
- **Content Protection**: Members plugin settings apply to EventPrime content

### Advanced User Integration

**Custom User Fields:**
```php
// Add custom user fields for EventPrime integration
add_action('show_user_profile', 'add_eventprime_user_fields');
add_action('edit_user_profile', 'add_eventprime_user_fields');

function add_eventprime_user_fields($user) {
    // Custom fields for event preferences
    // Integration with volunteer system
    // Member-specific event settings
}
```

## Performance Optimization

### Caching Strategies

**EventPrime Caching:**
- Enable EventPrime's built-in caching features
- Configure cache duration for optimal performance
- Clear cache when updating event information
- Monitor cache hit rates and performance

**WordPress Integration Caching:**
- Use WordPress object caching for user roles
- Cache role-based protection rules
- Optimize database queries for event display
- Monitor memory usage with large event lists

### Database Optimization

**EventPrime Database Tables:**
- Regular optimization of EventPrime tables
- Monitor table sizes and growth
- Archive old events to improve performance
- Regular database maintenance and cleanup

**Custom Integration Tables:**
- Optimize custom tables for role-based protection
- Index frequently queried fields
- Monitor query performance
- Regular database backups

## Security Considerations

### Role-Based Protection Security

**CSS Injection Security:**
- Validate user roles server-side
- Sanitize CSS output to prevent XSS
- Use nonces for AJAX requests
- Regular security audits of protection system

**Content Protection:**
- Verify protection rules on all display formats
- Test protection with different user roles
- Monitor for bypass attempts
- Regular security updates

### Plugin Security

**EventPrime Security:**
- Keep EventPrime plugin updated
- Monitor for security vulnerabilities
- Use HTTPS for all event pages
- Regular security scans

**WordPress Integration Security:**
- Validate all user inputs
- Sanitize output data
- Use WordPress security best practices
- Regular security audits

## Troubleshooting Common Issues

### Event Display Problems

**Problem**: Events not showing in calendar view
- **Check**: Verify event dates are properly set
- **Solution**: Ensure events are published (not draft status)
- **Verify**: Check EventPrime shortcode parameters

**Problem**: Location details visible to non-members
- **Check**: Confirm user role assignments
- **Solution**: Clear browser cache and test with different user accounts
- **Verify**: Check if CSS protection is loading properly

### Recurring Event Issues

**Problem**: Custom dates not saving properly  
- **Check**: Verify sufficient user permissions for event editing
- **Solution**: Use EventPrime's bulk date tools for multiple dates
- **Test**: Create single custom date first to verify functionality

### Role-Based Access Troubleshooting

**Problem**: "Become member to view" not displaying
- **Check**: Verify CSS is loading in page source
- **Solution**: Check for theme conflicts overriding styles
- **Test**: Temporarily deactivate other plugins to isolate issues

**Problem**: Members cannot see venue information
- **Check**: Confirm user has proper Member role (not Subscriber)
- **Solution**: Review role assignment in user profile
- **Verify**: Test with Administrator account to confirm venue data exists

### EventPrime Plugin Conflicts

**Problem**: Events not displaying in any format
- **Check**: Verify EventPrime plugin is active and updated
- **Solution**: Check for theme compatibility issues
- **Test**: Switch to default WordPress theme temporarily

**Problem**: Shortcodes not working properly
- **Check**: Verify correct EventPrime shortcode syntax
- **Solution**: Consult EventPrime documentation for current shortcode formats
- **Update**: Ensure EventPrime plugin is current version

### Performance Issues

**Problem**: Slow event page loading
- **Check**: Monitor server resources and database performance
- **Solution**: Enable caching and optimize database queries
- **Test**: Check with different user roles and event counts

**Problem**: Memory usage issues with large event lists
- **Check**: Monitor PHP memory limits and usage
- **Solution**: Implement pagination and limit event displays
- **Optimize**: Use lazy loading for event images and content

## Advanced Configuration

### Custom Event Templates

**Template Customization:**
```php
// Custom EventPrime template overrides
add_filter('em_event_template_path', 'custom_event_template_path');
function custom_event_template_path($template_path) {
    // Custom template logic for role-based display
    return $template_path;
}
```

**Custom CSS Integration:**
```css
/* Custom styling for role-based protection */
.event-protected .venue-details {
    position: relative;
}

.event-protected .venue-details::before {
    content: "Become member to view";
    color: #d00;
    font-weight: bold;
}
```

### API Integration

**EventPrime REST API:**
- Access event data programmatically
- Custom integrations with external systems
- Automated event management
- Third-party service integration

**Custom Endpoints:**
```php
// Custom API endpoints for event data
add_action('rest_api_init', function () {
    register_rest_route('kcn/v1', '/events', array(
        'methods' => 'GET',
        'callback' => 'get_protected_events',
        'permission_callback' => 'check_user_permissions'
    ));
});
```

## Monitoring and Maintenance

### System Health Monitoring

**EventPrime Health Checks:**
- Monitor plugin functionality and performance
- Check for database table integrity
- Verify shortcode functionality
- Test role-based protection consistency

**Integration Monitoring:**
- Monitor WordPress user system integration
- Check Members plugin compatibility
- Verify ACF integration functionality
- Test custom shortcode performance

### Regular Maintenance Tasks

**Weekly Tasks:**
- Check for EventPrime plugin updates
- Monitor event display functionality
- Test role-based protection system
- Review error logs for issues

**Monthly Tasks:**
- Database optimization and cleanup
- Performance monitoring and optimization
- Security audit of protection system
- Backup verification and testing

**Quarterly Tasks:**
- Comprehensive system review
- Update documentation and procedures
- Performance benchmarking
- Security vulnerability assessment

## EventPrime Resources and Support

### Official Documentation
- **Main Documentation**: https://eventprime.io/documentation/
- **Getting Started**: https://eventprime.io/documentation/getting-started/
- **Shortcode Reference**: https://eventprime.io/documentation/shortcodes/
- **Troubleshooting**: https://eventprime.io/documentation/troubleshooting/

### Plugin Support
- **Support Forum**: WordPress.org plugin forum
- **Premium Support**: Available with EventPrime Pro
- **Community**: EventPrime user community and discussions

### Updates and Compatibility
- **Plugin Updates**: Regular updates for WordPress compatibility
- **Version Compatibility**: Check current WordPress version support
- **Backup Recommendations**: Always backup before major updates

## Next Steps

- Review [Role-Based Event Protection](/docs/event-management/event-protection) for protection details
- Learn about [Creating and Managing Events](/docs/event-management/event-creation)
- Explore [Custom Development](/docs/custom-development/functions-php) for technical implementation
- Discover [WordPress Code Snippets Plugin Integration](/docs/custom-development/code-snippets-plugin) for custom code management
- Understand [User Management System](/docs/user-management/overview) for role configuration

---

*This guide covers technical integration details for EventPrime. For basic event management, see the Event Creation Guide.*
