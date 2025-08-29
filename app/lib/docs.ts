export interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  category: string;
  order: number;
  children?: DocSection[];
}

export interface DocContent {
  id: string;
  title: string;
  content: string;
  sectionId: string;
  slug: string;
  tags: string[];
  lastUpdated: Date;
  videoUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
}

export interface SearchResult {
  id: string;
  title: string;
  content: string;
  sectionId: string;
  slug: string;
  tags: string[];
  difficulty: string;
  matchScore: number;
}

// Documentation sections structure
export const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Welcome and essential information for new users',
    icon: 'Home',
    slug: 'getting-started',
    category: 'basics',
    order: 1,
    children: [
      { id: 'welcome', title: 'Welcome & Overview', description: 'Introduction to the documentation portal', icon: 'BookOpen', slug: 'welcome', category: 'basics', order: 1 },
      { id: 'architecture', title: 'Site Architecture Overview', description: 'Understanding the website structure', icon: 'Layout', slug: 'architecture', category: 'basics', order: 2 },
      { id: 'quick-reference', title: 'Quick Reference Guide', description: 'Quick access to common tasks', icon: 'FileText', slug: 'quick-reference', category: 'basics', order: 3 },
      { id: 'emergency-contacts', title: 'Emergency Contacts & Support', description: 'Important contact information', icon: 'Phone', slug: 'emergency-contacts', category: 'basics', order: 4 },
    ],
  },
  {
    id: 'user-management',
    title: 'User Management',
    description: 'Managing users, roles, and permissions',
    icon: 'Users',
    slug: 'user-management',
    category: 'administration',
    order: 2,
    children: [
      { id: 'user-management-overview', title: 'User Management Overview', description: 'Complete guide to user management system', icon: 'Users', slug: 'user-management-overview', category: 'administration', order: 1 },
      { id: 'wordpress-users-management', title: 'WordPress Users Management', description: 'Managing user accounts and profiles', icon: 'UserCheck', slug: 'wordpress-users-management', category: 'administration', order: 2 },
      { id: 'members-plugin-guide', title: 'Members Plugin - Role Management', description: 'Complete role management with Members plugin', icon: 'Shield', slug: 'members-plugin-guide', category: 'administration', order: 3 },
      { id: 'password-management', title: 'Password Management', description: 'Password policies and security', icon: 'Lock', slug: 'password-management', category: 'administration', order: 4 },
      { id: 'role-based-access', title: 'Role-Based Access Control', description: 'Controlling access based on roles', icon: 'Key', slug: 'role-based-access', category: 'administration', order: 5 },
      { id: 'registration-settings', title: 'User Registration Settings', description: 'Configuring user registration', icon: 'Settings', slug: 'registration-settings', category: 'administration', order: 6 },
    ],
  },
  {
    id: 'wordpress-basics',
    title: 'WordPress Basics',
    description: 'Core WordPress functionality and concepts',
    icon: 'Code',
    slug: 'wordpress-basics',
    category: 'content',
    order: 3,
    children: [
      { id: 'wordpress-basics-overview', title: 'WordPress Basics Overview', description: 'Complete guide to WordPress fundamentals', icon: 'BookOpen', slug: 'wordpress-basics-overview', category: 'content', order: 1 },
      { id: 'dashboard-overview', title: 'Dashboard Overview', description: 'Understanding the WordPress dashboard', icon: 'LayoutDashboard', slug: 'dashboard-overview', category: 'content', order: 2 },
      { id: 'posts-pages', title: 'Posts & Pages', description: 'Creating and managing posts and pages', icon: 'FileText', slug: 'posts-pages', category: 'content', order: 3 },
      { id: 'media-management', title: 'Media Management', description: 'Managing images and media files', icon: 'Image', slug: 'media-management', category: 'content', order: 4 },
      { id: 'comments-management', title: 'Comments Management', description: 'Managing comments and discussions', icon: 'MessageSquare', slug: 'comments-management', category: 'content', order: 5 },
      { id: 'settings-overview', title: 'WordPress Settings', description: 'Core WordPress settings and configuration', icon: 'Settings', slug: 'settings-overview', category: 'content', order: 6 },
    ],
  },
  {
    id: 'content-management',
    title: 'Content Management',
    description: 'Creating and managing website content',
    icon: 'FileText',
    slug: 'content-management',
    category: 'content',
    order: 4,
    children: [
      { id: 'create-edit-pages', title: 'Creating/Editing Pages', description: 'Creating and editing website pages', icon: 'Edit', slug: 'create-edit-pages', category: 'content', order: 1 },
      { id: 'blog-management', title: 'Blog Post Management', description: 'Managing blog posts and articles', icon: 'FileText', slug: 'blog-management', category: 'content', order: 2 },
      { id: 'media-library', title: 'Media Library Management', description: 'Managing images and media files', icon: 'Image', slug: 'media-library', category: 'content', order: 3 },
      { id: 'menu-management', title: 'Menu Management', description: 'Creating and managing navigation menus', icon: 'Menu', slug: 'menu-management', category: 'content', order: 4 },
      { id: 'widget-management', title: 'Widget Management', description: 'Managing sidebar widgets and content', icon: 'Puzzle', slug: 'widget-management', category: 'content', order: 5 },
    ],
  },
  {
    id: 'elementor',
    title: 'Elementor Page Builder',
    description: 'Using Elementor to create and edit pages visually',
    icon: 'Palette',
    slug: 'elementor',
    category: 'design',
    order: 5,
    children: [
      { id: 'overview', title: 'Elementor Overview', description: 'Introduction to Elementor page builder', icon: 'Layout', slug: 'overview', category: 'design', order: 1 },
      { id: 'interface', title: 'Elementor Interface', description: 'Understanding the Elementor editor interface', icon: 'Monitor', slug: 'interface', category: 'design', order: 2 },
      { id: 'widgets', title: 'Working with Widgets', description: 'Using Elementor widgets and elements', icon: 'Puzzle', slug: 'widgets', category: 'design', order: 3 },
      { id: 'sections-columns', title: 'Sections & Columns', description: 'Creating layouts with sections and columns', icon: 'Grid', slug: 'sections-columns', category: 'design', order: 4 },
      { id: 'styling', title: 'Styling & Design', description: 'Customizing colors, typography, and spacing', icon: 'Palette', slug: 'styling', category: 'design', order: 5 },
      { id: 'responsive', title: 'Responsive Design', description: 'Making pages work on all devices', icon: 'Smartphone', slug: 'responsive', category: 'design', order: 6 },
      { id: 'templates', title: 'Templates & Global Widgets', description: 'Using templates and global elements', icon: 'Copy', slug: 'templates', category: 'design', order: 7 },
      { id: 'shortcodes', title: 'Shortcodes Integration', description: 'Integrating shortcodes with Elementor', icon: 'Code', slug: 'shortcodes', category: 'design', order: 8 },
    ],
  },
  {
    id: 'event-management',
    title: 'Event Management System',
    description: 'Managing events, registrations, and calendars',
    icon: 'Calendar',
    slug: 'event-management',
    category: 'events',
    order: 6,
    children: [
      { id: 'event-creation', title: 'Event Creation Process', description: 'Creating new events for the community', icon: 'Plus', slug: 'event-creation', category: 'events', order: 1 },
      { id: 'event-categories', title: 'Event Categories & Tags', description: 'Organizing events with categories and tags', icon: 'Tag', slug: 'event-categories', category: 'events', order: 2 },
      { id: 'registration-management', title: 'Registration Management', description: 'Managing event registrations', icon: 'ClipboardList', slug: 'registration-management', category: 'events', order: 3 },
      { id: 'calendar-config', title: 'Event Calendar Configuration', description: 'Setting up the event calendar', icon: 'Calendar', slug: 'calendar-config', category: 'events', order: 4 },
      { id: 'email-notifications', title: 'Email Notifications Setup', description: 'Configuring email notifications', icon: 'Mail', slug: 'email-notifications', category: 'events', order: 5 },
      { id: 'recurring-events', title: 'Recurring Events Setup', description: 'Setting up recurring events', icon: 'Repeat', slug: 'recurring-events', category: 'events', order: 6 },
    ],
  },
  {
    id: 'service-booking',
    title: 'Service & Volunteer Booking',
    description: 'Managing service bookings and volunteer slots',
    icon: 'Clock',
    slug: 'service-booking',
    category: 'services',
    order: 7,
    children: [
      { id: 'booking-overview', title: 'Booking System Overview', description: 'Understanding the booking system', icon: 'Calendar', slug: 'booking-overview', category: 'services', order: 1 },
      { id: 'service-categories', title: 'Service Categories Setup', description: 'Setting up service categories', icon: 'Folder', slug: 'service-categories', category: 'services', order: 2 },
      { id: 'volunteer-slots', title: 'Volunteer Slot Management', description: 'Managing volunteer time slots', icon: 'Clock', slug: 'volunteer-slots', category: 'services', order: 3 },
      { id: 'booking-confirmations', title: 'Booking Confirmations', description: 'Managing booking confirmations', icon: 'CheckCircle', slug: 'booking-confirmations', category: 'services', order: 4 },
      { id: 'cancellation-policies', title: 'Cancellation Policies', description: 'Setting up cancellation policies', icon: 'XCircle', slug: 'cancellation-policies', category: 'services', order: 5 },
      { id: 'reporting-analytics', title: 'Reporting & Analytics', description: 'Viewing reports and analytics', icon: 'BarChart', slug: 'reporting-analytics', category: 'services', order: 6 },
    ],
  },
  {
    id: 'theme-customization',
    title: 'Theme & Customization',
    description: 'Customizing the website appearance and branding',
    icon: 'Palette',
    slug: 'theme-customization',
    category: 'design',
    order: 8,
    children: [
      { id: 'active-theme', title: 'Active Theme Configuration', description: 'Configuring the active theme', icon: 'Palette', slug: 'active-theme', category: 'design', order: 1 },
      { id: 'customizer-settings', title: 'Customizer Settings', description: 'Using the WordPress customizer', icon: 'Settings', slug: 'customizer-settings', category: 'design', order: 2 },
      { id: 'header-footer', title: 'Header/Footer Management', description: 'Managing header and footer', icon: 'Layout', slug: 'header-footer', category: 'design', order: 3 },
      { id: 'color-schemes', title: 'Color Scheme Management', description: 'Managing color schemes', icon: 'Droplets', slug: 'color-schemes', category: 'design', order: 4 },
      { id: 'logo-branding', title: 'Logo & Branding Updates', description: 'Updating logo and branding', icon: 'Image', slug: 'logo-branding', category: 'design', order: 5 },
      { id: 'responsive-design', title: 'Responsive Design Settings', description: 'Configuring responsive design', icon: 'Smartphone', slug: 'responsive-design', category: 'design', order: 6 },
    ],
  },
  {
    id: 'plugin-management',
    title: 'Plugin Management',
    description: 'Managing WordPress plugins and extensions',
    icon: 'Puzzle',
    slug: 'plugin-management',
    category: 'plugins',
    order: 9,
    children: [
      { id: 'installed-plugins', title: 'Installed Plugins Overview', description: 'Overview of installed plugins', icon: 'Puzzle', slug: 'installed-plugins', category: 'plugins', order: 1 },
      { id: 'plugin-updates', title: 'Plugin Updates & Maintenance', description: 'Updating and maintaining plugins', icon: 'RefreshCw', slug: 'plugin-updates', category: 'plugins', order: 2 },
      { id: 'plugin-settings', title: 'Plugin-Specific Settings', description: 'Configuring plugin settings', icon: 'Settings', slug: 'plugin-settings', category: 'plugins', order: 3 },
      { id: 'plugin-conflicts', title: 'Troubleshooting Plugin Conflicts', description: 'Resolving plugin conflicts', icon: 'AlertTriangle', slug: 'plugin-conflicts', category: 'plugins', order: 4 },
      { id: 'backup-restore', title: 'Backup & Restore Procedures', description: 'Backup and restore procedures', icon: 'Save', slug: 'backup-restore', category: 'plugins', order: 5 },
    ],
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description: 'Advanced customization and development',
    icon: 'Code',
    slug: 'custom-development',
    category: 'development',
    order: 10,
    children: [
      { id: 'functions-php', title: 'functions.php Customizations', description: 'Customizing functions.php file', icon: 'Code', slug: 'functions-php', category: 'development', order: 1 },
      { id: 'custom-code', title: 'Custom Code Snippets', description: 'Adding custom code snippets', icon: 'FileCode', slug: 'custom-code', category: 'development', order: 2 },
      { id: 'database-modifications', title: 'Database Modifications', description: 'Modifying database structure', icon: 'Database', slug: 'database-modifications', category: 'development', order: 3 },
      { id: 'child-theme', title: 'Child Theme Implementation', description: 'Implementing child themes', icon: 'FolderOpen', slug: 'child-theme', category: 'development', order: 4 },
      { id: 'custom-post-types', title: 'Custom Post Types', description: 'Creating custom post types', icon: 'FileText', slug: 'custom-post-types', category: 'development', order: 5 },
      { id: 'custom-fields', title: 'Custom Fields Setup', description: 'Setting up custom fields', icon: 'List', slug: 'custom-fields', category: 'development', order: 6 },
    ],
  },
  {
    id: 'maintenance-security',
    title: 'Maintenance & Security',
    description: 'Keeping your website secure and up-to-date',
    icon: 'Shield',
    slug: 'maintenance-security',
    category: 'security',
    order: 11,
    children: [
      { id: 'wordpress-updates', title: 'WordPress Updates', description: 'Keeping WordPress updated', icon: 'RefreshCw', slug: 'wordpress-updates', category: 'security', order: 1 },
      { id: 'backup-procedures', title: 'Backup Procedures', description: 'Regular backup procedures', icon: 'Save', slug: 'backup-procedures', category: 'security', order: 2 },
      { id: 'security-best-practices', title: 'Security Best Practices', description: 'Security best practices', icon: 'Shield', slug: 'security-best-practices', category: 'security', order: 3 },
      { id: 'performance-optimization', title: 'Performance Optimization', description: 'Optimizing website performance', icon: 'Zap', slug: 'performance-optimization', category: 'security', order: 4 },
      { id: 'ssl-certificates', title: 'SSL Certificate Management', description: 'Managing SSL certificates', icon: 'Lock', slug: 'ssl-certificates', category: 'security', order: 5 },
      { id: 'malware-scanning', title: 'Malware Scanning', description: 'Scanning for malware', icon: 'Search', slug: 'malware-scanning', category: 'security', order: 6 },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: 'Wrench',
    slug: 'troubleshooting',
    category: 'support',
    order: 12,
    children: [
      { id: 'common-issues', title: 'Common Issues & Solutions', description: 'Common issues and their solutions', icon: 'HelpCircle', slug: 'common-issues', category: 'support', order: 1 },
      { id: 'error-logs', title: 'Error Log Analysis', description: 'Analyzing error logs', icon: 'FileText', slug: 'error-logs', category: 'support', order: 2 },
      { id: 'debug-mode', title: 'Debug Mode Activation', description: 'Activating debug mode', icon: 'Bug', slug: 'debug-mode', category: 'support', order: 3 },
      { id: 'plugin-conflicts', title: 'Plugin Conflict Resolution', description: 'Resolving plugin conflicts', icon: 'AlertTriangle', slug: 'plugin-conflicts', category: 'support', order: 4 },
      { id: 'database-repair', title: 'Database Repair', description: 'Repairing database issues', icon: 'Database', slug: 'database-repair', category: 'support', order: 5 },
      { id: 'emergency-recovery', title: 'Emergency Recovery', description: 'Emergency recovery procedures', icon: 'AlertCircle', slug: 'emergency-recovery', category: 'support', order: 6 },
    ],
  },
  {
    id: 'video-tutorials',
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
    icon: 'Video',
    slug: 'video-tutorials',
    category: 'tutorials',
    order: 13,
    children: [
      { id: 'getting-started-videos', title: 'Getting Started Videos', description: 'Video tutorials for getting started', icon: 'Play', slug: 'getting-started-videos', category: 'tutorials', order: 1 },
      { id: 'advanced-features', title: 'Advanced Feature Walkthroughs', description: 'Advanced feature tutorials', icon: 'Video', slug: 'advanced-features', category: 'tutorials', order: 2 },
      { id: 'maintenance-procedures', title: 'Maintenance Procedures', description: 'Maintenance procedure videos', icon: 'Wrench', slug: 'maintenance-procedures', category: 'tutorials', order: 3 },
      { id: 'troubleshooting-guides', title: 'Troubleshooting Guides', description: 'Troubleshooting video guides', icon: 'HelpCircle', slug: 'troubleshooting-guides', category: 'tutorials', order: 4 },
    ],
  },
];

