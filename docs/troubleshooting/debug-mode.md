---
title: "Debug Mode Activation"
description: "How to activate and use WordPress debug mode for troubleshooting and development"
sectionId: "troubleshooting"
slug: "debug-mode"
tags: ["debug mode", "wordpress", "troubleshooting", "development", "error logging", "debugging", "wp-config"]
difficulty: "intermediate"
estimatedTime: "15 minutes"
lastUpdated: "2025-01-15"
order: 3
---

# Debug Mode Activation

## Understanding WordPress Debug Mode

WordPress debug mode is a powerful tool for developers and administrators to identify and resolve issues on the KCN Seniors website. When activated, it provides detailed error information, logs errors to files, and displays debugging information.

## ⚠️ **Important Security Considerations**

### **Production Site Warnings**

**Never Enable Debug Display on Production:**
- Debug information can expose sensitive data
- Error details may reveal system information
- Security vulnerabilities could be exposed
- User experience may be affected

**Safe Debug Mode for Production:**
```php
// Safe for production - logs errors but doesn't display them
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

### **Development Environment**

**Safe for Development:**
- Local development sites
- Staging environments
- Testing environments
- Development servers

## 🔧 **Activating Debug Mode**

### **Method 1: wp-config.php (Recommended)**

**Step-by-Step Process:**
1. **Access wp-config.php**:
   - Use FTP/cPanel File Manager
   - Navigate to website root directory
   - Open `wp-config.php` file

2. **Add Debug Constants**:
   ```php
   // Add these lines before "That's all, stop editing!"
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   define('WP_DEBUG_DISPLAY', false);
   define('SAVEQUERIES', true);
   ```

3. **Save and Test**:
   - Save the file
   - Refresh website
   - Check for debug.log creation

**Complete Debug Configuration**:
```php
// WordPress Debug Settings
define('WP_DEBUG', true);                    // Enable debug mode
define('WP_DEBUG_LOG', true);                // Log errors to file
define('WP_DEBUG_DISPLAY', false);           // Don't show errors on screen
define('SAVEQUERIES', true);                 // Save database queries
define('SCRIPT_DEBUG', true);                // Use unminified scripts
define('WP_DEBUG_BAR', false);              // Disable debug bar (optional)

// Memory and Performance Settings
define('WP_MEMORY_LIMIT', '256M');          // Increase memory limit
define('WP_MAX_MEMORY_LIMIT', '512M');      // Maximum memory limit
define('MAX_EXECUTION_TIME', 300);          // Increase execution time

// That's all, stop editing! Happy publishing.
```

### **Method 2: .htaccess (Alternative)**

**Add to .htaccess**:
```apache
# Enable WordPress Debug Mode
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule .* - [E=WP_DEBUG:true]
    RewriteRule .* - [E=WP_DEBUG_LOG:true]
    RewriteRule .* - [E=WP_DEBUG_DISPLAY:false]
</IfModule>
```

**Note**: This method is less reliable and not recommended for production use.

### **Method 3: wp-config-local.php (Advanced)**

**Create wp-config-local.php**:
```php
<?php
// Local development settings
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
define('SAVEQUERIES', true);
define('SCRIPT_DEBUG', true);
?>
```

**Include in wp-config.php**:
```php
// Include local configuration
if (file_exists(dirname(__FILE__) . '/wp-config-local.php')) {
    include_once(dirname(__FILE__) . '/wp-config-local.php');
}
```

## 📊 **Debug Mode Constants Explained**

### **Core Debug Constants**

**WP_DEBUG**:
- **Purpose**: Master switch for debug mode
- **Values**: `true` or `false`
- **Effect**: Enables/disables all debug functionality

**WP_DEBUG_LOG**:
- **Purpose**: Log errors to debug.log file
- **Values**: `true` or `false`
- **Effect**: Creates `wp-content/debug.log` file

**WP_DEBUG_DISPLAY**:
- **Purpose**: Show errors on screen
- **Values**: `true` or `false`
- **Effect**: Displays errors to visitors (security risk)

**SAVEQUERIES**:
- **Purpose**: Save database queries for analysis
- **Values**: `true` or `false`
- **Effect**: Stores queries in global variable

### **Additional Debug Constants**

**SCRIPT_DEBUG**:
- **Purpose**: Use unminified scripts and styles
- **Values**: `true` or `false`
- **Effect**: Loads development versions of files

**WP_DEBUG_BAR**:
- **Purpose**: Show debug bar in admin
- **Values**: `true` or `false`
- **Effect**: Displays debugging toolbar

**WP_DEBUG_DISPLAY**:
- **Purpose**: Control error display
- **Values**: `true` or `false`
- **Effect**: Shows/hides errors on screen

## 📁 **Debug Log File Management**

### **Debug Log Location**

**Default Location**: `wp-content/debug.log`
**File Permissions**: 644 (readable by web server)
**File Size**: Can grow large over time

### **Custom Log Location**

**Set Custom Log Path**:
```php
// Add to wp-config.php
define('WP_DEBUG_LOG', '/path/to/custom/debug.log');
```

**Example Custom Paths**:
```php
// Log to uploads directory
define('WP_DEBUG_LOG', WP_CONTENT_DIR . '/uploads/debug.log');

