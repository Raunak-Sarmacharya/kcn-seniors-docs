---
title: "Quick Reference Guide"
description: "Quick access to common tasks and system information for KCN Seniors website"
sectionId: "getting-started"
slug: "quick-reference"
tags: ["quick reference", "common tasks", "system information", "kcn seniors", "wordpress", "eventprime", "elementor"]
difficulty: "beginner"
estimatedTime: "10 minutes"
lastUpdated: "2025-01-15"
order: 3
---

# Quick Reference Guide

## System Overview

### KCN Seniors Website
- **URL**: KCNseniors.coop
- **Platform**: WordPress with specialized plugins
- **Purpose**: Community management for Killick Coast North Seniors Co-operative
- **Serving**: Bauline, Flatrock, and Pouch Cove, Newfoundland, Canada

### Core Technology Stack
- **WordPress**: Primary CMS with Block Editor
- **EventPrime**: Event management system
- **Members Plugin**: Role-based access control
- **ACF**: Advanced Custom Fields for volunteer profiles
- **Code Snippets**: Custom functionality implementation
- **Elementor**: Page builder and forms
- **Next.js**: Documentation portal (this system)

## User Management Quick Reference

### Role Hierarchy (6 Levels)
1. **Public** - All visitors (Level 1)
2. **Subscriber** - Logged-in users (Level 2)
3. **Member** - Premium members (Level 3)
4. **Volunteer** - Community volunteers (Level 4)
5. **Administrator 2** - Limited admin (Level 5)
6. **Administrator** - Full control (Level 6)

### Common User Management Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Create New User | Users → Add New | [WordPress Users Management](/docs/user-management/wordpress-users-management) |
| Edit User Role | Users → All Users → Edit | [Role-Based Access Control](/docs/user-management/role-based-access) |
| Manage Roles | Members → Roles | [Members Plugin Guide](/docs/user-management/members-plugin-guide) |
| Reset Password | Users → All Users → Edit | [Password Management](/docs/user-management/password-management) |
| Review Applications | Elementor → Submissions | [Form Submissions Management](/docs/page-builder-forms/form-submissions-management) |

### Role Permissions Summary

| Role | Dashboard Access | Event Venues | Member Content | Volunteer Tools | Admin Features |
|------|------------------|--------------|----------------|-----------------|----------------|
| **Public** | ❌ No | ❌ Hidden | ❌ No | ❌ No | ❌ No |
| **Subscriber** | ❌ No | ❌ Hidden | ❌ No | ❌ No | ❌ No |
| **Member** | ❌ No | ✅ Full | ✅ Full | ❌ No | ❌ No |
| **Volunteer** | ✅ Limited | ✅ Full | ✅ Full | ✅ Full | ❌ No |
| **Admin 2** | ✅ Limited | ✅ Full | ✅ Full | ✅ Full | ✅ Limited |
| **Administrator** | ✅ Full | ✅ Full | ✅ Full | ✅ Full | ✅ Full |

## Event Management Quick Reference

### EventPrime System
- **Access**: Events → Add New Event
- **Display Formats**: Calendar, Grid, Slider
- **Protection**: Automatic venue hiding for non-members
- **Integration**: WordPress users and Members plugin

### Common Event Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Create Event | Events → Add New Event | [Event Creation](/docs/event-management/event-creation) |
| Manage Categories | Events → Event Categories | [Event Creation](/docs/event-management/event-creation) |
| Configure Venues | Events → Venues | [Event Protection](/docs/event-management/event-protection) |
| Set Recurring Events | Event creation with custom dates | [Event Creation](/docs/event-management/event-creation) |

### Event Protection System
- **Public/Subscriber**: Event details visible, venues hidden
- **Member+**: Full event information including venues
- **Implementation**: CSS-based content hiding
- **Message**: "Become member to view" for protected content

## Blog Management Quick Reference

### WordPress Posts System
- **Editor**: Block Editor (Gutenberg)
- **Comments**: Logged-in users only
- **Categories**: Organized content structure
- **Integration**: WordPress user system

### Comments System
- **Access**: Comments → All Comments
- **Moderation**: Manual approval required
- **Spam Protection**: Akismet integration
- **Role-Based**: Members plugin integration

### Common Blog Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Create Post | Posts → Add New | [Blog System Overview](/docs/blog-management/blog-system-overview) |
| Manage Comments | Comments → All Comments | [Comments System Management](/docs/blog-management/comments-system-management) |
| Moderate Comments | Comments → Pending | [Comments System Management](/docs/blog-management/comments-system-management) |
| Set Categories | Posts → Categories | [Blog System Overview](/docs/blog-management/blog-system-overview) |
| Featured Images | Post editor → Featured Image | [Media Library Management](/docs/content-management/media-library-management) |