// Sample documentation content
export const docContent: DocContent[] = [
  {
    id: 'welcome',
    title: 'Welcome to KCN Seniors Documentation',
    content: `
# Welcome to KCN Seniors Documentation Portal

Welcome to the comprehensive documentation portal for the KCN Seniors WordPress website. This portal provides detailed guides, tutorials, and reference materials to help you effectively manage and maintain your website.

## What You'll Find Here

This documentation is organized into logical sections covering every aspect of your WordPress website:

- **Getting Started**: Essential information for new users
- **User Management**: Managing users, roles, and permissions
- **Content Management**: Creating and managing website content
- **Event Management**: Managing events and registrations
- **Service Booking**: Managing service bookings and volunteer slots
- **Theme Customization**: Customizing your website appearance
- **Plugin Management**: Managing WordPress plugins
- **Custom Development**: Advanced customization options
- **Maintenance & Security**: Keeping your site secure and updated
- **Troubleshooting**: Common issues and solutions
- **Video Tutorials**: Step-by-step video guides

## Quick Navigation

Use the sidebar navigation to explore different sections, or use the search functionality to find specific topics quickly.

## Getting Help

If you need additional support:
- Check the troubleshooting section for common issues
- Review the emergency contacts for urgent matters
- Watch video tutorials for visual guidance

## Stay Updated

This documentation is regularly updated to reflect the latest features and best practices. Check back frequently for new content and updates.
    `,
    sectionId: 'getting-started',
    slug: 'welcome',
    tags: ['welcome', 'overview', 'introduction'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '5 minutes',
  },
  {
    id: 'dashboard-overview',
    title: 'WordPress Dashboard Overview',
    content: `
# WordPress Dashboard Overview

The WordPress Dashboard is your central command center for managing your KCN Seniors website. This guide will help you understand the key areas and functionality available.

## Dashboard Layout

### Top Navigation Bar
- **Site Title**: Click to visit your live website
- **Howdy, [Username]**: User menu with profile and logout options
- **Screen Options**: Customize dashboard layout
- **Help**: Context-sensitive help for current page

### Left Sidebar Menu
The main navigation menu includes:

#### Content Management
- **Posts**: Blog articles and news updates
- **Pages**: Static website pages
- **Media**: Images, documents, and other files
- **Comments**: User comments and moderation

#### Site Management
- **Appearance**: Themes, menus, and widgets
- **Plugins**: Extensions and functionality
- **Users**: User accounts and roles
- **Tools**: Import/export and site health
- **Settings**: Site configuration

#### KCN-Specific Features
- **Events**: Event management system
- **Services**: Service booking system
- **Volunteers**: Volunteer management
- **Reports**: Analytics and reporting

## Key Dashboard Widgets

### At a Glance
- Quick overview of posts, pages, and comments
- WordPress version and theme information
- Quick action buttons

### Activity
- Recent comments awaiting moderation
- Recently published content
- Recent site activity

### Quick Draft
- Quick post creation without leaving dashboard
- Save drafts for later completion

## Customizing Your Dashboard

### Screen Options
Click "Screen Options" in the top-right to:
- Show/hide dashboard widgets
- Adjust column layout
- Customize widget visibility

### Widget Management
- Drag and drop widgets to rearrange
- Expand/collapse widgets as needed
- Remove widgets you don't use

## Best Practices

1. **Regular Check-ins**: Visit the dashboard daily to check for updates
2. **Monitor Activity**: Review comments and recent activity
3. **Stay Updated**: Keep WordPress, themes, and plugins updated
4. **Backup Regularly**: Use the backup tools before major changes

## Next Steps

- Learn about [Creating and Editing Pages](/docs/content-management/create-edit-pages)
- Explore [User Management](/docs/user-management/roles-permissions)
- Review [Security Best Practices](/docs/maintenance-security/security-best-practices)
    `,
    sectionId: 'content-management',
    slug: 'dashboard-overview',
    tags: ['dashboard', 'overview', 'navigation', 'wordpress'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '10 minutes',
  },
  {
    id: 'event-creation',
    title: 'Event Creation Process',
    content: `
# Event Creation Process

Creating events on your KCN Seniors website is straightforward and powerful. This guide walks you through the complete process of setting up events for your community.

## Before You Begin

Ensure you have:
- Event details (title, description, date/time, location)
- Event images or media files
- Registration requirements (if applicable)
- Contact information for inquiries

## Step-by-Step Event Creation

### Step 1: Access the Events Section
1. Log into your WordPress dashboard
2. Navigate to **Events** in the left sidebar
3. Click **Add New Event**

### Step 2: Basic Event Information
Fill in the essential event details:

#### Event Title
- Use clear, descriptive titles
- Include key information (e.g., "Senior Yoga Class - Every Tuesday")
- Keep titles under 60 characters for optimal display

#### Event Description
- Provide comprehensive event details
- Include what participants can expect
- Mention any special requirements or equipment
- Use formatting options for better readability

#### Event Date and Time
- Set the start date and time
- Configure end time if applicable
- Enable recurring events if needed
- Set timezone correctly

### Step 3: Event Location
Choose from available options:
- **Physical Location**: Enter address and venue details
- **Virtual Event**: Add meeting link and platform information
- **Hybrid Event**: Include both physical and virtual options

### Step 4: Event Categories and Tags
- Select appropriate event category
- Add relevant tags for better organization
- Use consistent naming conventions

### Step 5: Registration Settings
Configure registration options:
- **No Registration Required**: Open events
- **Registration Required**: Collect attendee information
- **Limited Capacity**: Set maximum attendees
- **Waitlist**: Enable automatic waitlist management

### Step 6: Event Media
- Upload event images (recommended size: 1200x800px)
- Add supporting documents or flyers
- Include video content if available

### Step 7: Advanced Settings
Configure additional options:
- **Featured Event**: Highlight on homepage
- **Email Notifications**: Set up automatic reminders
- **Social Sharing**: Enable social media sharing
- **SEO Settings**: Optimize for search engines

### Step 8: Preview and Publish
1. Click **Preview** to review your event
2. Check all information is correct
3. Click **Publish** to make the event live

## Event Management Features

### Recurring Events
- Set up weekly, monthly, or custom recurring patterns
- Manage individual instances separately
- Bulk edit recurring event series

### Event Moderation
- Review and approve event submissions
- Edit events before publication
- Manage event updates and cancellations

### Registration Management
- View and export attendee lists
- Send email communications to registrants
- Handle cancellations and refunds

## Best Practices

### Event Descriptions
- Be clear and concise
- Include all essential information
- Use bullet points for easy scanning
- Add contact information for questions

### Images and Media
- Use high-quality, relevant images
- Optimize images for web (compress files)
- Include alt text for accessibility
- Maintain consistent image dimensions

### Registration Management
- Set clear registration deadlines
- Provide cancellation policies
- Send confirmation emails
- Follow up with reminders

## Troubleshooting

### Common Issues
- **Event not appearing**: Check publication status and visibility settings
- **Registration problems**: Verify registration settings and capacity limits
- **Email notifications**: Ensure email settings are configured correctly

### Getting Help
- Check the [Event Management FAQ](/docs/event-management/faq)
- Review [Email Notification Setup](/docs/event-management/email-notifications)
- Contact support for technical issues

## Next Steps

- Learn about [Event Categories & Tags](/docs/event-management/event-categories)
- Explore [Registration Management](/docs/event-management/registration-management)
- Review [Email Notifications Setup](/docs/event-management/email-notifications)
    `,
    sectionId: 'event-management',
    slug: 'event-creation',
    tags: ['events', 'creation', 'registration', 'management'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'intermediate',
    estimatedTime: '15 minutes',
    videoUrl: 'https://example.com/videos/event-creation.mp4',
  },
  {
    id: 'overview',
    title: 'Elementor Overview',
    content: `
# Elementor Page Builder Overview

Elementor is a powerful drag-and-drop page builder that allows you to create beautiful, professional websites without any coding knowledge. This guide introduces you to Elementor and its key features for managing your KCN Seniors website.

## What is Elementor?

Elementor is a visual page builder that transforms the way you create and edit WordPress pages. Instead of using the traditional WordPress editor, Elementor provides a live, frontend editing experience where you can see your changes in real-time.

## Key Features

### Visual Drag & Drop Editor
- **Live Editing**: See changes as you make them
- **Drag & Drop**: Simply drag elements where you want them
- **No Coding Required**: Create professional layouts without technical knowledge
- **Real-time Preview**: Instant visual feedback

### Professional Widgets
- **Built-in Widgets**: 40+ widgets including headings, images, buttons, forms
- **Advanced Widgets**: Sliders, carousels, testimonials, pricing tables
- **Custom Widgets**: Create your own widgets for specific needs
- **Third-party Integration**: Compatible with popular plugins

### Responsive Design
- **Mobile-First**: Design for mobile devices first
- **Responsive Controls**: Adjust layouts for different screen sizes
- **Preview Modes**: Test your design on desktop, tablet, and mobile
- **Touch-Friendly**: Optimized for touch devices

### Template System
- **Page Templates**: Pre-designed page layouts
- **Block Templates**: Reusable content blocks
- **Theme Builder**: Create headers, footers, and other theme parts
- **Template Library**: Access to thousands of professional templates

## Getting Started with Elementor

### Accessing Elementor
1. **From WordPress Admin**: Go to Pages > Add New or Edit an existing page
2. **Edit with Elementor**: Click "Edit with Elementor" button
3. **Elementor Interface**: The page will open in Elementor's visual editor

### Basic Workflow
1. **Add Sections**: Create the main layout structure
2. **Add Columns**: Organize content within sections
3. **Add Widgets**: Insert content elements
4. **Style Elements**: Customize appearance and layout
5. **Preview & Publish**: Review and publish your page

## Elementor vs Traditional WordPress Editor

| Feature | Traditional Editor | Elementor |
|---------|-------------------|-----------|
| **Editing Experience** | Backend editing | Live frontend editing |
| **Layout Control** | Limited | Full control with drag & drop |
| **Visual Feedback** | Preview required | Real-time changes |
| **Learning Curve** | Steep for complex layouts | Intuitive and visual |
| **Customization** | Requires coding | Visual controls |
| **Responsive Design** | Manual CSS required | Built-in responsive controls |

## Elementor Pro Features

### Advanced Capabilities
- **Theme Builder**: Create custom headers, footers, and other theme parts
- **WooCommerce Builder**: Design product pages and shop layouts
- **Form Builder**: Create custom contact forms
- **Popup Builder**: Design and manage popups
- **Custom CSS**: Advanced styling options
- **Motion Effects**: Add animations and transitions

### Professional Tools
- **Role Manager**: Control access for different user roles
- **Maintenance Mode**: Put your site in maintenance mode
- **Custom Icons**: Upload and use custom icons
- **Custom Fonts**: Add and use custom typography
- **White Label**: Brand Elementor with your own branding

## Best Practices for KCN Seniors Website

### Content Organization
- **Clear Hierarchy**: Use headings and sections to organize content
- **Consistent Styling**: Maintain brand colors and typography
- **Accessibility**: Ensure content is accessible to all users
- **Mobile Optimization**: Test on various devices

### Performance Considerations
- **Image Optimization**: Compress images before uploading
- **Widget Usage**: Don't overload pages with too many widgets
- **Caching**: Use caching plugins for better performance
- **Regular Updates**: Keep Elementor updated

### Brand Consistency
- **Color Scheme**: Use KCN Seniors brand colors consistently
- **Typography**: Maintain consistent font usage
- **Logo Placement**: Ensure logo is properly positioned
- **Content Style**: Follow established content guidelines

## Common Use Cases for KCN Seniors

### Event Pages
- **Event Details**: Create engaging event information pages
- **Registration Forms**: Design user-friendly registration forms
- **Event Calendars**: Display upcoming events
- **Photo Galleries**: Showcase past events

### Service Pages
- **Service Descriptions**: Highlight available services
- **Contact Information**: Easy-to-find contact details
- **Testimonials**: Display member testimonials
- **Call-to-Action**: Encourage engagement

### Information Pages
- **About Us**: Tell the KCN Seniors story
- **Membership**: Explain membership benefits
- **Resources**: Provide helpful information
- **News & Updates**: Share community news

## Next Steps

- Learn about the [Elementor Interface](/docs/elementor/interface)
- Explore [Working with Widgets](/docs/elementor/widgets)
- Understand [Sections & Columns](/docs/elementor/sections-columns)
- Master [Styling & Design](/docs/elementor/styling)
    `,
    sectionId: 'elementor',
    slug: 'overview',
    tags: ['elementor', 'page builder', 'visual editor', 'overview'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '10 minutes',
  },
  {
    id: 'interface',
    title: 'Elementor Interface Guide',
    content: `
# Elementor Interface Guide

Understanding the Elementor interface is key to creating beautiful pages efficiently. This guide walks you through all the components of the Elementor editor.

## Main Interface Components

### Top Bar
The top bar contains essential controls and information:

#### Left Side
- **Elementor Logo**: Click to return to WordPress admin
- **Page Title**: Shows current page name
- **Save Draft**: Save your work without publishing
- **Preview**: View page as visitors will see it
- **Publish/Update**: Make changes live

#### Right Side
- **Responsive Mode**: Switch between desktop, tablet, and mobile views
- **History**: Undo/redo changes
- **Preview Changes**: See changes before publishing
- **Exit to Dashboard**: Return to WordPress admin

### Left Panel - Widgets
The left panel contains all available widgets and elements:

#### Widget Categories
- **Basic**: Essential widgets (heading, text, image, button)
- **Pro**: Advanced widgets (slider, form, gallery)
- **Theme Elements**: Header, footer, sidebar widgets
- **WordPress**: WordPress-specific widgets
- **General**: Miscellaneous widgets

#### Widget Search
- **Search Bar**: Quickly find specific widgets
- **Favorites**: Mark frequently used widgets
- **Recently Used**: Access recently added widgets

### Center Area - Canvas
The main editing area where you build your page:

#### Section Structure
- **Sections**: Main page divisions (full-width containers)
- **Columns**: Content organization within sections
- **Widgets**: Individual content elements

#### Editing Modes
- **Edit Mode**: Make changes to elements
- **Preview Mode**: See final result
- **Responsive Preview**: Test different screen sizes

### Right Panel - Settings
The right panel shows settings for selected elements:

#### Content Tab
- **Widget-specific settings**: Configure widget content
- **Dynamic content**: Connect to WordPress data
- **Advanced options**: Additional configuration

#### Style Tab
- **Typography**: Font, size, color, spacing
- **Background**: Colors, images, gradients
- **Border**: Border style, width, color
- **Effects**: Shadows, animations, filters

#### Advanced Tab
- **Layout**: Margins, padding, positioning
- **Motion Effects**: Animations and transitions
- **Custom CSS**: Advanced styling
- **Responsive**: Device-specific settings

## Working with Elements

### Selecting Elements
- **Click to Select**: Click any element to select it
- **Hover Indicators**: Blue outlines show selectable elements
- **Nested Selection**: Click multiple times to select parent elements
- **Keyboard Navigation**: Use Tab to navigate between elements

### Moving Elements
- **Drag & Drop**: Click and drag elements to new positions
- **Copy/Paste**: Duplicate elements quickly
- **Keyboard Shortcuts**: Use Ctrl+C/Ctrl+V for copying

### Resizing Elements
- **Drag Handles**: Use corner handles to resize
- **Aspect Ratio**: Hold Shift to maintain proportions
- **Snap to Grid**: Elements snap to alignment guides

## Responsive Design Controls

### Device Preview
- **Desktop**: Default editing view
- **Tablet**: Medium screen optimization
- **Mobile**: Small screen optimization

### Responsive Settings
- **Hide on Device**: Conceal elements on specific devices
- **Custom Sizing**: Adjust sizes for different screens
- **Stacking Order**: Control element stacking on mobile

## Keyboard Shortcuts

### Navigation
- **Ctrl+S**: Save page
- **Ctrl+Z**: Undo
- **Ctrl+Y**: Redo
- **Ctrl+Shift+P**: Preview
- **Esc**: Close panels

### Editing
- **Delete**: Remove selected element
- **Ctrl+C**: Copy element
- **Ctrl+V**: Paste element
- **Ctrl+D**: Duplicate element

## Tips for Efficient Editing

### Organization
- **Use Sections**: Organize content into logical sections
- **Consistent Spacing**: Maintain uniform spacing throughout
- **Naming Conventions**: Use descriptive names for sections
- **Template Usage**: Save common layouts as templates

### Performance
- **Limit Widgets**: Don't overload pages with too many widgets
- **Optimize Images**: Compress images before uploading
- **Use Caching**: Enable caching for better performance
- **Regular Saves**: Save your work frequently

### Accessibility
- **Alt Text**: Add descriptive alt text to images
- **Color Contrast**: Ensure sufficient color contrast
- **Keyboard Navigation**: Test keyboard accessibility
- **Screen Reader**: Consider screen reader compatibility

## Troubleshooting Common Issues

### Interface Problems
- **Panel Not Opening**: Try refreshing the page
- **Widgets Not Loading**: Check internet connection
- **Slow Performance**: Reduce number of widgets
- **Display Issues**: Clear browser cache

### Editing Issues
- **Can't Select Elements**: Check if element is locked
- **Changes Not Saving**: Ensure you're logged in
- **Responsive Issues**: Test on actual devices
- **Styling Problems**: Check for CSS conflicts

## Next Steps

- Learn about [Working with Widgets](/docs/elementor/widgets)
- Explore [Sections & Columns](/docs/elementor/sections-columns)
- Master [Styling & Design](/docs/elementor/styling)
- Understand [Responsive Design](/docs/elementor/responsive)
    `,
    sectionId: 'elementor',
    slug: 'interface',
    tags: ['elementor', 'interface', 'editor', 'workflow'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '15 minutes',
  },
  {
    id: 'common-issues',
    title: 'Common Issues & Solutions',
    content: `
# Common Issues & Solutions

This guide covers the most common issues you might encounter while managing your KCN Seniors website and provides step-by-step solutions.

## WordPress Issues

### Login Problems
**Problem**: Can't log into WordPress admin
**Solutions**:
1. **Check URL**: Ensure you're using the correct login URL
2. **Clear Browser Cache**: Clear cookies and cache
3. **Reset Password**: Use the "Lost Password" link
4. **Check Email**: Verify you're using the correct email address

### White Screen of Death
**Problem**: Website shows a blank white page
**Solutions**:
1. **Enable Debug Mode**: Add debug code to wp-config.php
2. **Check Error Logs**: Review server error logs
3. **Deactivate Plugins**: Temporarily disable all plugins
4. **Switch Theme**: Activate a default WordPress theme

### Slow Website Performance
**Problem**: Website loads slowly
**Solutions**:
1. **Optimize Images**: Compress and resize images
2. **Use Caching**: Install a caching plugin
3. **Limit Plugins**: Remove unnecessary plugins
4. **Check Hosting**: Contact your hosting provider

## Elementor Issues

### Elementor Not Loading
**Problem**: Elementor editor won't open
**Solutions**:
1. **Check Permissions**: Ensure user has proper permissions
2. **Clear Cache**: Clear all caching plugins
3. **Update Elementor**: Update to the latest version
4. **Check Conflicts**: Deactivate other plugins temporarily

### Widgets Not Working
**Problem**: Widgets don't function properly
**Solutions**:
1. **Update Widgets**: Update all widgets to latest versions
2. **Check JavaScript**: Ensure JavaScript is enabled
3. **Clear Browser Cache**: Clear browser cache and cookies
4. **Reinstall Widgets**: Reinstall problematic widgets

### Styling Issues
**Problem**: Styles not applying correctly
**Solutions**:
1. **Clear Cache**: Clear all caching
2. **Check CSS**: Review custom CSS for conflicts
3. **Reset Styles**: Reset widget styles to default
4. **Check Theme**: Ensure theme compatibility

## Event Management Issues

### Events Not Displaying
**Problem**: Events don't appear on the website
**Solutions**:
1. **Check Publication**: Ensure events are published
2. **Verify Settings**: Check EventPrime settings
3. **Clear Cache**: Clear website cache
4. **Check Permissions**: Verify user permissions

### Registration Problems
**Problem**: Users can't register for events
**Solutions**:
1. **Check Capacity**: Verify event has available spots
2. **Review Settings**: Check registration settings
3. **Test Form**: Test registration form functionality
4. **Check Email**: Verify email notifications are working

### Calendar Display Issues
**Problem**: Event calendar not showing correctly
**Solutions**:
1. **Update Plugin**: Update EventPrime to latest version
2. **Check Shortcode**: Verify calendar shortcode
3. **Clear Cache**: Clear all caching
4. **Check Theme**: Ensure theme compatibility

## Content Management Issues

### Images Not Uploading
**Problem**: Can't upload images to media library
**Solutions**:
1. **Check Permissions**: Verify folder permissions
2. **File Size**: Ensure file size is within limits
3. **File Type**: Verify file type is supported
4. **Storage Space**: Check available disk space

### Pages Not Saving
**Problem**: Page changes don't save
**Solutions**:
1. **Check Permissions**: Verify user permissions
2. **Clear Cache**: Clear all caching
3. **Check Database**: Verify database connection
4. **Update WordPress**: Update to latest version

### Menu Issues
**Problem**: Navigation menu not working
**Solutions**:
1. **Check Menu Location**: Verify menu is assigned to location
2. **Clear Cache**: Clear all caching
3. **Check Theme**: Ensure theme supports menus
4. **Rebuild Menu**: Recreate the menu structure

## Security Issues

### Suspicious Activity
**Problem**: Notice unusual activity on website
**Solutions**:
1. **Change Passwords**: Update all user passwords
2. **Scan for Malware**: Run security scan
3. **Update Plugins**: Update all plugins and themes
4. **Contact Host**: Contact hosting provider

### Login Attempts
**Problem**: Multiple failed login attempts
**Solutions**:
1. **Limit Login Attempts**: Install security plugin
2. **Two-Factor Auth**: Enable two-factor authentication
3. **Strong Passwords**: Use strong, unique passwords
4. **Monitor Logs**: Regularly check access logs

## Performance Issues

### Slow Page Load
**Problem**: Pages take too long to load
**Solutions**:
1. **Optimize Images**: Compress and resize images
2. **Use CDN**: Implement content delivery network
3. **Minimize Plugins**: Remove unnecessary plugins
4. **Database Cleanup**: Clean up database regularly

### High Server Load
**Problem**: Server resources being overused
**Solutions**:
1. **Check Plugins**: Identify resource-heavy plugins
2. **Optimize Database**: Clean and optimize database
3. **Upgrade Hosting**: Consider hosting upgrade
4. **Monitor Usage**: Track resource usage patterns

## Getting Help

### When to Contact Support
- **Critical Issues**: Website completely down
- **Security Concerns**: Suspected security breach
- **Data Loss**: Important data missing
- **Complex Problems**: Issues beyond basic troubleshooting

### Information to Provide
- **Error Messages**: Exact error messages received
- **Steps Taken**: What you've already tried
- **Recent Changes**: Any recent modifications
- **System Info**: WordPress version, plugins, theme

### Emergency Contacts
- **Technical Support**: [Support Email/Phone]
- **Hosting Provider**: [Hosting Contact Info]
- **Emergency Line**: [Emergency Contact]

## Prevention Tips

### Regular Maintenance
- **Daily**: Check for updates and security alerts
- **Weekly**: Review website performance and backups
- **Monthly**: Complete security audit and cleanup
- **Quarterly**: Full website review and optimization

### Best Practices
- **Regular Backups**: Always maintain current backups
- **Update Regularly**: Keep all software updated
- **Monitor Performance**: Track website performance
- **Security Awareness**: Stay informed about security threats

## Next Steps

- Review [Error Log Analysis](/docs/troubleshooting/error-logs)
- Learn about [Debug Mode Activation](/docs/troubleshooting/debug-mode)
- Explore [Plugin Conflict Resolution](/docs/troubleshooting/plugin-conflicts)
- Understand [Database Repair](/docs/troubleshooting/database-repair)
    `,
    sectionId: 'troubleshooting',
    slug: 'common-issues',
    tags: ['troubleshooting', 'common issues', 'solutions', 'help'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '20 minutes',
  },
  {
    id: 'dashboard-overview',
    title: 'WordPress Dashboard Overview',
    content: `
# WordPress Dashboard Overview

The WordPress dashboard is your central command center for managing the KCN Seniors website. This guide provides comprehensive information about each dashboard element and how to use them effectively.

## Dashboard Structure

### Main Dashboard (Home)
The main dashboard provides an overview of your website with:
- **At a Glance**: Quick statistics about posts, pages, and comments
- **Activity**: Recent activity on your site
- **Quick Draft**: Quick post creation
- **WordPress Events and News**: Latest WordPress updates and news

### Updates Section
- **WordPress Core Updates**: Keep WordPress updated for security
- **Plugin Updates**: Update installed plugins for new features and security
- **Theme Updates**: Update themes for compatibility and features
- **Translation Updates**: Update language files

**Important**: Always backup your site before updating WordPress core, plugins, or themes.

## Core WordPress Features

### Posts
**Purpose**: Blog posts and articles for your website
**Key Features**:
- Create, edit, and publish blog posts
- Organize posts with categories and tags
- Schedule posts for future publication
- Manage comments on posts
- SEO optimization tools

**Best Practices**:
- Use descriptive titles and meta descriptions
- Include relevant images and media
- Categorize posts properly for better organization
- Regular posting schedule for engagement

### Media
**Purpose**: Manage all images, videos, and files
**Key Features**:
- Upload and organize media files
- Edit images (crop, resize, rotate)
- Generate multiple image sizes automatically
- Media library organization
- File type support (images, videos, documents)

**Best Practices**:
- Optimize images before uploading (compress for web)
- Use descriptive file names
- Organize media in folders/collections
- Regular cleanup of unused media

### Pages
**Purpose**: Static content pages (About, Contact, Services)
**Key Features**:
- Create static pages with permanent content
- Page templates for different layouts
- Parent/child page relationships
- Custom fields for additional data
- SEO optimization

**Best Practices**:
- Use clear, descriptive page titles
- Include relevant keywords naturally
- Regular content updates
- Mobile-friendly design

### Comments
**Purpose**: Manage user comments and discussions
**Key Features**:
- Moderate comments before publication
- Spam protection and filtering
- Reply to comments
- Comment settings and policies
- User engagement tracking

**Best Practices**:
- Regular comment moderation
- Respond to legitimate comments promptly
- Use spam protection plugins
- Clear comment policies

### Appearance
**Purpose**: Customize website design and layout
**Key Features**:
- **Themes**: Change and customize website appearance
- **Customize**: Live preview of design changes
- **Widgets**: Add content to sidebars and footers
- **Menus**: Create and manage navigation menus
- **Theme Editor**: Advanced theme customization

**Best Practices**:
- Choose responsive, accessible themes
- Test themes before going live
- Regular theme updates
- Backup before major changes

### Plugins
**Purpose**: Add functionality to your website
**Key Features**:
- Install and activate plugins
- Plugin management and updates
- Plugin settings and configuration
- Plugin compatibility checking
- Performance monitoring

**Best Practices**:
- Only install necessary plugins
- Regular plugin updates
- Test plugins before activating
- Monitor plugin performance impact

### Users
**Purpose**: Manage website users and permissions
**Key Features**:
- User registration and management
- Role-based permissions (Admin, Editor, Author, etc.)
- User profiles and settings
- Password management
- User activity tracking

**Best Practices**:
- Use strong passwords
- Regular user account review
- Appropriate role assignments
- Two-factor authentication when possible

### Tools
**Purpose**: Import/export data and maintenance tools
**Key Features**:
- Import content from other platforms
- Export website data
- Site health monitoring
- Database optimization
- Security scanning

**Best Practices**:
- Regular site health checks
- Database optimization
- Security monitoring
- Backup before major operations

### Settings
**Purpose**: Configure website settings and preferences
**Key Features**:
- **General**: Site title, tagline, URL settings
- **Writing**: Post settings and formats
- **Reading**: Homepage and blog display
- **Discussion**: Comment and pingback settings
- **Media**: Image size and upload settings
- **Permalinks**: URL structure configuration
- **Privacy**: Privacy policy and data handling

## KCN Seniors Specific Plugins

### Analytics
**Plugin**: Google Analytics or similar analytics plugin
**Purpose**: Track website performance and user behavior
**Key Features**:
- Visitor statistics and demographics
- Page view tracking
- User behavior analysis
- Conversion tracking
- Performance monitoring

**Best Practices**:
- Regular review of analytics data
- Set up conversion goals
- Monitor user engagement
- Use data to improve content

### EventPrime
**Purpose**: Event management and registration system
**Key Features**:
- Create and manage events
- Event registration and ticketing
- Calendar display
- Email notifications
- Payment integration
- Event categories and tags

**Documentation**: [EventPrime Official Documentation](https://eventprime.co/docs/)
**Support**: [EventPrime Support](https://eventprime.co/support/)

**Best Practices**:
- Regular event updates
- Clear event descriptions
- Test registration process
- Monitor event performance

### Volunteer Tasks Dashboard
**Purpose**: Custom plugin for managing volunteer services
**Key Features**:
- Service request management
- Automatic volunteer assignment
- Task tracking and status updates
- Volunteer availability management
- Service history and reporting

**Best Practices**:
- Regular task monitoring
- Clear communication with volunteers
- Efficient assignment algorithms
- Performance tracking

### Elementor
**Purpose**: Visual page builder for creating custom layouts
**Key Features**:
- Drag-and-drop page building
- Pre-designed templates
- Responsive design tools
- Advanced styling options
- Widget library
- Theme builder

**Documentation**: [Elementor Documentation](https://docs.elementor.com/)
**Support**: [Elementor Support](https://elementor.com/support/)

**Best Practices**:
- Use Elementor templates for consistency
- Optimize for mobile devices
- Regular template updates
- Performance optimization

### Templates
**Purpose**: Reusable page layouts and designs
**Key Features**:
- Pre-designed page templates
- Custom template creation
- Template categories
- Import/export templates
- Template customization

**Best Practices**:
- Consistent design across pages
- Regular template updates
- Mobile-responsive templates
- Performance optimization

### WPForms
**Purpose**: Contact form creation and management
**Key Features**:
- Drag-and-drop form builder
- Multiple field types
- Form templates
- Email notifications
- Spam protection
- File uploads

**Documentation**: [WPForms Documentation](https://wpforms.com/docs/)
**Support**: [WPForms Support](https://wpforms.com/support/)

**Best Practices**:
- Clear form labels and instructions
- Spam protection measures
- Regular form testing
- Proper email configuration

### Hello Biz
**Purpose**: Business-focused plugin (currently not in use)
**Note**: This plugin is installed but not actively used for KCN Seniors

### Snippets
**Purpose**: Custom code snippets for website functionality
**Key Features**:
- PHP code snippets
- JavaScript snippets
- CSS customizations
- Conditional logic
- Code organization

**Best Practices**:
- Document all custom code
- Test snippets before deployment
- Regular code review
- Backup before changes

### All-in-One WP Migration
**Purpose**: Website backup and migration tool
**Key Features**:
- Complete website backup
- Site migration between hosts
- File and database export
- Import functionality
- Backup scheduling

**Documentation**: [All-in-One WP Migration Documentation](https://servmask.com/knowledgebase/all-in-one-wp-migration)
**Support**: [All-in-One WP Migration Support](https://servmask.com/support)

**Best Practices**:
- Regular automated backups
- Test backup restoration
- Secure backup storage
- Migration planning

### ACF (Advanced Custom Fields)
**Purpose**: Custom fields for posts, pages, and custom post types
**Key Features**:
- Custom field creation
- Field groups and layouts
- Conditional logic
- Repeater fields
- Flexible content layouts

**Documentation**: [ACF Documentation](https://www.advancedcustomfields.com/resources/)
**Support**: [ACF Support](https://www.advancedcustomfields.com/support/)

**Best Practices**:
- Plan field structure carefully
- Use conditional logic effectively
- Regular field organization
- Performance optimization

### WP Mail SMTP
**Purpose**: Configure email delivery for WordPress
**Key Features**:
- SMTP email configuration
- Email delivery optimization
- Email testing tools
- Multiple email providers
- Delivery monitoring

**Documentation**: [WP Mail SMTP Documentation](https://wpmailsmtp.com/docs/)
**Support**: [WP Mail SMTP Support](https://wpmailsmtp.com/support/)

**Best Practices**:
- Use reliable SMTP provider
- Regular email testing
- Monitor delivery rates
- Secure email configuration

### Facebook Feed (Smash Balloon)
**Purpose**: Display Facebook content on your website
**Key Features**:
- Facebook feed display
- Custom feed layouts
- Social media integration
- Feed moderation
- Analytics and insights

**Documentation**: [Smash Balloon Documentation](https://smashballoon.com/doc/)
**Support**: [Smash Balloon Support](https://smashballoon.com/support/)

**Best Practices**:
- Regular feed updates
- Content moderation
- Performance optimization
- Mobile responsiveness

### WPvivid Backup
**Purpose**: Advanced backup and migration solution
**Key Features**:
- Incremental backups
- Cloud storage integration
- Backup scheduling
- Migration tools
- Performance optimization

**Documentation**: [WPvivid Documentation](https://wpvivid.com/docs)
**Support**: [WPvivid Support](https://wpvivid.com/support)

**Best Practices**:
- Regular backup scheduling
- Multiple backup locations
- Test backup restoration
- Monitor backup performance

### CPT UI (Custom Post Type UI)
**Purpose**: Create custom post types and taxonomies
**Key Features**:
- Custom post type creation
- Custom taxonomy creation
- Post type relationships
- Custom fields integration
- Admin interface customization

**Documentation**: [CPT UI Documentation](https://github.com/WebDevStudios/custom-post-type-ui/wiki)
**Support**: [CPT UI Support](https://wordpress.org/support/plugin/custom-post-type-ui/)

**Best Practices**:
- Plan post type structure
- Use descriptive names
- Regular structure review
- Performance optimization

### Members
**Purpose**: User role and capability management
**Key Features**:
- Custom user roles
- Role capabilities management
- Access control
- Content protection
- User permissions

**Documentation**: [Members Documentation](https://wordpress.org/plugins/members/)
**Support**: [Members Support](https://wordpress.org/support/plugin/members/)

**Best Practices**:
- Clear role definitions
- Minimal necessary permissions
- Regular permission review
- Security best practices

### Speed Optimizer
**Purpose**: Website performance optimization
**Key Features**:
- Caching optimization
- Image optimization
- Code minification
- Database optimization
- Performance monitoring

**Best Practices**:
- Regular performance testing
- Monitor optimization impact
- Backup before optimization
- Gradual optimization approach

## Security and Maintenance

### Regular Tasks
- **Daily**: Check for updates and security alerts
- **Weekly**: Review analytics and performance
- **Monthly**: Complete security audit and cleanup
- **Quarterly**: Full website review and optimization

### Security Best Practices
- Keep WordPress, plugins, and themes updated
- Use strong passwords and two-factor authentication
- Regular security scans
- Backup before major changes
- Monitor for suspicious activity

### Performance Optimization
- Optimize images and media
- Use caching plugins effectively
- Minimize plugin usage
- Regular database cleanup
- Monitor loading speeds

## Getting Help

### Documentation Resources
- [WordPress.org Documentation](https://wordpress.org/support/)
- [WordPress Codex](https://codex.wordpress.org/)
- [WordPress Developer Handbook](https://developer.wordpress.org/)

### Support Channels
- **WordPress.org Forums**: Community support
- **Plugin Support**: Individual plugin documentation
- **Hosting Support**: Server and hosting issues
- **Professional Support**: For complex issues

### Emergency Procedures
- **Site Down**: Contact hosting provider immediately
- **Security Breach**: Change passwords, scan for malware
- **Data Loss**: Restore from backup
- **Performance Issues**: Optimize and monitor

## Next Steps

- Learn about [Elementor Page Building](/docs/elementor/overview)
- Explore [Event Management](/docs/event-management/event-creation)
- Understand [Content Management](/docs/content-management/posts-pages)
- Master [Security Best Practices](/docs/security/overview)
    `,
    sectionId: 'wordpress-basics',
    slug: 'dashboard-overview',
    tags: ['wordpress', 'dashboard', 'overview', 'admin', 'basics'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '30 minutes',
  },
  {
    id: 'members-plugin-guide',
    title: 'Members Plugin - Complete Role Management Guide',
    content: `
# Members Plugin - Complete Role Management Guide

The Members plugin is a powerful WordPress plugin that provides advanced user role and capability management for the KCN Seniors website. This comprehensive guide covers everything you need to know about managing user roles, permissions, and access control.

## What is the Members Plugin?

The Members plugin is a WordPress plugin that extends WordPress's built-in user role system, providing:
- **Custom Role Creation**: Create new user roles with specific permissions
- **Granular Permission Control**: Fine-tune capabilities for each role
- **Content Protection**: Restrict access to specific content based on roles
- **Role Management Interface**: User-friendly interface for managing roles
- **Default Role Management**: Control the default role for new users

**Official Documentation**: [Members Plugin Documentation](https://wordpress.org/plugins/members/)
**Support**: [Members Plugin Support](https://wordpress.org/support/plugin/members/)
**Plugin Page**: [WordPress.org Plugin Page](https://wordpress.org/plugins/members/)

## KCN Seniors Role Structure

Based on your current setup, here are the roles configured for the KCN Seniors website:

### 1. Administrator (Your Role)
- **Internal Name**: administrator
- **Access**: Full WordPress dashboard access
- **Purpose**: Complete control over the website

**Capabilities Include**:
- All WordPress capabilities
- Plugin and theme management
- User management
- Content creation and editing
- Settings configuration
- Database access

### 2. Subscriber (Default Role)
- **Internal Name**: subscriber
- **Access**: No WordPress dashboard access
- **Purpose**: Default role for new registrations

**What Subscribers Can Do**:
- View public website content
- Comment on blog posts (when logged in)
- Access general website features
- Cannot access member-only content

**What Subscribers Cannot Do**:
- Access WordPress dashboard
- View member-only events
- Access restricted content areas
- Manage website content

### 3. Member (Premium Role)
- **Internal Name**: member
- **Access**: No WordPress dashboard access
- **Purpose**: Paying subscribers with special access

**What Members Can Do**:
- View public website content
- Access member-only events and locations
- Comment on blog posts
- Access restricted content areas
- View member-specific features

**What Members Cannot Do**:
- Access WordPress dashboard
- Manage website content
- Access administrative features

### 4. Volunteer
- **Internal Name**: volunteer
- **Access**: WordPress dashboard access
- **Purpose**: Volunteers who help manage the website

**What Volunteers Can Do**:
- Access WordPress dashboard
- Manage volunteer tasks
- View volunteer-specific content
- Access volunteer management tools

**What Volunteers Cannot Do**:
- Access full administrative features
- Manage other users
- Modify core website settings

### 5. Administrator 2 (Manager Role)
- **Internal Name**: manager
- **Access**: WordPress dashboard access
- **Purpose**: Limited administrative access

**What Managers Can Do**:
- Access WordPress dashboard
- Manage content (posts, pages)
- Manage media
- Moderate comments
- Access limited administrative features

**What Managers Cannot Do**:
- Manage user roles
- Access full administrative features
- Modify core website settings

### 6. Default WordPress Roles

#### Editor
- **Internal Name**: editor
- **Purpose**: Content management for blog posts

#### Author
- **Internal Name**: author
- **Purpose**: Blog post creation and management

#### Contributor
- **Internal Name**: contributor
- **Purpose**: Limited blog post creation

## Accessing the Members Plugin

### Navigation Path
1. **WordPress Dashboard** → **Members** → **Roles**
2. **WordPress Dashboard** → **Members** → **Add New**
3. **WordPress Dashboard** → **Members** → **Settings**

### Main Interface Features

#### Roles Overview Page
The main roles page shows:
- **Role Name**: Display name of the role
- **Role**: Internal role identifier
- **Users**: Number of users with this role
- **Granted**: Number of granted permissions
- **Denied**: Number of denied permissions
- **Actions**: Edit, Clone, Change Default, Users

#### Filter Tabs
- **All**: Shows all roles
- **Mine**: Shows roles you can edit
- **Has Users**: Shows roles with assigned users
- **No Users**: Shows roles without users
- **Editable**: Shows roles you can modify
- **WordPress**: Shows default WordPress roles

## Managing Roles

### Creating a New Role

#### Step-by-Step Process
1. **Navigate to**: Members → Add New
2. **Role Name**: Enter a descriptive name (e.g., "Event Manager")
3. **Role**: Enter internal identifier (e.g., "event_manager")
4. **Label**: Enter display label
5. **Description**: Add role description
6. **Capabilities**: Select appropriate permissions

#### Capability Selection
**Content Management**:
- \`read\` - Read content
- \`edit_posts\` - Edit posts
- \`publish_posts\` - Publish posts
- \`delete_posts\` - Delete posts
- \`edit_pages\` - Edit pages
- \`publish_pages\` - Publish pages

**User Management**:
- \`list_users\` - List users
- \`edit_users\` - Edit users
- \`delete_users\` - Delete users
- \`create_users\` - Create users

**System Management**:
- \`manage_options\` - Manage options
- \`activate_plugins\` - Activate plugins
- \`edit_plugins\` - Edit plugins
- \`install_plugins\` - Install plugins

### Editing Existing Roles

#### Accessing Role Editor
1. **Navigate to**: Members → Roles
2. **Find the role** you want to edit
3. **Click "Edit"** in the actions column

#### Modifying Capabilities
1. **Grant Capabilities**: Check boxes for permissions to grant
2. **Deny Capabilities**: Check boxes for permissions to deny
3. **Save Changes**: Click "Update Role" to save

#### Best Practices for Editing
- **Test Changes**: Always test role changes on a test user first
- **Document Changes**: Keep records of role modifications
- **Backup First**: Create backups before major role changes
- **Minimal Permissions**: Grant only necessary permissions

### Cloning Roles

#### When to Clone
- Creating similar roles with slight variations
- Testing role configurations
- Creating role templates

#### Cloning Process
1. **Navigate to**: Members → Roles
2. **Find the role** to clone
3. **Click "Clone"** in the actions column
4. **Modify the cloned role** as needed
5. **Save the new role**

### Deleting Roles

#### Before Deleting
- **Check User Assignments**: Ensure no users are assigned to the role
- **Backup Configuration**: Save role settings before deletion
- **Plan Migration**: Plan how to reassign affected users

#### Deletion Process
1. **Navigate to**: Members → Roles
2. **Find the role** to delete
3. **Click "Delete"** in the actions column
4. **Confirm deletion**

## Managing Users and Roles

### Assigning Roles to Users

#### Individual User Assignment
1. **Navigate to**: Users → All Users
2. **Find the user** to modify
3. **Click "Edit"**
4. **Select Role**: Choose from dropdown menu
5. **Update User**: Save changes

#### Bulk Role Assignment
1. **Navigate to**: Users → All Users
2. **Select users** using checkboxes
3. **Choose "Change role to"** from bulk actions
4. **Select new role**
5. **Apply changes**

### Role-Based Content Access

#### Content Protection
The Members plugin allows you to:
- **Protect Posts**: Restrict access to specific posts
- **Protect Pages**: Restrict access to specific pages
- **Protect Categories**: Restrict entire categories
- **Protect Custom Post Types**: Restrict custom content types

#### Setting Up Content Protection
1. **Edit Post/Page**: Open the content editor
2. **Find "Access" section**: Look for access control options
3. **Select Roles**: Choose which roles can access the content
4. **Save Changes**: Update the content

## Plugin Settings

### General Settings

#### Access Control
- **Private Site**: Make entire site private
- **Private Feed**: Make RSS feeds private
- **Private API**: Restrict API access

#### Registration Settings
- **Default Role**: Set default role for new registrations
- **Registration Access**: Control who can register
- **Email Verification**: Require email verification

#### Content Settings
- **Protected Content**: Default protection settings
- **Login Redirect**: Where to redirect after login
- **Logout Redirect**: Where to redirect after logout

### Advanced Settings

#### Capability Management
- **Custom Capabilities**: Create custom capabilities
- **Capability Groups**: Organize capabilities into groups
- **Role Hierarchy**: Set up role inheritance

#### Integration Settings
- **Theme Integration**: Customize theme integration
- **Plugin Compatibility**: Manage plugin compatibility
- **Performance Options**: Optimize plugin performance

## Security Best Practices

### Role Security
- **Principle of Least Privilege**: Grant minimal necessary permissions
- **Regular Audits**: Review role permissions regularly
- **Documentation**: Keep detailed records of role configurations
- **Testing**: Test role changes in staging environment

### User Security
- **Strong Passwords**: Enforce strong password policies
- **Two-Factor Authentication**: Enable 2FA where possible
- **Session Management**: Monitor user sessions
- **Access Logging**: Log user access and actions

### Content Security
- **Content Classification**: Clearly classify content by access level
- **Regular Reviews**: Review protected content regularly
- **Backup Protection**: Ensure backups include role configurations
- **Emergency Access**: Maintain emergency access procedures

## Troubleshooting

### Common Issues

#### Role Not Working
**Problem**: User can't access content they should have access to
**Solutions**:
1. **Check Role Assignment**: Verify user has correct role
2. **Check Capabilities**: Ensure role has necessary capabilities
3. **Clear Cache**: Clear any caching plugins
4. **Check Conflicts**: Look for plugin conflicts

#### Permission Denied
**Problem**: User gets "permission denied" errors
**Solutions**:
1. **Review Role Permissions**: Check role capability settings
2. **Check User Role**: Verify user role assignment
3. **Test with Different User**: Test with another user account
4. **Check Plugin Conflicts**: Disable other plugins temporarily

#### Content Not Protected
**Problem**: Protected content is still visible to unauthorized users
**Solutions**:
1. **Check Protection Settings**: Verify content protection is enabled
2. **Check Role Configuration**: Ensure roles are properly configured
3. **Clear Cache**: Clear website and browser cache
4. **Check Theme Compatibility**: Verify theme supports content protection

### Performance Issues

#### Slow Role Loading
**Problem**: Role management pages load slowly
**Solutions**:
1. **Optimize Database**: Clean and optimize WordPress database
2. **Reduce Role Count**: Minimize number of custom roles
3. **Update Plugin**: Ensure plugin is up to date
4. **Check Server Resources**: Monitor server performance

#### Memory Issues
**Problem**: Plugin causes memory problems
**Solutions**:
1. **Increase Memory Limit**: Increase PHP memory limit
2. **Optimize Capabilities**: Reduce number of capabilities per role
3. **Update PHP**: Ensure PHP version is current
4. **Contact Hosting**: Contact hosting provider for optimization

## Integration with Other Plugins

### EventPrime Integration
- **Event Access Control**: Control who can view events
- **Registration Permissions**: Manage event registration permissions
- **Member-Only Events**: Create events visible only to members

### Elementor Integration
- **Page Protection**: Protect Elementor-created pages
- **Widget Access**: Control access to specific widgets
- **Template Protection**: Protect Elementor templates

### WPForms Integration
- **Form Access**: Control who can access forms
- **Submission Permissions**: Manage form submission permissions
- **Email Notifications**: Configure role-based notifications

## Maintenance and Updates

### Regular Maintenance Tasks

#### Weekly Tasks
- **Review User Roles**: Check for unnecessary role assignments
- **Monitor Access Logs**: Review access and permission logs
- **Update Documentation**: Keep role documentation current

#### Monthly Tasks
- **Audit Permissions**: Review all role permissions
- **Clean Up Roles**: Remove unused roles
- **Backup Configurations**: Backup role configurations
- **Performance Review**: Monitor plugin performance

#### Quarterly Tasks
- **Security Review**: Complete security audit
- **Role Optimization**: Optimize role structure
- **User Training**: Update user training materials
- **Plugin Updates**: Update plugin and review changes

### Backup and Recovery

#### Backup Procedures
1. **Export Role Configurations**: Use plugin export feature
2. **Database Backup**: Backup WordPress database
3. **File Backup**: Backup plugin files
4. **Documentation Backup**: Backup role documentation

#### Recovery Procedures
1. **Restore Database**: Restore from backup
2. **Import Roles**: Import role configurations
3. **Verify Permissions**: Check all role permissions
4. **Test Access**: Test user access to content

## Getting Help

### Documentation Resources
- **Official Documentation**: [Members Plugin Documentation](https://wordpress.org/plugins/members/)
- **WordPress Codex**: [User Roles and Capabilities](https://codex.wordpress.org/Roles_and_Capabilities)
- **Plugin Support**: [Members Plugin Support](https://wordpress.org/support/plugin/members/)

### Support Channels
- **WordPress.org Forums**: Community support
- **Plugin Support**: Direct plugin support
- **Professional Support**: For complex implementations

### Emergency Procedures
- **Role Lockout**: Emergency access procedures
- **Permission Issues**: Quick permission restoration
- **Plugin Conflicts**: Conflict resolution steps

## Next Steps

- Learn about [User Management](/docs/user-management/roles-permissions)
- Explore [Content Protection](/docs/content-management/protection)
- Understand [Security Best Practices](/docs/security/role-security)
- Master [Plugin Integration](/docs/plugins/members-integration)
    `,
    sectionId: 'user-management',
    slug: 'members-plugin-guide',
    tags: ['members', 'roles', 'permissions', 'user management', 'access control'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'intermediate',
    estimatedTime: '45 minutes',
  },
  {
    id: 'user-management-overview',
    title: 'User Management Overview',
    content: `
# User Management Overview

User Management is a comprehensive system for managing all aspects of user accounts, roles, and permissions on the KCN Seniors website. This section provides centralized control over user access, security, and content permissions.

## What is User Management?

User Management encompasses all systems and processes for:
- **User Account Management**: Creating, editing, and managing user accounts
- **Role-Based Access Control**: Managing user roles and permissions
- **Security Management**: Password policies and account security
- **Registration Control**: Managing user registration processes
- **Content Access Control**: Controlling access to member-only content

## Key Components

### 1. WordPress Users Management
The core WordPress system for managing user accounts, profiles, and basic role assignment.

**Features**:
- User account creation and editing
- Profile management
- Password reset and security
- Bulk user operations
- User search and filtering

**Navigation**: WordPress Dashboard → Users → All Users

### 2. Members Plugin - Role Management
Advanced role and permission management system that extends WordPress's built-in capabilities.

**Features**:
- Custom role creation and management
- Granular permission control
- Content protection based on roles
- Role hierarchy and inheritance
- Advanced access control

**Navigation**: WordPress Dashboard → Members → Roles

### 3. Password Management
Comprehensive password security and management system.

**Features**:
- Password policy enforcement
- Secure password reset procedures
- Account lockout protection
- Two-factor authentication support
- Password strength requirements

### 4. Role-Based Access Control
System for controlling access to content and features based on user roles.

**Features**:
- Content protection by role
- Feature access control
- Member-only content areas
- Volunteer-specific access
- Comment system permissions

### 5. User Registration Settings
Configuration and management of user registration processes.

**Features**:
- Registration form customization
- Email verification settings
- Default role assignment
- Registration approval workflows
- Spam protection

## KCN Seniors User Structure

### User Roles Overview
- **Administrator**: Full system access and control
- **Subscriber**: Default role for new registrations
- **Member**: Premium role with special content access
- **Volunteer**: Dashboard access for volunteer management
- **Manager**: Limited administrative access

### Access Levels
- **Public Access**: Available to all visitors
- **Logged-in Access**: Available to all registered users
- **Member Access**: Available only to members
- **Volunteer Access**: Available to volunteers and above
- **Admin Access**: Available to administrators only

## Getting Started

### For New Administrators
1. **Review User Management Overview**: Understand the complete system
2. **Learn WordPress Users Management**: Master basic user account management
3. **Master Members Plugin**: Understand advanced role management
4. **Configure Security Settings**: Set up password and security policies
5. **Test Access Control**: Verify role-based access works correctly

### For Content Managers
1. **Understand User Roles**: Know what each role can access
2. **Learn Content Protection**: Protect member-only content
3. **Manage User Accounts**: Handle user creation and editing
4. **Monitor User Activity**: Track user engagement and access

### For Volunteers
1. **Understand Your Role**: Know your permissions and limitations
2. **Access Volunteer Tools**: Use volunteer-specific features
3. **Manage Your Profile**: Keep your information updated
4. **Follow Security Guidelines**: Maintain account security

## Best Practices

### Security Best Practices
- **Strong Password Policies**: Enforce strong password requirements
- **Regular Security Audits**: Review user access and permissions
- **Account Monitoring**: Monitor for suspicious activity
- **Backup Procedures**: Regular backup of user data
- **Access Control**: Principle of least privilege

### User Management Best Practices
- **Clear Role Definitions**: Define clear role responsibilities
- **Regular User Reviews**: Review and clean up user accounts
- **Documentation**: Keep detailed records of role assignments
- **Training**: Provide user training for new features
- **Support**: Maintain clear support procedures

### Content Protection Best Practices
- **Content Classification**: Clearly classify content by access level
- **Regular Reviews**: Review protected content regularly
- **Access Testing**: Test access controls regularly
- **User Communication**: Communicate access changes to users

## Integration with Other Systems

### Event Management Integration
- **Event Access Control**: Control who can view and register for events
- **Member-Only Events**: Create events visible only to members
- **Volunteer Event Management**: Allow volunteers to manage events

### Content Management Integration
- **Protected Content**: Restrict access to specific pages and posts
- **Member-Only Blog Posts**: Create posts visible only to members
- **Comment System**: Control who can comment on content

### Service Booking Integration
- **Volunteer Service Management**: Allow volunteers to manage services
- **Member Service Access**: Control access to service booking
- **Role-Based Service Availability**: Show different services based on role

## Troubleshooting

### Common Issues
- **User Can't Access Content**: Check role assignment and permissions
- **Password Reset Problems**: Verify email configuration
- **Role Not Working**: Check Members Plugin configuration
- **Registration Issues**: Review registration settings

### Performance Issues
- **Slow User Loading**: Optimize database and reduce user count
- **Memory Problems**: Increase PHP memory limit
- **Cache Issues**: Clear caching plugins

## Support and Resources

### Documentation
- **WordPress Users Documentation**: [Official WordPress Users Guide](https://wordpress.org/documentation/article/users-screen/)
- **Members Plugin Documentation**: [Members Plugin Guide](/docs/user-management/members-plugin-guide)
- **WordPress Codex**: [Managing Users](https://codex.wordpress.org/Users_Add_New_Screen)

### Support Channels
- **WordPress.org Forums**: Community support
- **Plugin Support**: Individual plugin support
- **Professional Support**: For complex implementations

## Next Steps

- Learn about [WordPress Users Management](/docs/user-management/wordpress-users-management)
- Master [Members Plugin Role Management](/docs/user-management/members-plugin-guide)
- Understand [Password Management](/docs/user-management/password-management)
- Explore [Role-Based Access Control](/docs/user-management/role-based-access)
    `,
    sectionId: 'user-management',
    slug: 'user-management-overview',
    tags: ['user management', 'overview', 'roles', 'permissions', 'administration'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'beginner',
    estimatedTime: '20 minutes',
  },
  {
    id: 'wordpress-users-management',
    title: 'WordPress Users Management',
    content: `
# WordPress Users Management

WordPress Users is the core system for managing all user accounts on the KCN Seniors website. This section covers how to manage users, assign roles, and handle user-related tasks. **Important**: While WordPress Users manages the user database, the actual roles and permissions are managed through the [Members Plugin](/docs/user-management/members-plugin-guide).

## What is WordPress Users?

WordPress Users is the built-in WordPress system that manages:
- **User Accounts**: All registered users on the website
- **User Profiles**: Personal information and settings
- **Role Assignment**: Assigning roles to individual users
- **User Management**: Creating, editing, and deleting users
- **Password Management**: Password resets and security

**Official Documentation**: [WordPress Users Documentation](https://wordpress.org/documentation/article/users-screen/)
**WordPress Codex**: [Managing Users](https://codex.wordpress.org/Users_Add_New_Screen)

## Accessing WordPress Users

### Navigation Path
1. **WordPress Dashboard** → **Users** → **All Users**
2. **WordPress Dashboard** → **Users** → **Add New**
3. **WordPress Dashboard** → **Users** → **Your Profile**

### Main Interface Features

#### All Users Page
The main users page displays:
- **User List**: All registered users with their information
- **Search and Filter**: Find specific users quickly
- **Bulk Actions**: Perform actions on multiple users
- **User Information**: Username, name, email, role, posts

#### User Information Columns
- **Username**: Login name for the user
- **Name**: Display name on the website
- **Email**: User's email address
- **Role**: Current role assignment
- **Posts**: Number of posts by the user
- **Actions**: Edit, Delete, View options

## Managing Users

### Viewing All Users

#### Accessing the Users List
1. **Navigate to**: Users → All Users
2. **View User List**: See all registered users
3. **Use Filters**: Filter by role, search by name/email
4. **Sort Users**: Click column headers to sort

#### Search and Filter Options
- **Search Box**: Search by username, name, or email
- **Role Filter**: Filter users by their assigned role
- **Date Filter**: Filter by registration date
- **Bulk Actions**: Select multiple users for actions

### Adding New Users

#### Manual User Creation
1. **Navigate to**: Users → Add New
2. **Fill Required Fields**:
   - **Username**: Unique login name (required)
   - **Email**: Valid email address (required)
   - **First Name**: User's first name
   - **Last Name**: User's last name
   - **Website**: User's website (optional)
   - **Password**: Strong password (auto-generated or custom)
   - **Send User Notification**: Email user their login details
3. **Select Role**: Choose from available roles
4. **Add New User**: Click "Add New User" button

#### Best Practices for User Creation
- **Strong Passwords**: Use auto-generated strong passwords
- **Unique Usernames**: Ensure usernames are unique
- **Valid Email**: Use real email addresses
- **Appropriate Role**: Assign the correct role immediately
- **Send Notifications**: Notify users of their account creation

### Editing Existing Users

#### Accessing User Editor
1. **Navigate to**: Users → All Users
2. **Find the user** you want to edit
3. **Click "Edit"** in the actions column

#### User Profile Sections

##### Personal Options
- **Visual Editor**: Enable/disable visual editor
- **Admin Color Scheme**: Choose admin color scheme
- **Keyboard Shortcuts**: Enable keyboard shortcuts
- **Toolbar**: Show/hide admin toolbar

##### Name
- **Username**: Login name (cannot be changed)
- **First Name**: User's first name
- **Last Name**: User's last name
- **Nickname**: Display nickname
- **Display Name**: How name appears publicly

##### Contact Info
- **Email**: Primary email address
- **Website**: Personal website URL

##### About Yourself
- **Biographical Info**: Short bio for user profile
- **Profile Picture**: Upload profile picture (Gravatar)

##### Account Management
- **New Password**: Set new password
- **Confirm Password**: Confirm new password
- **Generate Password**: Auto-generate strong password

### Role Assignment

#### Changing User Roles
1. **Edit User**: Open user profile for editing
2. **Find Role Section**: Look for "Role" dropdown
3. **Select New Role**: Choose from available roles
4. **Update User**: Save changes

#### Available Roles (Managed by Members Plugin)
- **Administrator**: Full access to everything
- **Subscriber**: Default role, frontend access only
- **Member**: Premium role, member-only content access
- **Volunteer**: Dashboard access, volunteer management
- **Manager**: Limited administrative access
- **Editor**: Content management (if used)
- **Author**: Post creation (if used)
- **Contributor**: Limited post creation (if used)

#### Volunteer Tag Assignment
For users with volunteer roles:
1. **Edit User**: Open volunteer user profile
2. **Find Volunteer Field**: Look for volunteer-specific fields
3. **Assign Tags**: Add appropriate volunteer tags
4. **Save Changes**: Update user profile

### Deleting Users

#### Before Deleting Users
- **Check Content**: Ensure user has no important content
- **Backup Data**: Backup user data if needed
- **Plan Content Transfer**: Decide what to do with user's content

#### Deletion Process
1. **Navigate to**: Users → All Users
2. **Find the user** to delete
3. **Click "Delete"** in the actions column
4. **Choose Content Option**:
   - **Delete all content**: Remove all user's posts/pages
   - **Attribute all content to**: Transfer to another user
5. **Confirm Deletion**: Click "Confirm Deletion"

#### Bulk User Deletion
1. **Select Users**: Check boxes for multiple users
2. **Choose Action**: Select "Delete" from bulk actions
3. **Apply Action**: Click "Apply"
4. **Confirm Deletion**: Confirm for each user

## User Management Features

### Password Management

#### Resetting User Passwords
1. **Edit User**: Open user profile
2. **Password Section**: Find password fields
3. **Generate Password**: Click "Generate Password"
4. **Send Email**: Check "Send this password to the new user by email"
5. **Update User**: Save changes

#### User Password Reset Requests
- **User Requests**: Users can request password resets
- **Email Notifications**: Users receive reset links via email
- **Security**: Reset links expire after 24 hours
- **Admin Notifications**: Admins can be notified of reset requests

### User Search and Filtering

#### Search Functionality
- **Search Box**: Search by username, name, or email
- **Real-time Results**: Results update as you type
- **Case Insensitive**: Search works regardless of case

#### Advanced Filtering
- **Role Filter**: Filter by specific roles
- **Date Filter**: Filter by registration date
- **Status Filter**: Filter by user status
- **Combined Filters**: Use multiple filters together

### Bulk User Actions

#### Available Bulk Actions
- **Change Role**: Change role for multiple users
- **Delete**: Delete multiple users
- **Send Email**: Send email to multiple users (if plugin available)

#### Performing Bulk Actions
1. **Select Users**: Check boxes for target users
2. **Choose Action**: Select action from dropdown
3. **Apply Action**: Click "Apply" button
4. **Confirm Action**: Confirm the action if prompted

## User Profile Management

### Personal Profile Settings

#### Accessing Your Profile
1. **Navigate to**: Users → Your Profile
2. **Edit Settings**: Modify your own profile
3. **Save Changes**: Update your profile

#### Profile Customization
- **Display Name**: How your name appears
- **Admin Color Scheme**: Personalize admin interface
- **Keyboard Shortcuts**: Enable admin shortcuts
- **Visual Editor**: Enable/disable visual editor

### User Capabilities

#### Understanding Capabilities
- **Role-Based**: Capabilities are determined by user role
- **Granular Control**: Members plugin provides detailed control
- **Content Access**: Determines what content users can access
- **Admin Access**: Controls dashboard access

#### Checking User Capabilities
- **Role Display**: Current role shown in user list
- **Capability Testing**: Test capabilities in Members plugin
- **Access Control**: Content access based on capabilities

## Security and Best Practices

### User Security

#### Password Policies
- **Strong Passwords**: Enforce strong password requirements
- **Regular Updates**: Encourage password updates
- **Unique Passwords**: Ensure passwords are unique
- **Two-Factor Authentication**: Enable 2FA where possible

#### Account Security
- **Email Verification**: Verify user email addresses
- **Account Lockout**: Implement account lockout policies
- **Session Management**: Monitor user sessions
- **Access Logging**: Log user access and actions

### Data Protection

#### User Privacy
- **Personal Information**: Protect user personal data
- **Email Addresses**: Secure email handling
- **Profile Data**: Secure profile information
- **GDPR Compliance**: Follow data protection regulations

#### Content Ownership
- **Content Attribution**: Properly attribute user content
- **Content Transfer**: Handle content when users are deleted
- **Backup Procedures**: Backup user data regularly

## Integration with Members Plugin

### Role Management Integration

#### How It Works
- **WordPress Users**: Manages user accounts and profiles
- **Members Plugin**: Manages roles and permissions
- **Seamless Integration**: Both systems work together
- **Role Assignment**: Assign roles through WordPress Users

#### Role Assignment Process
1. **Create/Edit User**: Use WordPress Users interface
2. **Select Role**: Choose from roles managed by Members plugin
3. **Save Changes**: Role is assigned to user
4. **Verify Permissions**: Check permissions in Members plugin

### Content Access Control

#### Member-Only Content
- **Role-Based Access**: Content access based on user roles
- **Member Events**: Special access for member role
- **Volunteer Content**: Volunteer-specific content areas
- **Public Content**: Content accessible to all users

#### Comment System
- **Logged-in Only**: Only logged-in users can comment
- **Role-Based Comments**: Comment permissions by role
- **Moderation**: Comment moderation based on user role

## Troubleshooting

### Common User Issues

#### User Can't Login
**Problem**: User unable to access their account
**Solutions**:
1. **Check Username**: Verify correct username
2. **Reset Password**: Generate new password
3. **Check Role**: Ensure user has appropriate role
4. **Check Email**: Verify email address is correct

#### Role Not Working
**Problem**: User doesn't have expected permissions
**Solutions**:
1. **Check Role Assignment**: Verify role in WordPress Users
2. **Check Members Plugin**: Verify role configuration
3. **Clear Cache**: Clear any caching plugins
4. **Test Permissions**: Test with different user account

#### Email Issues
**Problem**: Users not receiving emails
**Solutions**:
1. **Check Email Settings**: Verify email configuration
2. **Check Spam Filters**: Check spam/junk folders
3. **Test Email Delivery**: Send test emails
4. **Check SMTP Settings**: Verify SMTP configuration

### Performance Issues

#### Slow User Loading
**Problem**: User management pages load slowly
**Solutions**:
1. **Optimize Database**: Clean and optimize WordPress database
2. **Reduce User Count**: Archive inactive users
3. **Update WordPress**: Ensure WordPress is up to date
4. **Check Server Resources**: Monitor server performance

#### Memory Issues
**Problem**: User management causes memory problems
**Solutions**:
1. **Increase Memory Limit**: Increase PHP memory limit
2. **Optimize Queries**: Optimize database queries
3. **Update PHP**: Ensure PHP version is current
4. **Contact Hosting**: Contact hosting provider for optimization

## Maintenance and Updates

### Regular Maintenance Tasks

#### Weekly Tasks
- **Review New Users**: Check recently registered users
- **Monitor User Activity**: Review user activity logs
- **Check Role Assignments**: Verify role assignments
- **Update Documentation**: Keep user documentation current

#### Monthly Tasks
- **Audit User Accounts**: Review all user accounts
- **Clean Up Inactive Users**: Remove or archive inactive users
- **Backup User Data**: Backup user information
- **Review Security**: Check user security settings

#### Quarterly Tasks
- **Security Review**: Complete user security audit
- **Role Optimization**: Optimize role assignments
- **User Training**: Update user training materials
- **System Updates**: Update WordPress and plugins

### Backup and Recovery

#### Backup Procedures
1. **Export User Data**: Export user information
2. **Database Backup**: Backup WordPress database
3. **File Backup**: Backup user uploads and files
4. **Documentation Backup**: Backup user documentation

#### Recovery Procedures
1. **Restore Database**: Restore from backup
2. **Import User Data**: Import user information
3. **Verify Accounts**: Check all user accounts
4. **Test Access**: Test user access and permissions

## Getting Help

### Documentation Resources
- **Official Documentation**: [WordPress Users Documentation](https://wordpress.org/documentation/article/users-screen/)
- **WordPress Codex**: [Managing Users](https://codex.wordpress.org/Users_Add_New_Screen)
- **Members Plugin**: [Members Plugin Guide](/docs/wordpress-basics/members-plugin-guide)

### Support Channels
- **WordPress.org Forums**: Community support
- **WordPress Support**: Official WordPress support
- **Plugin Support**: Individual plugin support
- **Professional Support**: For complex implementations

### Emergency Procedures
- **Account Lockout**: Emergency account access procedures
- **Data Loss**: User data recovery procedures
- **Security Breach**: User security incident response

## Next Steps

- Learn about [Members Plugin Role Management](/docs/user-management/members-plugin-guide)
- Explore [Content Management](/docs/content-management/posts-pages)
- Understand [Security Best Practices](/docs/security/overview)
- Master [User Access Control](/docs/user-management/access-control)
    `,
    sectionId: 'user-management',
    slug: 'wordpress-users-management',
    tags: ['wordpress', 'users', 'user management', 'profiles', 'roles', 'permissions'],
    lastUpdated: new Date('2025-01-15'),
    difficulty: 'intermediate',
    estimatedTime: '40 minutes',
  },
];

// Search functionality
export function searchDocs(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase();
  const results: SearchResult[] = [];

  docContent.forEach(doc => {
    const titleMatch = doc.title.toLowerCase().includes(searchTerm);
    const contentMatch = doc.content.toLowerCase().includes(searchTerm);
    const tagMatch = doc.tags.some(tag => tag.toLowerCase().includes(searchTerm));

    if (titleMatch || contentMatch || tagMatch) {
      let matchScore = 0;
      if (titleMatch) matchScore += 10;
      if (contentMatch) matchScore += 5;
      if (tagMatch) matchScore += 3;

      results.push({
        id: doc.id,
        title: doc.title,
        content: doc.content.substring(0, 200) + '...',
        sectionId: doc.sectionId,
        slug: doc.slug,
        tags: doc.tags,
        difficulty: doc.difficulty,
        matchScore,
      });
    }
  });

  return results.sort((a, b) => b.matchScore - a.matchScore);
}

// Get documentation by section
export function getDocsBySection(sectionId: string): DocContent[] {
  return docContent.filter(doc => doc.sectionId === sectionId);
}

// Get documentation by slug
export function getDocBySlug(slug: string): DocContent | undefined {
  return docContent.find(doc => doc.slug === slug);
}

// Get section by slug
export function getSectionBySlug(slug: string): DocSection | undefined {
  return docSections.find(section => section.slug === slug);
}

// Get all sections
export function getAllSections(): DocSection[] {
  return docSections;
}

// Get breadcrumb navigation
export function getBreadcrumbs(sectionSlug: string, docSlug?: string): Array<{ title: string; slug: string }> {
  const breadcrumbs: Array<{ title: string; slug: string }> = [
    { title: 'Documentation', slug: '/docs' },
  ];

  const section = getSectionBySlug(sectionSlug);
  if (section) {
    breadcrumbs.push({ title: section.title, slug: `/docs/${section.slug}` });
  }

  if (docSlug) {
    const doc = getDocBySlug(docSlug);
    if (doc) {
      breadcrumbs.push({ title: doc.title, slug: `/docs/${sectionSlug}/${docSlug}` });
    }
  }

  return breadcrumbs;
}
