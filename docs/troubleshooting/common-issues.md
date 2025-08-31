---
title: "Common Issues & Solutions"
description: "Solutions to common WordPress and plugin issues on the KCN Seniors website"
sectionId: "troubleshooting"
slug: "common-issues"
tags: ["troubleshooting", "common issues", "solutions", "wordpress", "plugins", "errors", "fixes"]
difficulty: "beginner"
estimatedTime: "15 minutes"
lastUpdated: "2025-01-15"
order: 1
---

# Common Issues & Solutions

## Troubleshooting Common Problems

This guide provides solutions to the most common issues you may encounter while using the KCN Seniors website. Each issue includes step-by-step troubleshooting steps and solutions.

## 🚨 **Critical System Issues**

### **Website Won't Load (White Screen)**

**Symptoms:**
- White screen when accessing website
- No error messages displayed
- Browser shows blank page

**Common Causes:**
- PHP memory limit exceeded
- Plugin conflicts
- Theme compatibility issues
- Database connection problems

**Troubleshooting Steps:**
1. **Check PHP Memory Limit**:
   - Access website via FTP/cPanel
   - Check `wp-config.php` for memory limit
   - Increase memory limit if needed

2. **Enable Debug Mode**:
   ```php
   // Add to wp-config.php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   define('WP_DEBUG_DISPLAY', false);
   ```

3. **Check Error Logs**:
   - Review `wp-content/debug.log`
   - Check server error logs
   - Look for PHP fatal errors

4. **Disable Plugins**:
   - Rename `wp-content/plugins` folder
   - Test website access
   - Re-enable plugins one by one

**Quick Fix:**
```php
// Add to wp-config.php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');
```

### **Database Connection Errors**

**Symptoms:**
- "Error establishing a database connection" message
- Website completely inaccessible
- Admin panel won't load

**Common Causes:**
- Database server down
- Incorrect database credentials
- Database corruption
- Hosting provider issues

**Troubleshooting Steps:**
1. **Verify Database Credentials**:
   - Check `wp-config.php` database settings
   - Verify database name, username, and password
   - Confirm database host and port

2. **Test Database Connection**:
   - Use phpMyAdmin or similar tool
   - Test connection with database credentials
   - Check database server status

3. **Check Hosting Status**:
   - Contact hosting provider
   - Verify database service status
   - Check for maintenance notifications

**Quick Fix:**
```php
// Verify these settings in wp-config.php
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_username');
define('DB_PASSWORD', 'your_database_password');
define('DB_HOST', 'localhost');
```

## 🔐 **User Access Issues**

### **Can't Log In to WordPress Admin**

**Symptoms:**
- Login page loads but credentials don't work
- "Invalid username or password" error
- Account locked out

**Common Causes:**
- Incorrect username/password
- Account locked due to failed attempts
- User role permissions changed
- Database corruption

**Troubleshooting Steps:**
1. **Reset Password**:
   - Use WordPress password reset function
   - Check email for reset link
   - Create new strong password

2. **Check User Role**:
   - Verify user has appropriate permissions
   - Check if role was accidentally changed
   - Ensure user account is active

3. **Database Reset**:
   - Use phpMyAdmin to reset password hash
   - Update user meta table directly
   - Clear user session data

**Quick Fix (Database Method):**
```sql
-- Reset admin password to 'admin123' (change immediately after login)
UPDATE wp_users SET user_pass = MD5('admin123') WHERE user_login = 'admin';
```

### **Role-Based Access Not Working**

**Symptoms:**
- Users can see content they shouldn't
- Content protection not working
- Role permissions not applying

**Common Causes:**
- Members Plugin configuration issues
- CSS protection not loading
- User role assignments incorrect
- Plugin conflicts

**Troubleshooting Steps:**
1. **Check User Roles**:
   - Verify user role assignments
   - Check role hierarchy settings
   - Ensure roles are properly configured

2. **Test CSS Protection**:
   - Check browser developer tools
   - Verify CSS rules are loading
   - Test with different user roles

3. **Plugin Configuration**:
   - Review Members Plugin settings
   - Check content protection rules
   - Verify plugin integration

**Quick Fix:**
```php
// Add to functions.php to debug user roles
add_action('wp_footer', function() {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        echo '<!-- Current user roles: ' . implode(', ', $user->roles) . ' -->';
    }
});
```

## 📝 **Content Management Issues**

### **Can't Create or Edit Content**

**Symptoms:**
- Edit buttons missing
- Save changes not working
- Permission denied errors

**Common Causes:**
- Insufficient user permissions
- Plugin conflicts
- Theme compatibility issues
- Database permission problems

**Troubleshooting Steps:**
1. **Check User Capabilities**:
   - Verify user has appropriate permissions
   - Check role-based capabilities
   - Ensure user can edit content

2. **Test with Different Content**:
   - Try creating simple text post
   - Test with different post types
   - Check if issue is content-specific

3. **Plugin Conflict Testing**:
   - Disable plugins one by one
   - Test content creation after each
   - Identify conflicting plugin

