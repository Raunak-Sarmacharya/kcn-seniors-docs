---
title: "Site Architecture Overview"
description: "Complete system architecture overview for KCN Seniors WordPress website"
sectionId: "getting-started"
slug: "architecture"
tags: ["architecture", "system overview", "wordpress", "eventprime", "members plugin", "acf", "elementor", "code snippets", "integration"]
difficulty: "intermediate"
estimatedTime: "20 minutes"
lastUpdated: "2025-01-15"
order: 2
---

# KCN Seniors Website - Complete System Architecture

## Overview

The KCN Seniors website (KCNseniors.coop) is a comprehensive WordPress-based community management system for the Killick Coast North Seniors Co-operative, serving Bauline, Flatrock, and Pouch Cove in Newfoundland, Canada. This is a non-profit community service co-operative where volunteers offer services to help seniors age well at home and in their communities, following co-operative values and the Village Model.

## System Architecture Overview

### Core Technology Stack

**Primary Platform:**
- **WordPress**: Primary CMS platform with Block Editor (Gutenberg)
- **EventPrime Plugin**: Complete event management system
- **Members Plugin**: Advanced role-based access control
- **Advanced Custom Fields (ACF)**: Custom data fields for volunteer profiles
- **WordPress Code Snippets Plugin**: Custom functionality implementation
- **Elementor**: Page builder for custom page design and forms
- **Next.js Documentation Portal**: Separate documentation system (this current project)

### Dual-System User Management

The website uses a sophisticated dual-system approach for comprehensive user management:

**1. WordPress Users System** ←→ **2. Members Plugin**
- **WordPress Users**: Manages user accounts, profiles, and basic role assignment
- **Members Plugin**: Provides advanced role and capability management with content protection
- **Combined Result**: Complete user management solution with granular control

**The Integration Process:**
1. **User Account Creation**: WordPress Users creates the account
2. **Role Assignment**: Members Plugin assigns appropriate permissions
3. **Content Protection**: Members Plugin controls what users can access
4. **Ongoing Management**: Both systems work together for user administration

## Hierarchical Role Structure (6 Levels)

KCN Seniors uses a **hierarchical role system** where each higher role includes all permissions from lower roles:

### Level 1 - Public Access
- **Available to**: All website visitors
- **Access**: General website information and public content
- **Features**: Public events and announcements

### Level 2 - Subscriber Access
- **Available to**: Logged-in users
- **Access**: Public + Enhanced logged-in features
- **Features**: Ability to comment on posts, basic logged-in user features

### Level 3 - Member Access
- **Available to**: Premium members
- **Access**: Subscriber + Public + Member-only content
- **Features**: Member-only events and content, exclusive member resources and benefits, venue information for events

### Level 4 - Volunteer Access
- **Available to**: Community volunteers
- **Access**: Member + Subscriber + Public + Volunteer tools
- **Features**: Volunteer management tools and content, task coordination and assignment, volunteer training resources

### Level 5 - Administrator 2 Access
- **Available to**: Limited administrators
- **Access**: Volunteer + Member + Subscriber + Public + Limited admin
- **Features**: Content management (posts, pages, media), limited administrative features, user management (restricted)

### Level 6 - Administrator Access
- **Available to**: Website owners and technical managers
- **Access**: Complete website control
- **Features**: Plugin and theme management, full user and role management, system settings and configuration

## Core System Components

### User Management System

#### WordPress Users Management
- **Purpose**: User account creation, profile management, basic role assignment
- **Features**: User registration, password management, profile editing
- **Integration**: Works with Members Plugin for enhanced functionality

#### Members Plugin - Role Management
- **Purpose**: Advanced role and capability management
- **Features**: Custom role creation, content protection, capability control
- **Integration**: Extends WordPress user system with granular permissions

#### Role-Based Access Control
- **Purpose**: Control access to content based on user roles
- **Features**: Content protection, menu access control, widget visibility
- **Implementation**: CSS-based content hiding and Members Plugin integration

### Event Management System (EventPrime)

#### Core Features
- **Event Creation & Management**: Complete event lifecycle management
- **Role-Based Event Protection**: Venue information hidden from non-members
- **Multiple Display Formats**: Calendar, grid, slider, list views
- **Custom Dates**: Recurring events with flexible scheduling
- **Venue Management**: Location details with member-only access
- **Performer Profiles**: Artist/speaker management

#### Technical Implementation
- **CSS Injection**: Dynamic hiding of venue elements for non-members
- **Custom Shortcodes**: Event display and filtering
- **ACF Integration**: Custom fields for enhanced event data
- **Category Integration**: Event categorization with visual indicators

