---
title: "User Management System"
description: "Complete user management, roles, permissions, and security"
sectionId: "user-management"
slug: "user-management-overview"
tags: ["user management", "overview", "roles", "permissions", "administration", "kcn seniors", "wordpress", "members plugin", "dual-system"]
difficulty: "beginner"
estimatedTime: "25 minutes"
lastUpdated: "2025-01-15"
order: 1
videoUrl: "https://player.vimeo.com/video/1114714099?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
---

# User Management System

User management is a critical aspect of WordPress site administration that involves managing user accounts, roles, and permissions to ensure proper access control and security. The KCN Seniors website uses a comprehensive approach combining WordPress's built-in user system with the Members plugin for enhanced functionality.

## 🎥 Video Tutorial Guide

**Watch the Complete Process:**

For a visual demonstration of user management basics, watch our comprehensive video tutorial below:

**What the Video Covers:**
- Changing user roles in the KCN Seniors system
- Adding volunteer tags to volunteer users
- Managing role permissions through the Members plugin
- Essential user administration tasks

**Important Disclaimer:**
⚠️ **Volunteer Tags**: Only add volunteer tags to users who have been assigned the **Volunteer role**. Adding volunteer tags to non-volunteer users can cause system conflicts and security issues.

**Related Video Tutorial:**
- [Video Tutorials Library](/docs/video-tutorials) - Complete collection of video guides

### Key Steps Covered in the Video

1. **User Role Management**
   - Navigate to Users section in WordPress
   - Change user roles appropriately
   - Understand role hierarchy and permissions

2. **Volunteer Tag Assignment**
   - Add volunteer tags to volunteer users only
   - Use ACF custom fields for skill tags
   - Ensure proper role assignment before tagging

3. **Members Plugin Configuration**
   - Access Members plugin settings
   - Modify role permissions and capabilities
   - Configure content access controls

4. **User Administration Best Practices**
   - Follow security protocols
   - Maintain proper role assignments
   - Regular user account auditing

## Core Principles

1. **Principle of Least Privilege**: Users should have the minimum permissions necessary to perform their tasks
2. **Regular Auditing**: Review user accounts monthly or bi-monthly, removing inactive users
3. **Security First**: Strong passwords, two-factor authentication when possible, and regular security reviews
4. **Clear Role Definitions**: Each role should have clearly defined responsibilities and limitations

> **📚 Prerequisites**: This section assumes you have completed the [WordPress Basics](/docs/wordpress-basics/wordpress-basics-overview) section. If you're new to WordPress, start there first.

## System Benefits for KCN Seniors

- **Volunteer Coordination**: Admin-created volunteer accounts with ACF skill tags for specific responsibilities
- **Member Benefits**: Exclusive content and event access for paying members
- **Security**: Protection against unauthorized access to sensitive information
- **Scalability**: Easy management as the organization grows

## Site Architecture Overview

The KCN Seniors website uses a dual-system approach for comprehensive user management:

### Core Components
1. **WordPress Users System**: Manages user accounts, profiles, and basic role assignment
2. **Members Plugin**: Provides advanced role and capability management with content protection features

### Integration Overview

**How the Two Systems Work Together:**

**WordPress Users System** ←→ **Members Plugin**
- **WordPress Users**: Manages user accounts, profiles, and basic information
- **Members Plugin**: Controls permissions, roles, and content access
- **Combined Result**: Complete user management solution

**The Integration Process:**
1. **User Account Creation**: WordPress Users creates the account
2. **Role Assignment**: Members Plugin assigns appropriate permissions
3. **Content Protection**: Members Plugin controls what users can access
4. **Ongoing Management**: Both systems work together for user administration

### Hierarchical Access Levels

KCN Seniors uses a **hierarchical role system** where each higher role includes all permissions from lower roles:

**Level 1 - Public Access**: Available to all website visitors
- General website information and public content

**Level 2 - Subscriber Access** (Logged-in users): Public + 
- Ability to comment on posts
- Basic logged-in user features

**Level 3 - Member Access** (Premium members): Subscriber + Public + 
- Member-only events and content
- Exclusive member resources and benefits

**Level 4 - Volunteer Access**: Member + Subscriber + Public + 
- Volunteer management tools and content
- Volunteer-specific website features

**Level 5 - Administrator Access**: Volunteer + Member + Subscriber + Public +
- Complete website control
- Plugin and theme management
- Full user and role management
- System settings and configuration

## Quick Reference Guide

### Common Tasks Quick Links