**Quick Fix:**
```php
// Add to functions.php to debug user capabilities
add_action('wp_footer', function() {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        echo '<!-- User can edit posts: ' . (current_user_can('edit_posts') ? 'Yes' : 'No') . ' -->';
    }
});
```

### **Media Upload Problems**

**Symptoms:**
- Can't upload images or files
- Upload fails with errors
- Media library not accessible

**Common Causes:**
- File permission issues
- PHP upload limits
- Server storage limits
- Plugin conflicts

**Troubleshooting Steps:**
1. **Check File Permissions**:
   - Verify `wp-content/uploads` permissions (755)
   - Check file ownership
   - Ensure write permissions

2. **PHP Upload Limits**:
   - Check `upload_max_filesize` in php.ini
   - Verify `post_max_size` settings
   - Increase limits if needed

3. **Server Storage**:
   - Check available disk space
   - Verify hosting plan limits
   - Contact hosting provider

**Quick Fix:**
```php
// Add to wp-config.php to increase upload limits
define('WP_MEMORY_LIMIT', '256M');
define('MAX_EXECUTION_TIME', 300);
```

## 🎯 **Event Management Issues**

### **EventPrime Events Not Displaying**

**Symptoms:**
- Events not showing on pages
- Event shortcodes not working
- Event display errors

**Common Causes:**
- Plugin not activated
- Shortcode syntax errors
- Theme compatibility issues
- Database problems

**Troubleshooting Steps:**
1. **Plugin Status**:
   - Verify EventPrime is activated
   - Check plugin version compatibility
   - Ensure all required plugins active

2. **Shortcode Testing**:
   - Test basic shortcode: `[eventprime_events]`
   - Check shortcode parameters
   - Verify shortcode placement

3. **Theme Compatibility**:
   - Test with default theme
   - Check theme integration
   - Verify responsive design

**Quick Fix:**
```php
// Add to functions.php to debug EventPrime
add_action('wp_footer', function() {
    if (function_exists('ep_get_events')) {
        $events = ep_get_events();
        echo '<!-- EventPrime events found: ' . count($events) . ' -->';
    }
});
```

### **Venue Protection Not Working**

**Symptoms:**
- Venue information visible to non-members
- Role-based protection failing
- CSS protection not applied

**Common Causes:**
- CSS injection system failure
- User role detection issues
- Plugin integration problems
- Cache conflicts

**Troubleshooting Steps:**
1. **Check User Roles**:
   - Verify current user role
   - Test with different user types
   - Check role hierarchy

2. **CSS Protection Test**:
   - Inspect page source
   - Check browser developer tools
   - Verify CSS rules loading

3. **Cache Issues**:
   - Clear all caches
   - Test with cache disabled
   - Check caching plugins

**Quick Fix:**
```php
// Add to functions.php to test venue protection
add_action('wp_footer', function() {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        $can_see_venue = in_array('member', $user->roles) || 
                         in_array('volunteer', $user->roles) || 
                         in_array('administrator', $user->roles);
        echo '<!-- User can see venue: ' . ($can_see_venue ? 'Yes' : 'No') . ' -->';
    }
});
```

## 🔧 **Volunteer System Issues**

### **Volunteer Task Creation Problems**

**Symptoms:**
- Can't create volunteer tasks
- Task form not working
- Task data not saving

**Common Causes:**
- ACF fields not configured
- User permission issues
- Custom post type problems
- Database field issues

**Troubleshooting Steps:**
1. **ACF Field Check**:
   - Verify ACF plugin active
   - Check field group configuration
   - Test field display

2. **User Permissions**:
   - Confirm user has volunteer role
   - Check task creation capabilities
   - Verify role assignments

3. **Custom Post Type**:
   - Check volunteer_task post type
   - Verify post type registration
   - Test post creation

**Quick Fix:**
```php
// Add to functions.php to debug volunteer system
add_action('wp_footer', function() {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        $can_create_tasks = current_user_can('edit_posts') && 
                           in_array('volunteer', $user->roles);
        echo '<!-- User can create tasks: ' . ($can_create_tasks ? 'Yes' : 'No') . ' -->';
    }
});
```

### **ACF Fields Not Displaying**

**Symptoms:**
- Custom fields missing from forms
- Field values not saving
- ACF integration failing

**Common Causes:**
- Plugin not activated
- Field group configuration issues
- Theme compatibility problems
- JavaScript conflicts

**Troubleshooting Steps:**
1. **Plugin Status**:
   - Verify ACF plugin active
   - Check plugin version
   - Ensure license valid

2. **Field Group Check**:
   - Review field group settings
   - Check field locations
   - Verify field types

3. **Theme Compatibility**:
   - Test with default theme
   - Check theme integration
   - Verify responsive design

**Quick Fix:**
```php
// Add to functions.php to debug ACF
add_action('wp_footer', function() {
    if (function_exists('get_field')) {
        echo '<!-- ACF plugin is active -->';
    } else {
        echo '<!-- ACF plugin not found -->';
    }
});
```

## 🎨 **Theme and Design Issues**

### **Page Layout Problems**

**Symptoms:**
- Pages not displaying correctly
- Layout broken or distorted
- Responsive design issues