// Log to custom directory
define('WP_DEBUG_LOG', '/var/log/wordpress/debug.log');

// Log to user's home directory
define('WP_DEBUG_LOG', $_SERVER['HOME'] . '/wordpress-debug.log');
```

### **Log File Maintenance**

**Manual Log Rotation**:
```bash
# Rename current log
mv wp-content/debug.log wp-content/debug.log.old

# Create new log file
touch wp-content/debug.log

# Set permissions
chmod 644 wp-content/debug.log
```

**Automated Log Rotation**:
```php
// Add to functions.php
add_action('wp_scheduled_delete', 'rotate_debug_logs');

function rotate_debug_logs() {
    $log_file = WP_CONTENT_DIR . '/debug.log';
    $old_log = WP_CONTENT_DIR . '/debug.log.old';
    
    if (file_exists($log_file) && filesize($log_file) > 5 * 1024 * 1024) { // 5MB
        if (file_exists($old_log)) {
            unlink($old_log);
        }
        rename($log_file, $old_log);
        touch($log_file);
        chmod($log_file, 0644);
    }
}
```

## 🔍 **Using Debug Mode Effectively**

### **Error Logging Best Practices**

**1. Monitor Log File Size**:
- Check log file size regularly
- Rotate logs when they exceed 5MB
- Archive old logs for analysis

**2. Review Logs Regularly**:
- Check for new errors daily
- Monitor error patterns
- Document recurring issues

**3. Use Appropriate Log Levels**:
- Enable only necessary debug features
- Disable display on production
- Use custom log paths when needed

### **Debug Information Access**

**Access Debug Log**:
```bash
# View log in real-time
tail -f wp-content/debug.log

# Search for specific errors
grep "Fatal error" wp-content/debug.log

# Count error types
grep -c "Warning" wp-content/debug.log
```

**WordPress Admin Access**:
- Go to Tools → Site Health
- Check for errors and warnings
- Review performance recommendations

## 🚨 **Troubleshooting Debug Mode**

### **Common Debug Mode Issues**

**1. Debug Log Not Created**:
**Symptoms**: No debug.log file appears
**Causes**: File permissions, directory access, constant conflicts

**Solutions**:
```php
// Check file permissions
chmod 755 wp-content/
chmod 644 wp-content/debug.log

// Verify constants are correct
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

**2. Errors Not Logging**:
**Symptoms**: Errors appear on screen but not in log
**Causes**: WP_DEBUG_LOG disabled, file permissions, path issues

**Solutions**:
```php
// Ensure logging is enabled
define('WP_DEBUG_LOG', true);

// Check log file path
define('WP_DEBUG_LOG', WP_CONTENT_DIR . '/debug.log');

// Verify file permissions
chmod 644 wp-content/debug.log
```

**3. Debug Mode Not Working**:
**Symptoms**: No debug information displayed
**Causes**: Constants not added, file not saved, syntax errors

**Solutions**:
```php
// Verify constants are in correct location
// Must be before "That's all, stop editing!"

// Check for syntax errors
// Ensure no PHP errors in wp-config.php

// Test with simple configuration
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

### **Debug Mode Testing**

**Test Configuration**:
```php
// Add to wp-config.php for testing
if (defined('WP_DEBUG') && WP_DEBUG) {
    error_log('Debug mode is active - ' . date('Y-m-d H:i:s'));
}
```

**Verify Debug Log**:
```bash
# Check if log file exists
ls -la wp-content/debug.log

