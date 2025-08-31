---
title: "WordPress Basics Overview"
description: "Complete guide to WordPress fundamentals for KCN Seniors team members"
sectionId: "wordpress-basics"
slug: "wordpress-basics-overview"
tags: ["wordpress", "basics", "dashboard", "posts", "pages", "media", "users", "roles", "kcn seniors", "fundamentals", "cms"]
difficulty: "beginner"
estimatedTime: "45 minutes"
lastUpdated: "2025-01-15"
order: 1
---

# WordPress Basics Tutorial for KCN Seniors Team Members

## Table of Contents

1. [Introduction: WordPress at KCN Seniors](#introduction-wordpress-at-kcn-seniors)
2. [Chapter 1: Understanding WordPress - The Foundation](#chapter-1-understanding-wordpress---the-foundation)
3. [Chapter 2: Accessing the WordPress Dashboard](#chapter-2-accessing-the-wordpress-dashboard)
4. [Chapter 3: The WordPress Admin Menu - Your Navigation Hub](#chapter-3-the-wordpress-admin-menu---your-navigation-hub)
5. [Chapter 4: Posts vs Pages - Understanding the Difference](#chapter-4-posts-vs-pages---understanding-the-difference)
6. [Chapter 5: Creating Content - The KCN Seniors Way](#chapter-5-creating-content---the-kcn-seniors-way)
7. [Chapter 6: Media Management Best Practices](#chapter-6-media-management-best-practices)
8. [Chapter 7: Understanding User Roles at KCN Seniors](#chapter-7-understanding-user-roles-at-kcn-seniors)
9. [Chapter 8: WordPress Settings - Handle with Care](#chapter-8-wordpress-settings---handle-with-care)
10. [Chapter 9: Working with Plugins - The KCN Extensions](#chapter-9-working-with-plugins---the-kcn-extensions)
11. [Chapter 10: Daily WordPress Tasks at KCN Seniors](#chapter-10-daily-wordpress-tasks-at-kcn-seniors)
12. [Chapter 11: Troubleshooting Common Issues](#chapter-11-troubleshooting-common-issues)
13. [Chapter 12: WordPress Security at KCN Seniors](#chapter-12-wordpress-security-at-kcn-seniors)
14. [Chapter 13: Resources and Learning](#chapter-13-resources-and-learning)
15. [Conclusion](#conclusion)

---

## Introduction: WordPress at KCN Seniors

This tutorial covers WordPress fundamentals and how they apply to the KCN Seniors website. While WordPress powers millions of websites worldwide, our implementation has specific configurations for managing senior community services.

### Important Context for KCN Seniors
At KCN Seniors, WordPress serves as our **content management backbone**, but remember:
- **Elementor Pro handles ALL visual design** - You won't use WordPress's built-in editor for page design
- We use a **6-level role hierarchy** (Public → Subscriber → Member → Volunteer → Administrator 2 → Administrator)
- The **Members Plugin** controls who sees what content
- **EventPrime** manages all our community events

---

## Chapter 1: Understanding WordPress - The Foundation

### What is WordPress?
WordPress is a Content Management System (CMS) - think of it as the engine that powers our website. Originally created as a platform for bloggers, WordPress has evolved into a powerful tool for building all kinds of websites – from personal blogs to complex eCommerce sites. For KCN Seniors, it manages our content, users, and integrates with specialized plugins for senior services.

**Official Documentation**: [WordPress.org Documentation](https://wordpress.org/documentation/)

### WordPress.org vs WordPress.com
**We use WordPress.org** (self-hosted):
- Full access to themes, plugins and customizations: You can install any WordPress theme, use third-party or custom plugins and even edit the site's code.
- Complete control over our data
- Integration with EventPrime, Members Plugin, and Elementor Pro
- Custom volunteer management system

---

## Chapter 2: Accessing the WordPress Dashboard

### How to Log In
To access the KCN Seniors admin area:

1. **Navigate to**: `https://kcnseniors.coop/wp-admin`
2. **Enter your credentials** (provided by your administrator)
3. **Check "Remember Me"** if using a secure computer

Typically to log into your site, you want to enter the following into your browser's address bar, your website comm slash WP dash admin. Of course replace your website comm with the actual URL for your website.

### Dashboard Overview
When you first log in, you'll see the WordPress Dashboard - your control center for managing the website.

**The Dashboard includes**:
- At a Glance: a summary of the content on your site and identifies which theme you are using. Activity: the upcoming scheduled posts, recently published posts, and the most recent comments on your posts.
- Quick Draft for rapid content creation
- Site Health Status for monitoring

**KCN Seniors Note**: Your dashboard view depends on your role level. Volunteers see different options than Administrators.

---

## Chapter 3: The WordPress Admin Menu - Your Navigation Hub

The WordPress Admin Menu is the vertical menu located on the left side of your Dashboard. It serves as the navigation hub for all your website management tasks.

### Core Menu Items at KCN Seniors:

#### Dashboard
Your home base showing site activity and quick links. For KCN Seniors staff, this displays pending volunteer tasks and upcoming events.

#### Posts (Blog Content)
Posts are used for dynamic content, such as blog posts, news articles, recipes, etc. 
- **At KCN Seniors**: Community news, volunteer stories, senior resources
- Organized by categories (Community News, Health Tips, Volunteer Updates)
- Tagged for easy searching (e.g., "Bauline", "senior-services", "volunteer-opportunities")
- **Comments enabled** for member engagement (managed through our role system)

#### Pages (Static Content)
Pages are static type content, like a contact page, for example.
- **At KCN Seniors**: About Us, Services, Membership, Contact
- **IMPORTANT**: All pages are designed with Elementor Pro, NOT the WordPress editor
- Hierarchical structure (parent/child pages)
- No comments by default

#### Media Library
The Media Library is where all your site's media files—images, videos, audio files, and documents—are stored and managed.
- Stores event photos, volunteer recognition images, resource documents
- Organized by year/month folders
- **Best Practice**: Use descriptive filenames (e.g., "pouch-cove-senior-lunch-2025.jpg")

#### Comments
- Managed comments from blog posts
- **KCN Seniors Policy**: Only logged-in members can comment
- Requires moderation approval for first-time commenters
- Integration with Members Plugin for role-based permissions

#### Users
- View and manage member accounts
- **Cannot create new roles** (managed by Members Plugin)
- Assign users to our 6-level hierarchy
- Volunteer profiles linked through ACF tags

#### Appearance
- Theme settings (though we use Elementor for design)
- Menu management for navigation
- Widget areas for sidebars
- **Note**: Most visual changes happen in Elementor, not here

#### Plugins
- EventPrime for event management
- Members for role control
- WPForms Lite for contact forms
- Elementor Pro for design
- **Warning**: Never deactivate core plugins without administrator approval

#### Settings
- General site configuration
- Discussion settings for comments
- Permalinks for URL structure
- **Critical**: Changes here affect the entire site

---

## Chapter 4: Posts vs Pages - Understanding the Difference

### Posts (Dynamic Content)
Posts are timely, and pages are timeless. You can use categories and tags to organize posts, while pages are hierarchical and organized as child and parent pages.

**At KCN Seniors, Posts are used for**:
- Community event recaps
- Volunteer spotlights
- Health and wellness tips
- Service updates
- Newsletter content

**Key Features**:
- Display in reverse chronological order
- Support categories and tags
- Enable comments (for logged-in members)
- Include author and date information
- Appear in RSS feeds

### Pages (Static Content)
**At KCN Seniors, Pages include**:
- Homepage
- About the Co-operative
- Services Offered
- Membership Information
- Volunteer Information
- Contact Us (with WPForms)

**Key Features**:
- Timeless content without dates
- Hierarchical organization
- Form the main navigation
- Designed entirely with Elementor Pro
- No comments by default

### Quick Reference Table

| Feature | Posts | Pages |
|---------|-------|-------|
| **Purpose at KCN** | News, updates, resources | Core information |
| **Design Tool** | WordPress Editor or Elementor | Always Elementor Pro |
| **Organization** | Categories & Tags | Parent/Child hierarchy |
| **Comments** | Yes (members only) | No |
| **In Navigation** | Blog section | Main menu |
| **RSS Feed** | Yes | No |

**Learn More**: [WordPress Posts vs Pages Documentation](https://learn.wordpress.org/lesson/understanding-the-difference-between-wordpress-posts-and-pages/)

---

## Chapter 5: Creating Content - The KCN Seniors Way

### Creating a Blog Post
1. Navigate to **Posts → Add New**
2. Add your title (e.g., "Flatrock Senior Lunch Success")
3. Write content using the Block Editor
4. **Categories**: Select relevant category (Community News)
5. **Tags**: Add descriptive tags (flatrock, senior-lunch, community)
6. **Featured Image**: Add a representative photo
7. **Publish Settings**: Immediate or schedule for later

**KCN Tip**: Posts about events should reference EventPrime event details and include volunteer acknowledgments.

### Creating a Page (Remember: Elementor Only!)
1. Navigate to **Pages → Add New**
2. Enter page title
3. **Click "Edit with Elementor"** (never use WordPress editor for pages)
4. Design using Elementor's drag-and-drop interface
5. Use our pre-built Elementor templates for consistency
6. Save and publish

**Critical**: All KCN Seniors pages must be created with Elementor Pro to maintain design consistency.

---

## Chapter 6: Media Management Best Practices

### Uploading Media
To upload new files, click the Add New Media File button at the top of the Media Library. You can either drag and drop files from your computer or select files to upload.

**KCN Seniors Guidelines**:
- **Event Photos**: 1200×630 pixels (16:9 ratio)
- **Featured Images**: 1200×630 pixels
- **In-content Images**: 800×600 maximum
- **File Naming**: Use descriptive names with location (bauline-volunteer-training-2025.jpg)

### Organization Tips
- Use year/month folder structure
- Add alt text for accessibility (important for senior users)
- Compress images before uploading
- Delete unused media regularly

---

## Chapter 7: Understanding User Roles at KCN Seniors

### Our 6-Level Hierarchy Explained

1. **Public Visitors** (Level 1)
   - Can view public content
   - Can submit contact forms
   - Cannot see member-only events

2. **Subscribers** (Level 2)
   - Basic logged-in users
   - Can comment on posts
   - See some protected content

3. **Members** (Level 3)
   - Access member-only events
   - See venue information (hidden from public)
   - Exclusive content access

4. **Volunteers** (Level 4)
   - Everything members have
   - Access volunteer dashboard
   - Task management tools
   - Skill-based matching system

5. **Administrator 2** (Level 5)
   - Content management
   - User management (limited)
   - Cannot install plugins
   - Cannot modify core settings

6. **Administrator** (Level 6)
   - Complete control
   - Plugin management
   - Role assignments
   - System configuration

**Your Role**: Check the top admin bar to see your current role and capabilities.

---

## Chapter 8: WordPress Settings - Handle with Care

### General Settings
- **Site Title**: KCN Seniors Co-operative
- **Tagline**: Helping seniors age well at home
- **Admin Email**: Critical for notifications
- **Timezone**: Newfoundland Standard Time
- **Date Format**: Matches local preferences

### Discussion Settings (Comment Management)
**KCN Seniors Configuration**:
- Comments require user login
- First comment requires approval
- No anonymous comments allowed
- Integration with Members Plugin

### Permalinks
- Controls URL structure
- Set to "Post name" for clean URLs
- **Never change** without administrator approval

**Learn More**: [WordPress Settings Documentation](https://wordpress.org/documentation/article/settings-general-screen/)

---

## Chapter 9: Working with Plugins - The KCN Extensions

### Core Plugins (Never Disable!)
1. **Elementor Pro**: All page design
2. **EventPrime**: Event management
3. **Members**: Role-based access
4. **ACF**: Volunteer profiles
5. **WPForms Lite**: Contact forms
6. **Code Snippets**: Custom functionality

### Plugin Best Practices
- Never install plugins without approval
- Check compatibility before updates
- Report any plugin errors immediately
- Understand each plugin's purpose

---

## Chapter 10: Daily WordPress Tasks at KCN Seniors

### For Content Managers
1. **Check Comments**: Review and approve member comments
2. **Update Events**: Ensure EventPrime calendar is current
3. **Post Updates**: Share community news
4. **Media Cleanup**: Remove old/unused images

### For Administrators
1. **User Management**: Process new member registrations
2. **Volunteer Coordination**: Match volunteers with tasks
3. **Content Review**: Ensure quality and accuracy
4. **Security Checks**: Monitor site health

### For Volunteers
1. **Check Tasks**: Review assigned volunteer tasks
2. **Update Profile**: Keep skills and availability current
3. **Engage**: Comment on posts, share experiences

---

## Chapter 11: Troubleshooting Common Issues

### "I Can't See Something"
- Check Screen Options (top right of screen)
- Verify your user role permissions
- Clear browser cache
- Contact administrator if issue persists

### "The Editor Looks Different"
- **For Pages**: You should be in Elementor (blue interface)
- **For Posts**: You're in WordPress Block Editor (that's correct)
- Never edit pages in WordPress editor

### "I Can't Upload Images"
- Check file size (max 5MB recommended)
- Verify file type (JPG, PNG, GIF)
- Ensure you have upload permissions
- Check available storage space

### "Comments Aren't Showing"
- Verify user is logged in
- Check comment moderation queue
- Ensure discussion settings are correct
- Review Members Plugin permissions

---

## Chapter 12: WordPress Security at KCN Seniors

### Your Responsibilities
1. **Strong Passwords**: Use complex, unique passwords
2. **Log Out**: Always log out on shared computers
3. **Report Issues**: Alert administrators to suspicious activity
4. **Update Profile**: Keep your email current for notifications

### What We Handle
- Regular WordPress updates
- Plugin security patches
- Daily backups
- Spam protection
- SSL certificates

---

## Chapter 13: Resources and Learning

### Official WordPress Resources
- [WordPress.org Documentation](https://wordpress.org/documentation/)
- [WordPress Support Forums](https://wordpress.org/support/)
- [Learn WordPress](https://learn.wordpress.org/) - Free courses and workshops
- [WordPress Dashboard Overview Tutorial](https://learn.wordpress.org/tutorial/wordpress-dashboard-overview/)

### KCN Seniors Specific Resources
- Internal documentation portal (this site!)
- Team training sessions (monthly)
- Volunteer coordinator support
- Administrator office hours

### Recommended Learning Resources
- Start with the [Intro to WordPress course](https://learn.wordpress.org/) - Free and covers the essentials
- Focus on understanding dashboard navigation and user roles first
- Learn the difference between Posts and Pages
- Practice media management and organization
- Review comment moderation procedures
- Elementor Pro training available in separate documentation

---

## Conclusion

### Key Takeaways
1. **WordPress is the engine**, Elementor Pro is the designer
2. **Respect the role hierarchy** - it protects sensitive information
3. **Posts are for news**, Pages are for permanent info
4. **Always use Elementor** for page design
5. **Comment moderation** maintains community standards
6. **Media organization** helps everyone find resources
7. **Security is everyone's** responsibility

### Next Steps
1. Log in and explore your dashboard
2. Review existing posts and pages
3. Familiarize yourself with our categories and tags
4. Practice creating a draft post (don't publish yet!)
5. Review other documentation sections for EventPrime and Elementor Pro
6. Learn about [Elementor Pro Templates](/docs/page-builder-forms/elementor-integration#elementor-pro-templates-system) for advanced page design

### Need Help?
- **Technical Issues**: Contact your administrator
- **Content Questions**: Reach out to the content team lead
- **Volunteer Coordination**: Contact the volunteer coordinator
- **General WordPress**: Consult this guide or official documentation

---

*This tutorial is part of the KCN Seniors WordPress Documentation. For advanced topics like Elementor Pro, EventPrime, or volunteer management systems, please refer to their specific documentation sections.*
