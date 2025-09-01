---
title: "Facebook Integration System"
description: "Dual Facebook integration system using Smash Balloon Facebook Feed and Cardoza Facebook Like Box for homepage"
sectionId: "content-management"
slug: "facebook-feed-integration"
tags: ["facebook", "social media", "smash balloon", "feed", "homepage", "content display", "kcn seniors"]
difficulty: "intermediate"
estimatedTime: "20 minutes"
lastUpdated: "2025-01-15"
order: 3
---

# Facebook Integration System

## Overview

The website uses **two separate Facebook integrations** to provide comprehensive social media presence:

1. **Smash Balloon Facebook Feed**: Displays Facebook posts in a professional 3x3 grid format
2. **Cardoza Facebook Like Box**: Small Facebook widget under the hero section for page engagement

### Implementation Summary:
- **Primary Feed**: Smash Balloon Facebook Feed
  - **Display Format**: 3x3 Grid layout with cover images
  - **Location**: Main homepage widget area displaying current Facebook posts
  - **Integration**: WordPress widget system with extensive customization options

- **Secondary Widget**: Cardoza Facebook Like Box
  - **Display Format**: Compact like box widget
  - **Location**: Under hero section on homepage
  - **Integration**: Shortcode implementation for page engagement

## About Smash Balloon Facebook Feed

### Plugin Overview:
Smash Balloon Facebook Feed is a WordPress plugin that displays Facebook content on your website. It's designed to be easy to set up, performance-focused, and reliable with excellent customer support.

### Key Features for KCN:
- **Easy Setup**: Login to Facebook account and plugin handles the rest
- **Performance Focused**: Intelligent caching and optimized loading
- **Always Reliable**: Robust backup systems and smart issue reporting
- **Customer Support**: WordPress experts available for assistance