**Common Causes:**
- Theme compatibility issues
- CSS conflicts
- Plugin interference
- Browser compatibility

**Troubleshooting Steps:**
1. **Theme Testing**:
   - Switch to default theme
   - Test page display
   - Check theme compatibility

2. **CSS Conflicts**:
   - Check browser developer tools
   - Look for CSS errors
   - Test with CSS disabled

3. **Plugin Conflicts**:
   - Disable plugins one by one
   - Test page display
   - Identify conflicting plugin

**Quick Fix:**
```php
// Add to functions.php to debug theme issues
add_action('wp_footer', function() {
    echo '<!-- Current theme: ' . get_template() . ' -->';
    echo '<!-- Theme directory: ' . get_template_directory() . ' -->';
});
```

### **Elementor Page Builder Issues**

**Symptoms:**
- Elementor editor not loading
- Page builder errors
- Design elements broken

**Common Causes:**
- Plugin conflicts
- Memory limit issues
- Theme compatibility
- JavaScript errors

**Troubleshooting Steps:**
1. **Plugin Status**:
   - Verify Elementor active
   - Check plugin version
   - Ensure license valid

2. **Memory Limits**:
   - Increase PHP memory limit
   - Check execution time
   - Verify upload limits

3. **Conflict Testing**:
   - Disable other plugins
   - Test Elementor functionality
   - Identify conflicts

**Quick Fix:**
```php
// Add to wp-config.php for Elementor
define('WP_MEMORY_LIMIT', '512M');
define('WP_MAX_MEMORY_LIMIT', '1024M');
define('MAX_EXECUTION_TIME', 300);
```

## 📧 **Email and Notification Issues**

### **WP Mail SMTP Problems**

**Symptoms:**
- Emails not sending
- Delivery failures
- SMTP connection errors

**Common Causes:**
- SMTP configuration errors
- Server restrictions
- Plugin conflicts
- Email provider issues

**Troubleshooting Steps:**
1. **SMTP Settings**:
   - Verify SMTP credentials
   - Check port and security settings
   - Test connection

2. **Server Restrictions**:
   - Check hosting email policies
   - Verify port availability
   - Contact hosting provider

3. **Plugin Configuration**:
   - Review WP Mail SMTP settings
   - Test email delivery
   - Check error logs

**Quick Fix:**
```php
// Add to wp-config.php for email debugging
define('SMTP_DEBUG', true);
define('SMTP_DEBUG_OUTPUT', 'error_log');
```

## 🚀 **Performance Issues**

### **Slow Website Loading**

**Symptoms:**
- Pages take long to load
- Slow admin panel
- Database queries slow

**Common Causes:**
- Large database
- Unoptimized images
- Plugin conflicts
- Server resources

**Troubleshooting Steps:**
1. **Database Optimization**:
   - Clean up post revisions
   - Remove spam comments
   - Optimize database tables

2. **Image Optimization**:
   - Compress images
   - Use appropriate formats
   - Implement lazy loading

3. **Plugin Review**:
   - Remove unused plugins
   - Check plugin performance
   - Optimize plugin settings

**Quick Fix:**
```sql
-- Clean up database
DELETE FROM wp_posts WHERE post_type = 'revision';
DELETE FROM wp_comments WHERE comment_approved = 'spam';
OPTIMIZE TABLE wp_posts, wp_postmeta, wp_comments;
```

## 🔍 **Debugging Tools and Techniques**

### **WordPress Debug Mode**

**Enable Debug Mode:**
```php
// Add to wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
define('SAVEQUERIES', true);
```

**Check Debug Log:**
- Look for `wp-content/debug.log`
- Review error messages
- Check for fatal errors

### **Browser Developer Tools**

**Useful Tools:**
- **Console**: Check JavaScript errors
- **Network**: Monitor requests
- **Elements**: Inspect HTML/CSS
- **Performance**: Analyze loading

### **Database Debugging**

**Check Database:**
- Use phpMyAdmin
- Review error logs
- Check table structure
- Verify data integrity

## 📞 **When to Get Help**

### **Seek Professional Help When:**
- Critical system failures
- Data loss or corruption
- Security breaches
- Complex plugin conflicts
- Performance optimization needs

### **Contact Support:**
1. **Document the Issue**: Write down symptoms and steps
2. **Check Documentation**: Verify issue isn't covered
3. **Contact Team Support**: Start with internal help
4. **Escalate if Needed**: Contact technical support

## 🔗 **Related Documentation**

- [Troubleshooting Overview](/docs/troubleshooting/overview)
- [Error Log Analysis](/docs/troubleshooting/error-logs)
- [Debug Mode Activation](/docs/troubleshooting/debug-mode)
- [Plugin Conflict Resolution](/docs/troubleshooting/plugin-conflicts)
- [Database Repair](/docs/troubleshooting/database-repair)

---

## 🎥 **Related Video Tutorials**

- **Troubleshooting Basics**: Learn basic troubleshooting techniques
- **Common Error Solutions**: See solutions in action
- **Debug Mode Tutorial**: Understand debugging tools

---

*This troubleshooting guide covers the most common issues you may encounter. For issues not covered here, check the related documentation or contact support.*