#### Event Protection Mechanism
- Venue details automatically hidden for subscribers/guests
- "Become member to view" messaging for protected content
- CSS-based content protection (more reliable than PHP-based)
- Integration with role-based access control system

### Blog Management System

#### WordPress Posts/Blog Features
- **WordPress Block Editor (Gutenberg)**: Modern content creation
- **Role-Based Commenting**: Only logged-in users can comment
- **Categories & Tags**: Organized content structure
- **Featured Images**: SEO-optimized post thumbnails
- **Advanced Post Management**: Full editorial workflow

#### Comment System
- Restricted to logged-in users only
- Auto-approval for logged-in users
- Moderation controls for administrators
- Integration with user role system

### Content Management System (Media Library)

#### Media Management Features
- **Centralized File Storage**: All media in WordPress Media Library
- **EventPrime Integration**: Event images and galleries
- **Role-Based Access Control**: Secure media management
- **Automatic Image Optimization**: Multiple size generation
- **Block Editor Integration**: Seamless content creation

#### Image Specifications
- **Featured Images**: 1200×630 pixels (16:9 ratio)
- **Event Images**: 1200×630 pixels for events, 1024×768 for galleries
- **Content Images**: 800×600 maximum for in-post use
- **Optimization**: JPEG for photos, PNG for graphics, WebP support

#### File Management
- **Supported Formats**: Images (JPG, PNG, GIF, WebP), Videos (MP4, MOV, AVI), Audio (MP3, WAV), Documents (PDF, DOC, XLS)
- **Organization**: Year/month folder structure
- **Security**: Role-based upload permissions, MIME type validation

### Volunteer Management System

#### Core Components
- **Volunteer Profiles**: ACF-based skill and interest management
- **Task Creation**: Automated task management system
- **Skill-Based Matching**: Automated volunteer-task matching
- **Email Notifications**: Automated communication system
- **Dashboard Integration**: Volunteer-specific admin areas

#### Technical Implementation
- **ACF Tags**: Custom fields for volunteer skills and interests
- **Automated Matching Algorithm**: Skill-based task assignment
- **Email System**: Automated notifications for task assignments
- **Database Structure**: Custom tables for volunteer data

#### Volunteer Workflow
1. Administrator creates volunteer account with "Volunteer" role
2. ACF tags assigned for specific skills and interests
3. Tasks created with skill requirements
4. Automated system matches volunteers to tasks
5. Email notifications sent to appropriate volunteers
6. Task completion tracking and feedback

### Page Builder & Forms (Elementor)

#### Elementor Integration
- **Drag-and-Drop Page Building**: Visual page creation without coding
- **Form Builder**: Create membership applications and newsletter forms
- **Responsive Design**: Mobile-friendly layouts
- **Role-Based Access**: Integration with Members plugin for content protection
- **Custom Styling**: Brand-consistent design elements

#### Form Management
- **Membership Application Forms**: Collect member applications
- **Newsletter Forms**: Collect newsletter subscriptions and updates
- **Member Newsletter Forms**: Member-specific newsletter subscriptions

#### Integration Benefits
- **Seamless WordPress Integration**: Works with existing user management system
- **Form Management**: Collect member applications and newsletter subscriptions
- **Content Protection**: Role-based access control for member-only content
- **Professional Design**: Consistent branding and user experience

### Custom Development & Code Snippets

#### WordPress Code Snippets Plugin Implementation
Five custom code snippets providing enhanced functionality:

1. **Custom Button Text**: Replaces "View Details" with "Login to View Details" for non-members
2. **Email Login**: Enables login with email address instead of username
3. **Location Show Work**: Meta box for displaying location information to subscribers
4. **Slider Limit**: Swiper.js integration for event sliders with responsive design
5. **Future Events Shortcode**: Custom shortcode for displaying upcoming events

#### Technical Features
- **JavaScript Integration**: Dynamic button updates and slider functionality
- **PHP Hooks**: WordPress action and filter hooks for customization
- **Meta Boxes**: Custom admin interface elements
- **Shortcodes**: Custom content display functionality

#### CSS Injection System
- Dynamic CSS injection for content protection
- Role-based element hiding
- Responsive design considerations
- Integration with EventPrime elements

## Integration Points

### WordPress-EventPrime Integration
- **Shared User System**: EventPrime uses WordPress user accounts
- **Role-Based Event Access**: Events respect WordPress role assignments
- **Media Library Integration**: Event images stored in WordPress Media Library
- **Custom Shortcode Support**: EventPrime shortcodes work with custom code