| Task | Location | Documentation Section |
|------|----------|----------------------|
| Add New User | Users → Add New | [Adding New Users](#adding-new-users) |
| Edit User Role | Users → All Users → Edit | [Role Assignment](#role-assignment) |
| Manage Roles | Members → Roles | [Managing Roles](#managing-roles) |
| Reset Password | Users → All Users → Edit | [Password Management](#password-management) |
| Protect Content | Edit Post/Page → Access | [Content Protection](#content-protection) |

### Hierarchical Role Summary

| Role | Dashboard Access | Access Level | Key Additional Permissions | Typical Use |
|------|------------------|--------------|----------------------------|-------------|
| **Administrator** | ✅ Complete | All levels 1-5 | Everything - full website control | Website owners/managers |
| **Volunteer** | ✅ Limited | Levels 1-4 | Volunteer tools + all member benefits | Community volunteers |
| **Member** | ❌ No | Levels 1-3 | Member-only content/events | Premium subscribers |
| **Subscriber** | ❌ No | Levels 1-2 | Commenting + basic logged-in features | Default new users |

## Emergency Contacts & Support

### Critical Issues (Site Down/Security)
- **WordPress.org Support**: https://wordpress.org/support/
- **Members Plugin Support**: https://members-plugin.com/

### Documentation Resources
- **WordPress User Management**: https://learn.wordpress.org/lesson-plan/user-management/
- **Members Plugin Docs**: https://members-plugin.com/docs/
- **WordPress Roles & Capabilities**: https://wordpress.org/documentation/article/roles-and-capabilities/

### Backup Contact Information
- Keep website hosting provider contact information readily available
- Maintain backup admin account credentials in secure location
- Document any custom modifications made to the system

## Getting Started

### Welcome & Overview

Welcome to the complete KCN Seniors website documentation! This comprehensive guide covers all aspects of managing the Killick Coast North Seniors Co-operative (KCNseniors.coop) website - a non-profit community service co-operative serving Bauline, Flatrock, and Pouch Cove in Newfoundland, Canada.

**About KCN Seniors Co-operative:**
KCN Seniors is a non-profit community service co-operative where volunteers offer services to help seniors age well at home and in their communities, following co-operative values and the Village Model of the Village to Village Network.

**Complete Website Management Includes:**
- **User Management**: User accounts, roles, and permissions (covered in this section)
- **Content Management**: Posts, pages, and website content *(documentation coming soon)*
- **Event Management**: Member and public events with [EventPrime integration](/docs/event-management/event-management-overview)
- **Service Management**: Volunteer services and booking systems *(documentation coming soon)*
- **Website Maintenance**: Updates, backups, and security *(documentation coming soon)*

**This Section Covers:**
- User account and profile management
- Understanding role-based access control
- Password security and best practices
- Content protection and member benefits
- Volunteer coordination through the website

**Before You Begin:**
- Ensure you have Administrator access to the WordPress dashboard
- Familiarize yourself with basic WordPress navigation
- Keep this documentation bookmarked for future reference

## Maintenance and Support

### Regular Maintenance Schedule

#### Weekly Tasks
- Review new user registrations and role assignments
- Monitor security logs for suspicious login activity
- Check for urgent system updates

#### Monthly Tasks  
- Comprehensive user account audit (remove inactive accounts)
- Review and optimize role permissions
- Update documentation for any system changes
- Backup user configurations and role settings

#### Quarterly Tasks
- Complete security assessment and password policy review
- User role structure evaluation and optimization  
- Staff training updates on new features or procedures

### Troubleshooting Common Issues

#### User Cannot Access Content

**Possible Solutions:**
1. Verify user role assignment
2. Check Members plugin configuration
3. Clear website cache
4. Test with different user account

#### Password Reset Problems

**Possible Solutions:**
1. Verify email configuration
2. Check spam/junk folders
3. Test SMTP settings
4. Generate manual password reset

#### Role Permissions Not Working

**Possible Solutions:**
1. Check Members plugin role configuration
2. Verify capability assignments
3. Clear caching plugins
4. Test with fresh user account

### Additional Resources

#### Documentation Links

- **WordPress User Management**: https://learn.wordpress.org/lesson-plan/user-management/
- **WordPress Roles and Capabilities**: https://wordpress.org/documentation/article/roles-and-capabilities/
- **Members Plugin Documentation**: https://members-plugin.com/docs/
- **WordPress Security Best Practices**: https://wordpress.org/support/article/hardening-wordpress/

#### Support Channels

- **WordPress.org Forums**: https://wordpress.org/support/
- **Members Plugin Support**: https://members-plugin.com/
- **Security Plugins**: Consider Wordfence, Jetpack Security, or similar

#### Professional Support

For complex implementations or issues beyond this documentation, consider:

- WordPress development services
- Security specialist consultation
- Membership site optimization experts

### 🎥 Video Learning Resources

- [Video Tutorials Library](/docs/video-tutorials) - Complete collection of video guides
- [User Management Basics Tutorial](/docs/video-tutorials) - User roles, volunteer tags, and permissions management

## Next Steps

- Learn about [WordPress Users Management](/docs/user-management/wordpress-users-management)
- Master [Members Plugin Role Management](/docs/user-management/members-plugin-guide)
- Understand [Password Management & Security](/docs/user-management/password-management)
- Explore [Role-Based Access Control](/docs/user-management/role-based-access)