## Content Management Quick Reference

### Media Library
- **Access**: Media → Library
- **Organization**: Year/month folders
- **Integration**: EventPrime, Block Editor, Elementor
- **Optimization**: Automatic image sizing

### Common Media Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Upload Media | Media → Add New | [Media Library Management](/docs/content-management/media-library-management) |
| Organize Files | Media → Library | [Media Library Management](/docs/content-management/media-library-management) |
| Optimize Images | Before upload | [Media Library Management](/docs/content-management/media-library-management) |
| Event Images | Events → Edit Event | [Media Library Management](/docs/content-management/media-library-management) |

### Image Specifications
- **Featured Images**: 1200×630 pixels (16:9)
- **Event Images**: 1200×630 pixels
- **Content Images**: 800×600 maximum
- **Formats**: JPG, PNG, GIF, WebP

## Volunteer Management Quick Reference

### Volunteer System
- **Access**: Volunteer Tasks (dashboard menu)
- **Matching**: Automated skill-based matching
- **Notifications**: Email system for assignments
- **Profiles**: ACF-based skill management

### Common Volunteer Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Create Task | Volunteer Tasks → Add New | [Task Management](/docs/volunteer-management/task-management) |
| Manage Volunteers | Users → All Users (filter by role) | [Volunteer Profiles](/docs/volunteer-management/volunteer-profiles) |
| Assign Skills | Users → Edit → ACF Fields | [Volunteer Profiles](/docs/volunteer-management/volunteer-profiles) |
| Review Matches | Volunteer Tasks → All Tasks | [Automated Matching](/docs/volunteer-management/automated-matching) |

### Volunteer Workflow
1. Create volunteer account (Administrator)
2. Assign ACF skill tags
3. Create tasks with skill requirements
4. Automated matching system
5. Email notifications sent
6. Task completion tracking

## Page Builder & Forms Quick Reference

### Elementor System
- **Access**: Pages → Add New → Edit with Elementor
- **Forms**: Elementor → Submissions
- **Templates**: Templates → Saved Templates
- **Integration**: WordPress users and Members plugin

### WPForms System
- **Access**: WPForms → All Forms
- **Forms**: WPForms → Entries
- **Templates**: Built-in form templates
- **Integration**: Contact Us page, email notifications

### Common Elementor Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Create Page | Pages → Add New → Edit with Elementor | [Elementor Integration](/docs/page-builder-forms/elementor-integration) |
| Design Forms | Elementor form widget | [Form Submissions Management](/docs/page-builder-forms/form-submissions-management) |
| Review Submissions | Elementor → Submissions | [Form Submissions Management](/docs/page-builder-forms/form-submissions-management) |
| Custom Design | Elementor page editor | [Custom Page Design](/docs/page-builder-forms/custom-page-design) |

### Common WPForms Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Manage Contact Forms | WPForms → All Forms | [WPForms Lite Integration](/docs/page-builder-forms/wpforms-integration) |
| Review Submissions | WPForms → Entries | [WPForms Lite Integration](/docs/page-builder-forms/wpforms-integration) |
| Configure Email | WPForms → Settings | [WPForms Lite Integration](/docs/page-builder-forms/wpforms-integration) |
| Spam Protection | WPForms → Settings | [WPForms Lite Integration](/docs/page-builder-forms/wpforms-integration) |

### Form Types
- **Membership Applications**: Member recruitment (Elementor)
- **Contact Forms**: General inquiries (WPForms)
- **Newsletter Forms**: Newsletter subscriptions (Elementor)
- **Event Registration**: Not currently enabled (EventPrime feature)
- **Contact Us Page**: Visitor inquiries (WPForms)

## Custom Development Quick Reference

### Code Snippets Plugin
- **Access**: Snippets → All Snippets
- **Purpose**: Custom functionality without theme modification
- **Safety**: Snippets survive theme changes
- **Management**: Easy activation/deactivation

### Active Custom Snippets

| Snippet | Purpose | Status |
|---------|---------|--------|
| Custom Button Text | "Login to View Details" for non-members | ✅ Active |
| Email Login | Login with email address | ✅ Active |
| Location Show Work | Venue display for subscribers | ✅ Active |
| Slider Limit | Event slider functionality | ✅ Active |
| Future Events Shortcode | Upcoming events display | ✅ Active |

### Common Development Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Edit Snippets | Snippets → All Snippets | [Code Snippets Plugin](/docs/custom-development/code-snippets-plugin) |
| Functions.php | Theme editor | [Functions.php Customizations](/docs/custom-development/functions-php) |
| ACF Fields | Custom Fields → Field Groups | [ACF Integration](/docs/custom-development/acf-integration) |
| CSS Injection | Custom code for styling | [CSS Injection System](/docs/custom-development/css-injection) |