### WordPress-Members Plugin Integration
- **Enhanced Role Management**: Members plugin extends WordPress roles
- **Content Protection**: Members plugin controls access to content
- **Dashboard Access Control**: Members plugin manages admin area access
- **User Capability Management**: Fine-grained permission control

### WordPress-ACF Integration
- **Volunteer Profile Fields**: ACF provides custom fields for volunteer skills
- **Custom Event Data**: Enhanced event information through ACF
- **Enhanced Content Management**: ACF extends content management capabilities
- **Database Structure**: ACF creates custom database tables and metadata

### WordPress-Elementor Integration
- **Custom Page Design**: Elementor provides drag-and-drop page building
- **Form Creation and Management**: Elementor forms for membership applications and newsletter subscriptions
- **Member Application Forms**: Forms for membership applications
- **Newsletter Forms**: Newsletter subscription and member newsletter forms

### WordPress-Code Snippets Integration
- **Custom Functionality**: Code snippets extend WordPress functionality
- **Event Management Enhancement**: Custom code improves EventPrime integration
- **User Experience Improvements**: Custom code enhances user experience
- **Content Protection**: Custom code implements role-based content protection

## Security & Access Control

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

## Documentation System

### Next.js Documentation Portal
- **Separate Application**: Independent from WordPress site
- **Markdown-Based**: All documentation in markdown format
- **API Integration**: Dynamic content loading via API routes
- **Search Functionality**: Full-text search across documentation
- **Navigation System**: Hierarchical section organization

### Documentation Structure
- **Getting Started**: Welcome, architecture overview, quick reference
- **User Management**: Complete user and role management guides
- **Event Management**: EventPrime integration and management
- **Blog Management**: WordPress posts and commenting system
- **Content Management**: Media library and file management
- **Volunteer Management**: Volunteer system and task coordination
- **Custom Development**: Technical implementation details
- **Page Builder & Forms**: Elementor integration and form management
- **Maintenance & Support**: Troubleshooting and maintenance guides

## Current System Status

### Fully Implemented Features
- Complete user management system with dual-system approach
- Event management with EventPrime and role-based protection
- Blog system with role-based commenting
- Media library management with optimization
- Volunteer management system with automated matching
- Custom code snippets for enhanced functionality
- Elementor integration for page design and forms
- Documentation portal with comprehensive guides

### Documentation Coverage
- User management and role system
- Event management and protection
- Blog system and commenting
- Media library and optimization
- Volunteer system and task matching
- Custom development and code snippets
- Page builder and form management
- Security and access control
- Troubleshooting and maintenance

### Technical Architecture
- WordPress 5.0+ with Block Editor
- EventPrime plugin for events
- Members plugin for roles
- ACF for custom fields
- Code Snippets plugin for custom code
- Elementor for page design and forms
- Next.js documentation portal
- Role-based access control throughout

## System Benefits

### For KCN Seniors Organization
- **Comprehensive Community Management**: Complete platform for member and volunteer coordination
- **Professional Online Presence**: Modern, responsive website with professional design
- **Efficient Operations**: Automated systems reduce administrative workload
- **Scalable Solution**: System can grow with the organization

### For Members
- **Easy Access to Services**: Simple process for requesting volunteer assistance
- **Member-Only Content**: Exclusive access to events and resources
- **Community Engagement**: Easy participation in community activities
- **Professional Service**: Reliable volunteer coordination and matching

### For Volunteers
- **Clear Task Assignments**: Automated matching based on skills and interests
- **Easy Communication**: Streamlined communication with members and administrators
- **Skill Development**: Opportunities to use and develop skills
- **Community Impact**: Clear visibility of contributions and impact

### For Administrators
- **Centralized Management**: All systems integrated in one platform
- **Automated Processes**: Reduced manual work through automation
- **Comprehensive Reporting**: Full visibility into operations and usage
- **Flexible Control**: Granular control over access and permissions

## Future Enhancements

### Potential Improvements
- **Online Payment Integration**: Automated membership payments
- **Advanced Analytics**: Detailed usage and engagement analytics
- **Mobile App**: Native mobile application for members and volunteers
- **Advanced Automation**: More sophisticated automated workflows
- **Integration APIs**: API access for third-party integrations

### Scalability Considerations
- **Performance Optimization**: Continued optimization for growth
- **Database Optimization**: Efficient data storage and retrieval
- **Caching Strategies**: Advanced caching for improved performance
- **CDN Integration**: Content delivery network for global access

---

*This architecture overview provides a complete understanding of the KCN Seniors website system. For detailed implementation guides, see the specific documentation sections.*

*For questions or suggestions about the system architecture, please contact your website administrator.*