# Check file permissions
stat wp-content/debug.log

# Test writing to log
echo "Test entry" >> wp-content/debug.log
```

## 🛡️ **Security Best Practices**

### **Production Site Security**

**Never Enable on Production**:
```php
// ❌ DANGEROUS for production
define('WP_DEBUG', true);
define('WP_DEBUG_DISPLAY', true);  // Shows errors to visitors
```

**Safe Production Configuration**:
```php
// ✅ Safe for production
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);
```

### **Development Environment Security**

**Safe Development Setup**:
```php
// ✅ Safe for development
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);  // Don't show errors
define('SAVEQUERIES', true);
```

**Environment Detection**:
```php
// Detect environment automatically
if ($_SERVER['HTTP_HOST'] === 'localhost' || 
    strpos($_SERVER['HTTP_HOST'], 'dev.') === 0 ||
    strpos($_SERVER['HTTP_HOST'], 'staging.') === 0) {
    
    // Development/Staging environment
    define('WP_DEBUG', true);
    define('WP_DEBUG_LOG', true);
    define('WP_DEBUG_DISPLAY', false);
} else {
    // Production environment
    define('WP_DEBUG', false);
    define('WP_DEBUG_LOG', false);
    define('WP_DEBUG_DISPLAY', false);
}
```

## 📊 **Debug Mode Monitoring**

### **Log Analysis Tools**

**Simple Log Parser**:
```php
<?php
// Basic log analysis script
function analyze_debug_log($log_file) {
    if (!file_exists($log_file)) {
        return "Debug log file not found";
    }
    
    $content = file_get_contents($log_file);
    $lines = explode("\n", $content);
    
    $stats = array(
        'total_lines' => count($lines),
        'fatal_errors' => 0,
        'warnings' => 0,
        'notices' => 0,
        'parse_errors' => 0
    );
    
    foreach ($lines as $line) {
        if (strpos($line, 'Fatal error') !== false) $stats['fatal_errors']++;
        if (strpos($line, 'Warning') !== false) $stats['warnings']++;
        if (strpos($line, 'Notice') !== false) $stats['notices']++;
        if (strpos($line, 'Parse error') !== false) $stats['parse_errors']++;
    }
    
    return $stats;
}

// Usage
$log_file = WP_CONTENT_DIR . '/debug.log';
$analysis = analyze_debug_log($log_file);
print_r($analysis);
?>
```

**Advanced Log Monitor**:
```php
<?php
// Advanced log monitoring
class DebugLogMonitor {
    private $log_file;
    private $last_check;
    
    public function __construct($log_file) {
        $this->log_file = $log_file;
        $this->last_check = filemtime($log_file);
    }
    
    public function checkForNewErrors() {
        $current_time = filemtime($this->log_file);
        
        if ($current_time > $this->last_check) {
            $new_content = file_get_contents($this->log_file);
            $lines = explode("\n", $new_content);
            
            $new_errors = array();
            foreach ($lines as $line) {
                if (strpos($line, 'Fatal error') !== false ||
                    strpos($line, 'Warning') !== false) {
                    $new_errors[] = $line;
                }
            }
            
            $this->last_check = $current_time;
            return $new_errors;
        }
        
        return array();
    }
}

// Usage
$monitor = new DebugLogMonitor(WP_CONTENT_DIR . '/debug.log');
$new_errors = $monitor->checkForNewErrors();

if (!empty($new_errors)) {
    error_log('New errors detected: ' . implode(', ', $new_errors));
}
?>
```

## 🔗 **Related Documentation**

- [Error Log Analysis](/docs/troubleshooting/error-logs)
- [Common Issues & Solutions](/docs/troubleshooting/common-issues)
- [Plugin Conflict Resolution](/docs/troubleshooting/plugin-conflicts)
- [Database Repair](/docs/troubleshooting/database-repair)
- [Emergency Recovery](/docs/troubleshooting/emergency-recovery)

---

## 🎥 **Related Video Tutorials**

- **Debug Mode Tutorial**: Learn to activate and use debug mode
- **Error Log Analysis**: Understand error logging
- **Troubleshooting Basics**: Master debugging techniques

---

*Debug mode is an essential tool for maintaining the KCN Seniors website. When used correctly, it provides valuable information for identifying and resolving issues while maintaining security.*