## Security & Access Control Quick Reference

### Security Measures
- **Role-Based Permissions**: Principle of least privilege
- **Password Policies**: Strong password requirements
- **Two-Factor Authentication**: Enhanced login security
- **Content Protection**: Role-based content access
- **File Upload Security**: MIME type validation

### Access Control Implementation
- **Content Protection**: Members Plugin integration
- **Menu Access**: Role-based navigation visibility
- **Widget Access**: Conditional widget display
- **Dashboard Access**: Role-specific admin areas

### Common Security Tasks

| Task | Location | Documentation |
|------|----------|---------------|
| Review User Roles | Members → Roles | [Role-Based Access Control](/docs/user-management/role-based-access) |
| Password Reset | Users → All Users → Edit | [Password Management](/docs/user-management/password-management) |
| Content Protection | Edit Post/Page → Access | [Role-Based Access Control](/docs/user-management/role-based-access) |
| Security Monitoring | Regular audits | [Maintenance & Support](/docs/maintenance-support/overview) |

## Maintenance & Support Quick Reference

### Regular Maintenance Schedule

#### Weekly Tasks
- Review new user registrations
- Monitor security logs
- Check for urgent updates
- Review form submissions

#### Monthly Tasks
- User account audit
- Review role permissions
- Update documentation
- Backup configurations
- Review Elementor forms
- Review WPForms submissions

#### Quarterly Tasks
- Security assessment
- Role structure evaluation
- Staff training updates
- Performance optimization

### Common Maintenance Tasks

| Task | Frequency | Documentation |
|------|-----------|---------------|
| User Audit | Monthly | [User Management Overview](/docs/user-management/overview) |
| Backup System | Weekly | [Backup Procedures](/docs/maintenance-support/backup-procedures) |
| Update Plugins | As needed | [Maintenance Schedule](/docs/maintenance-support/maintenance-schedule) |
| Performance Check | Monthly | [Performance Monitoring](/docs/maintenance-support/performance-monitoring) |

## Emergency Contacts & Support

### Critical Issues (Site Down/Security)
- **WordPress.org Support**: https://wordpress.org/support/
- **Members Plugin Support**: https://members-plugin.com/
- **EventPrime Support**: https://eventprime.co/support/
- **Elementor Support**: https://elementor.com/support/
- **WPForms Support**: https://wpforms.com/support/

### Documentation Resources
- **WordPress User Management**: https://learn.wordpress.org/lesson-plan/user-management/
- **Members Plugin Docs**: https://members-plugin.com/docs/
- **EventPrime Documentation**: https://eventprime.co/docs/
- **Elementor Documentation**: https://elementor.com/help/
- **WPForms Documentation**: https://wpforms.com/docs/
- **WordPress Roles & Capabilities**: https://wordpress.org/documentation/article/roles-and-capabilities/

### Backup Contact Information
- Keep website hosting provider contact information readily available
- Maintain backup admin account credentials in secure location
- Document any custom modifications made to the system
- Store Elementor and plugin license information securely
- Store WPForms and plugin license information securely

## System Integration Points

### WordPress Core Integration
- **User System**: All plugins use WordPress users
- **Media Library**: Centralized file management
- **Database**: Shared database structure
- **Security**: WordPress security features

### Plugin Integration
- **EventPrime + Members**: Role-based event access
- **ACF + Volunteer System**: Skill-based matching
- **Elementor + Forms**: Application management
- **WPForms + Contact**: Contact form management
- **Code Snippets + All**: Custom functionality

### External Systems
- **Email System**: SMTP for notifications
- **Documentation**: Next.js portal (this system)
- **Backup Systems**: Regular backups
- **Security Monitoring**: Ongoing security checks

## Quick Troubleshooting

### Common Issues

#### User Cannot Access Content
1. Verify user role assignment
2. Check Members plugin configuration
3. Clear website cache
4. Test with different user account

#### Password Reset Problems
1. Verify email configuration
2. Check spam/junk folders
3. Test SMTP settings
4. Generate manual password reset

#### Form Submission Issues
1. Check Elementor form configuration
2. Verify email settings
3. Test form functionality
4. Review spam filter settings

#### Event Display Problems
1. Check EventPrime configuration
2. Verify role-based protection settings
3. Test with different user types
4. Clear caching plugins

### Performance Optimization
- **Image Optimization**: Compress images before upload
- **Caching**: Enable caching for better performance
- **Plugin Management**: Use only necessary plugins
- **Database Optimization**: Regular database maintenance

---

*This quick reference guide provides easy access to common tasks and system information. For detailed guides, see the specific documentation sections.*

*For questions or suggestions about this quick reference, please contact your website administrator.*
