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
      { id: 'roles-permissions', title: 'User Roles & Permissions', description: 'Understanding user roles and permissions', icon: 'Shield', slug: 'roles-permissions', category: 'administration', order: 1 },
      { id: 'add-edit-users', title: 'Adding/Editing Users', description: 'Managing user accounts', icon: 'UserPlus', slug: 'add-edit-users', category: 'administration', order: 2 },
      { id: 'password-management', title: 'Password Management', description: 'Password policies and security', icon: 'Lock', slug: 'password-management', category: 'administration', order: 3 },
      { id: 'role-based-access', title: 'Role-Based Access Control', description: 'Controlling access based on roles', icon: 'Key', slug: 'role-based-access', category: 'administration', order: 4 },
      { id: 'registration-settings', title: 'User Registration Settings', description: 'Configuring user registration', icon: 'Settings', slug: 'registration-settings', category: 'administration', order: 5 },
    ],
  },
  {
    id: 'content-management',
    title: 'Content Management',
    description: 'Creating and managing website content',
    icon: 'FileText',
    slug: 'content-management',
    category: 'content',
    order: 3,
    children: [
      { id: 'dashboard-overview', title: 'WordPress Dashboard Overview', description: 'Understanding the WordPress dashboard', icon: 'LayoutDashboard', slug: 'dashboard-overview', category: 'content', order: 1 },
      { id: 'create-edit-pages', title: 'Creating/Editing Pages', description: 'Creating and editing website pages', icon: 'Edit', slug: 'create-edit-pages', category: 'content', order: 2 },
      { id: 'blog-management', title: 'Blog Post Management', description: 'Managing blog posts and articles', icon: 'FileText', slug: 'blog-management', category: 'content', order: 3 },
      { id: 'media-library', title: 'Media Library Management', description: 'Managing images and media files', icon: 'Image', slug: 'media-library', category: 'content', order: 4 },
      { id: 'menu-management', title: 'Menu Management', description: 'Creating and managing navigation menus', icon: 'Menu', slug: 'menu-management', category: 'content', order: 5 },
      { id: 'widget-management', title: 'Widget Management', description: 'Managing sidebar widgets and content', icon: 'Puzzle', slug: 'widget-management', category: 'content', order: 6 },
    ],
  },
  {
    id: 'event-management',
    title: 'Event Management System',
    description: 'Managing events, registrations, and calendars',
    icon: 'Calendar',
    slug: 'event-management',
    category: 'events',
    order: 4,
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
    order: 5,
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
    order: 6,
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
    order: 7,
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
    order: 8,
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
    order: 9,
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
    order: 10,
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
    order: 11,
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
