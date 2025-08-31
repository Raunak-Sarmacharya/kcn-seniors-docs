---
title: "Role-Based Event Protection"
description: "Protecting venue information from non-members while keeping event details public"
sectionId: "event-management"
slug: "event-protection"
tags: ["event protection", "venue information", "role-based access", "EventPrime", "content protection"]
difficulty: "intermediate"
estimatedTime: "20 minutes"
lastUpdated: "2025-01-15"
order: 3
---

# Role-Based Event Protection

This feature automatically protects sensitive event location information while keeping general event details public. It works seamlessly with your EventPrime event management plugin.

## Understanding the Protection System

**What This Feature Does:**
Your website automatically hides specific venue information from non-members while showing them everything else about events. This encourages membership while maintaining transparency about your activities.

**Protected Information:**
- Exact venue addresses and contact details
- Interactive maps and driving directions  
- Private meeting location specifics

**Public Information (Always Visible):**
- Event titles, dates, and times
- General descriptions and activities
- Event information and details
- General location area (e.g., "Bauline Community Area")

## How Access Levels Work

| User Type | What They See |
|-----------|---------------|
| **Visitors (Not Logged In)** | Event details + "Become member to view" for venue info |
| **Subscribers** | Same as visitors - venue info protected |
| **Members** | Full event details including exact venues and maps |
| **Volunteers** | Full access (includes member benefits) |
| **Administrators** | Complete access to all information |

## Technical Implementation

**For Developers:**
The system uses WordPress's `wp_head` action hook to inject CSS that selectively hides EventPrime's venue display elements:

```php
function hide_event_details_for_subscriber_and_guest() {
    $user = wp_get_current_user();
    $is_subscriber = in_array('subscriber', (array) $user->roles);
    $is_guest = !is_user_logged_in();

    if ( $is_guest || $is_subscriber ) {
        // CSS injection to hide and replace EventPrime venue elements
    }
}
add_action('wp_head', 'hide_event_details_for_subscriber_and_guest');
```

**Targeted EventPrime Elements:**
- `.ep-box-card-venue` - Venue name and address displays
- `#ep-sl-venue-map` - Interactive venue maps
- `.ep_event_popup_address` - Address popups in event details

**Replacement Method:**
- Original content becomes transparent using `color: transparent !important`
- Child elements hidden with `visibility: hidden !important`  
- CSS `::before` pseudo-elements display "Become member to view" message
- Maintains original layout structure and spacing

## EventPrime Plugin Integration

**Plugin Compatibility:**
This feature works specifically with the EventPrime event management plugin (tested with current versions). It integrates with:

- EventPrime's event display templates
- Calendar and list view layouts
- Event detail pages and popups
- Mobile responsive designs

**Additional Integrations:**
- **Advanced Custom Fields (ACF)**: Supports custom location fields
- **Elementor Page Builder**: Compatible with Elementor event displays  
- **Custom Shortcodes**: `[location id="123"]` displays protected location data

## Managing Events with Protection

**For Administrators - Setting Up Protected Events:**

1. **Create Event in EventPrime:**
   - Navigate to Events → Add New Event
   - Fill in event title, description, date, and time
   - Add general information that should be public

2. **Add Venue Information:**
   - In the venue section, add the complete address
   - Include contact details and special instructions
   - Add maps and driving directions
   - This information will be automatically protected

3. **Event Categories (Optional):**
   - Assign events to categories for better organization
   - Categories can help identify member-only vs. public events
   - System adds category-specific CSS classes for styling

4. **Publishing:**
   - Publish the event normally
   - Protection is applied automatically based on user roles
   - No additional configuration needed

**Best Practices:**
- Include general location area in public description (e.g., "Flatrock Community Center area")
- Save specific addresses only in EventPrime's venue fields
- Test event visibility by logging out or using different user accounts
- Use descriptive event categories for better organization

## Troubleshooting Common Issues

**Problem: Venue information shows for non-members**
- **Solution**: Check if user is accidentally assigned Member role or higher
- **Check**: Verify EventPrime is using standard CSS classes
- **Test**: Clear browser cache and test with incognito/private window

**Problem: Members cannot see venue information**  
- **Solution**: Confirm user has Member role (not just Subscriber)
- **Check**: Test with Administrator account to verify venue data exists
- **Verify**: Check if caching plugin is interfering with role detection

**Problem: "Become member to view" message not displaying**
- **Solution**: Check if theme is overriding CSS styles
- **Fix**: Verify WordPress `wp_head` action is functioning properly
- **Test**: View page source to confirm CSS injection is occurring

## Integration with User Management

This event protection system works in conjunction with your [User Management System](/docs/user-management/user-management-overview) and [Role-Based Access Control](/docs/user-management/role-based-access). The protection is automatically applied based on user roles defined in the [Members Plugin](/docs/user-management/members-plugin-guide).

## Integration with Other Systems

### User Management Integration
This event protection system works in conjunction with your [User Management System](/docs/user-management/user-management-overview) and [Role-Based Access Control](/docs/user-management/role-based-access). The protection is automatically applied based on user roles defined in the [Members Plugin](/docs/user-management/members-plugin-guide).

### Event Management Integration
The protection system integrates seamlessly with the [Event Management System](/docs/event-management/event-management-overview) and works across all [Event Display Formats](/docs/event-management/eventprime-integration#event-display-formats-and-shortcodes).

## Next Steps

- Learn about [Creating and Managing Events](/docs/event-management/event-creation)
- Understand [EventPrime Plugin Integration](/docs/event-management/eventprime-integration)
- Review [Custom Development](/docs/custom-development/functions-php) for technical details
- Explore [User Management System](/docs/user-management/user-management-overview) for role configuration

---

*This documentation covers the role-based event protection system. For technical implementation details, see the Custom Development section.*