### Pro Version Benefits:
- **Photos & Videos**: Display full-size images and HD videos
- **Multiple Layouts**: List, Grid, Masonry, Carousel/Slider options
- **Responsive Design**: Optimized for all devices
- **Custom Columns**: Adjustable grid layouts (perfect for KCN's 3x3 setup)
- **Background Caching**: Performance optimization
- **GDPR Compliance**: Privacy-focused features

## Cardoza Facebook Like Box Widget

### Overview:
The **Cardoza Facebook Like Box** is a separate Facebook integration that provides a compact engagement widget positioned under the hero section on the homepage. This widget encourages visitors to like and follow the Facebook page.

### Implementation Details:
- **Plugin**: Cardoza Facebook Like Box (separate from Smash Balloon)
- **Location**: Under hero section on homepage
- **Purpose**: Page engagement and social media following
- **Integration**: Shortcode implementation

### Current Configuration:
```
Shortcode: [cardoza_facebook_like_box width="900" height="500"]
Location: Under hero section, skewed to the right side
Dimensions: 900px width, 500px height
Function: Facebook page like box and engagement
```

### Widget Features:
- **Page Like Button**: Direct integration with Facebook page
- **Follower Count**: Shows current page followers
- **Recent Posts Preview**: Displays recent Facebook activity
- **Responsive Design**: Adapts to different screen sizes
- **Custom Dimensions**: Configurable width and height

### Management:
- **Shortcode Control**: Easy to modify dimensions and settings
- **Position Control**: Placed strategically under hero section
- **Performance**: Lightweight implementation
- **Compatibility**: Works alongside Smash Balloon Facebook Feed

## KCN Implementation Details

### Dual Facebook Integration Setup:

#### 1. Smash Balloon Facebook Feed (Primary):
```
Feed Type: Timeline Posts
Layout: Masonry (Grid)
Columns: 3 (Desktop), 2 (Tablet), 1 (Mobile)
Number of Posts: 9 (3x3 grid)
Post Types: All (photos, videos, text, links)
Cover Images: Enabled
Location: Main homepage widget area
```

#### 2. Cardoza Facebook Like Box (Secondary):
```
Shortcode: [cardoza_facebook_like_box width="900" height="500"]
Location: Under hero section on homepage, skewed to the right side
Purpose: Page engagement and following
Dimensions: 900px width, 500px height
```

### Customization Options Used:
- **Responsive Design**: Adapts to screen size
- **Cover Images**: Facebook page cover image display
- **Post Filtering**: Show only relevant community posts
- **Color Matching**: Inherit Hello Biz theme colors
- **Performance**: Cached loading for fast display

### Managing Both Facebook Integrations:

#### Smash Balloon Facebook Feed:
- **Dashboard Access**: WordPress Admin → Facebook Feed → All Feeds
- **Configuration**: Feed settings, customization, and display options
- **Widget Management**: Appearance → Widgets → Custom Facebook Feed widget

#### Cardoza Facebook Like Box:
- **Shortcode Management**: Edit shortcode parameters directly in page content
- **Position Control**: Place shortcode in desired location under hero section
- **Dimension Control**: Modify width and height parameters as needed

## Dashboard Management

### Access Location:
**Path**: `WordPress Admin → Facebook Feed → All Feeds`

### Main Configuration Sections:

#### 1. **Feed Settings**:
- **General**: Basic feed configuration
- **Sources**: Facebook page connections
- **Display**: Post types and content options
- **Filters**: Include/exclude rules

#### 2. **Customize Tab**:
- **Feed Layout**: Grid, list, masonry options
- **Posts**: Individual post styling
- **Colors**: Color scheme customization
- **Typography**: Font and text styling

#### 3. **Settings Tab**:
- **License**: Pro license activation
- **Advanced**: Performance and debugging options
- **Troubleshooting**: Error diagnosis tools

## WordPress Integration Methods

### Widget Implementation (KCN's Method):
1. **Navigate to**: Appearance → Widgets
2. **Add Widget**: Drag "Custom Facebook Feed" widget to homepage area
3. **Configure**: Select feed, customize display options
4. **Save**: Widget appears on homepage

### Alternative Integration Methods:

#### Shortcode Implementation:

**Smash Balloon Facebook Feed:**
```php
// Basic shortcode for KCN's 3x3 grid
[custom-facebook-feed 
    id="KCNSeniors" 
    num="9" 
    cols="3" 
    layout="masonry"
    showheader="true"
    width="100%"
    height="500px"
    bgcolor="#f8f9fa"
    cache="6"
]
```

**Cardoza Facebook Like Box:**
```php
// KCN's Facebook like box widget under hero section
[cardoza_facebook_like_box width="900" height="500"]
```

#### Gutenberg Block:
- Search for "Custom Facebook Feed" in block editor
- Select feed from dropdown
- Customize display options in block settings
- Real-time preview in editor

#### Elementor Integration:
- **Widget**: Dedicated Elementor widget available
- **Process**: Add widget → Select feed → Configure styling
- **Benefits**: Visual editing with live preview
- **Compatibility**: Full Elementor and Hello Biz theme integration

## Visual Customization

### Live Preview System:
- **Real-time Changes**: See modifications instantly
- **Device Preview**: Desktop, tablet, mobile views
- **Color Picker**: Visual color selection
- **Layout Options**: Drag-and-drop customization

### Customization Categories:

#### Feed Layout:
- Column numbers per device
- Spacing between posts
- Overall feed width
- Mobile optimization

#### Post Styling:
- Background colors
- Border styles and colors
- Shadow effects
- Hover animations

#### Typography:
- Font families
- Font sizes
- Font weights
- Text colors
- Line spacing

#### Media Display:
- Image sizes
- Video player options
- Thumbnail generation
- Lightbox settings

## Content Management

### Post Types Displayed:
- **Photos**: Facebook images and albums
- **Videos**: Facebook video content
- **Text Posts**: Status updates and announcements
- **Links**: Shared articles and resources
- **Events**: Facebook events (if applicable)

### Content Filtering Options:
```
Filter Options:
- Include posts containing specific words/hashtags
- Exclude posts containing specific words/hashtags  
- Show only certain post types (photos, videos, events)
- Filter by post author
- Date-based filtering
```

### Performance Optimization:
- **Intelligent Caching**: Minimizes Facebook API requests
- **Background Updates**: Scheduled refresh without page load impact
- **Image Optimization**: Automatic image resizing and compression
- **Lazy Loading**: Load content as needed for better performance

## Technical Implementation

### WordPress Integration Points:

#### Hook System:
```php
// Available hooks for customization
add_filter('cff_feed_settings', 'custom_feed_settings');
add_action('cff_before_feed', 'custom_before_feed');
add_action('cff_after_feed', 'custom_after_feed');
```

#### Database Storage:
- Feed configurations stored in WordPress options table
- Cached Facebook data stored temporarily
- User settings preserved during plugin updates

#### API Management:
- Facebook Graph API integration
- Automatic token refresh handling
- Error reporting and recovery
- Rate limiting compliance

### Performance Features:

#### Caching System:
- **Post Caching**: Facebook posts cached locally
- **Image Caching**: Profile and post images cached
- **Background Updates**: Scheduled refresh via WP Cron
- **Smart Loading**: Only load visible content initially

#### Optimization Features:
- **Image Resizing**: Automatic thumbnail generation
- **Lazy Loading**: Progressive content loading
- **Minified Assets**: Compressed CSS and JavaScript
- **CDN Support**: Compatible with content delivery networks

## Integration with KCN Technology Stack

### WordPress Core Integration:
- **Theme Compatibility**: Works seamlessly with Hello Biz theme
- **Widget System**: Integrates with WordPress widget areas
- **User Roles**: Respects Members plugin role restrictions
- **Performance**: Compatible with caching plugins

### Plugin Compatibility:

#### Members Plugin:
- Feed content visible based on role permissions
- No conflicts with user role management
- Compatible with content protection features

#### ACF Integration:
- Can use ACF fields for advanced customizations
- Compatible with custom post type displays
- Works with advanced field group configurations

#### WP Mail SMTP:
- No conflicts with email notification system
- Compatible with Facebook notification features
- Works alongside automated email systems

#### EventPrime:
- Can display Facebook events alongside EventPrime events
- No conflicts with event management system
- Complementary social proof for events

### Hello Biz Theme Integration:

#### Styling Inheritance:
- Automatically adopts Hello Biz color scheme
- Inherits typography from theme
- Responsive design matches theme breakpoints
- Compatible with Hello+ widgets

#### Elementor Integration:
- Native Elementor widget available
- Works with Elementor page builder
- Compatible with Hello Biz + Elementor combination
- Visual editing capabilities

## Troubleshooting & Maintenance

### Common Issues & Solutions:

#### Feed Not Displaying:
1. **Check License**: Ensure Pro license is activated
2. **Verify Connection**: Confirm Facebook page is connected
3. **Clear Cache**: Force refresh of cached content
4. **Check Permissions**: Verify WordPress user permissions

#### Images Not Loading:
1. **Browser Extensions**: Disable ad blockers temporarily
2. **Facebook Restrictions**: Check page privacy settings
3. **Server Issues**: Verify hosting provider allows external requests
4. **Cache Clear**: Clear both plugin and site cache

#### Layout Issues:
1. **Theme Conflicts**: Test with default WordPress theme
2. **CSS Conflicts**: Check for competing stylesheets
3. **JavaScript Errors**: Review browser console for errors
4. **Plugin Conflicts**: Disable other plugins temporarily

### KCN-Specific Troubleshooting:

#### Hello Biz Theme Integration:
- Ensure widget area styling compatible
- Check Elementor integration if applicable
- Verify responsive breakpoints match theme
- Test with Hello Biz color scheme changes

#### Role-Based Access:
- Confirm feed visible to all user roles (Public, Subscriber, Member, etc.)
- Test display for non-logged-in visitors
- Verify content filtering works with Members plugin

#### Cardoza Facebook Like Box Issues:
- **Widget Not Displaying**: Check if shortcode is properly placed in page content
- **Dimensions Not Working**: Verify width and height parameters are correct
- **Responsive Issues**: Test on mobile devices for proper scaling
- **Plugin Conflicts**: Ensure Cardoza plugin is activated and compatible

### Maintenance Best Practices:

#### Regular Tasks:
- **Monitor Feed Performance**: Check loading times monthly
- **Review Facebook Connection**: Ensure API access remains valid
- **Update Plugins**: Keep both Smash Balloon Pro and Cardoza plugins updated
- **Test Responsive Display**: Verify mobile functionality for both widgets
- **Check Shortcode Functionality**: Ensure Cardoza shortcode is working properly

#### Performance Monitoring:
- **Site Health Integration**: WordPress site health checks
- **Error Notifications**: Email alerts for feed issues
- **Admin Dashboard Notices**: Real-time error reporting
- **Feed Analytics**: Track visitor engagement with posts

## Advanced Features & Extensions

### Pro Extensions Available:

#### Multifeed Extension:
- Combine multiple Facebook pages in single feed
- Perfect for organizations with multiple pages
- Advanced filtering and sorting options

#### Reviews Extension:
- Display Facebook page reviews and recommendations
- Social proof for business credibility
- Customer testimonial showcase

#### Album Extension:
- Dedicated Facebook photo album displays
- Gallery-style layouts
- Individual album filtering

#### Featured Post Extension:
- Highlight specific Facebook posts
- Hero-style post displays
- Call-to-action integration

### Social Wall Integration:
- Combine Facebook with other social platforms
- Instagram, Twitter, YouTube, TikTok compatibility
- Unified social media display

### Feed Analytics:
- Detailed engagement statistics
- Visitor interaction tracking
- Performance optimization insights
- ROI measurement tools

## Best Practices for KCN Implementation

### Content Strategy:
- **Regular Updates**: Post consistently to Facebook for fresh feed content
- **Community Focus**: Share content relevant to seniors and local community
- **Visual Appeal**: Use high-quality images for better feed appearance
- **Engagement**: Encourage Facebook engagement to improve feed dynamics

### Technical Optimization:
- **Performance Monitoring**: Regular checks on feed loading times
- **Mobile Testing**: Ensure feed works well on all devices used by seniors
- **Accessibility**: Consider readability and accessibility for older users
- **Backup Strategy**: Regular backups of feed configurations

### User Experience:
- **Clear Navigation**: Make Facebook feed purpose clear to website visitors
- **Consistent Branding**: Align feed appearance with KCN visual identity
- **Loading Performance**: Optimize for users with slower internet connections
- **Error Handling**: Graceful degradation when Facebook content unavailable

## Future Considerations & Upgrades

### Potential Enhancements for KCN:

#### Advanced Analytics:
- Track which Facebook posts get most engagement
- Monitor feed performance impact on website traffic
- A/B test different layout configurations

#### Additional Feed Types:
- Facebook Events feed for community calendar
- Facebook Reviews display for testimonials
- Facebook Albums for photo galleries

#### Enhanced Customization:
- Custom CSS for deeper branding alignment
- Advanced filtering for community-specific content
- Integration with volunteer management system

### Maintenance Schedule:

#### Monthly:
- Review feed performance and loading times
- Check for Facebook API changes
- Monitor user engagement with feed

#### Quarterly:
- Evaluate new plugin features and updates
- Review feed content relevance
- Optimize for any website changes

#### Annually:
- Renew Pro license
- Assess need for additional extensions
- Review integration with other KCN systems

## Official Documentation & Resources

### Smash Balloon Official Resources:
- **Main Website**: https://smashballoon.com/
- **Facebook Feed**: https://smashballoon.com/custom-facebook-feed/
- **Documentation Hub**: https://smashballoon.com/doc/
- **Support Portal**: https://smashballoon.com/support/

### Specific Documentation Links:
- **Getting Started Guide**: https://smashballoon.com/doc/setting-up-the-free-custom-facebook-feed-wordpress-plugin/
- **Customization Guide**: https://smashballoon.com/doc/customize-facebook-feed/
- **Shortcode Reference**: https://smashballoon.com/doc/custom-facebook-feed-wordpress-plugin-shortcode-reference/
- **Troubleshooting**: https://smashballoon.com/doc/custom-facebook-feed-troubleshooting/

### WordPress Integration:
- **Gutenberg Integration**: https://smashballoon.com/doc/wordpress-5-block-page-editor-gutenberg/
- **Elementor Guide**: https://smashballoon.com/facebook-feed-elementor/
- **Widget Configuration**: WordPress Admin → Appearance → Widgets

### Technical References:
- **Masonry Layout Guide**: https://smashballoon.com/doc/creating-a-masonry-grid-layout-from-your-facebook-posts/
- **Multi-Column Setup**: https://smashballoon.com/doc/can-display-facebook-post-horizontally-multiple-columns/
- **Shortcode Options**: https://smashballoon.com/doc/using-shortcode-options-customize-facebook-feeds/

### Support Channels:
- **Email Support**: Available for Pro license holders
- **WordPress.org Forum**: https://wordpress.org/support/plugin/custom-facebook-feed/
- **Knowledge Base**: Comprehensive FAQ and troubleshooting guides
- **Video Tutorials**: Step-by-step setup and customization guides

## Integration with Documentation

### Related Documentation Sections:
- **[Content Management Overview](/docs/content-management/media-library-management)**: Managing website content and media
- **[Hello Biz Theme Integration](/docs/custom-development/hello-biz-theme-integration)**: Theme customization and widget areas
- **[Elementor Integration](/docs/page-builder-forms/elementor-integration)**: Page builder integration options
- **[Media Library Management](/docs/content-management/media-library-management)**: Managing images and media content

### Cross-References:
- **Homepage Management**: See [Custom Page Design](/docs/page-builder-forms/custom-page-design)
- **Widget Areas**: See [Hello Biz Theme Integration](/docs/custom-development/hello-biz-theme-integration)
- **Content Strategy**: See [Blog Management Overview](/docs/blog-management/blog-system-overview)
- **Performance**: See [Maintenance & Support Overview](/docs/maintenance-support/overview)

---

*This documentation covers Facebook Feed integration for the website. For technical implementation details, see the Custom Development section.*
