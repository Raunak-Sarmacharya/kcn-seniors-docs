---
title: "Members Plugin - Role Management"
description: "Complete role management with Members plugin for advanced permissions and content protection"
sectionId: "user-management"
slug: "members-plugin-guide"
tags: ["members plugin", "role management", "permissions", "content protection", "capabilities", "administration"]
difficulty: "intermediate"
estimatedTime: "30 minutes"
lastUpdated: "2025-01-15"
order: 3
---

# Members Plugin - Role Management

The Members plugin is a powerful WordPress plugin that provides advanced user role and capability management, allowing you to create custom roles, manage permissions, and protect content based on user roles.

## Why Members Plugin for KCN Seniors

| Feature | Benefit | KCN Seniors Use Case |
|---------|---------|---------------------|
| **Granular Control** | Fine-tune permissions for volunteers and members | Custom volunteer access levels |
| **Content Protection** | Restrict member-only events and content | Premium member benefits |
| **Role Flexibility** | Create custom roles as the organization evolves | Scalable role system |
| **Integration** | Works seamlessly with other WordPress plugins | EventPrime and form integrations |

## Accessing Members Plugin

**Navigation Path**: WordPress Dashboard → Members → Roles

## KCN Seniors Hierarchical Role Structure

**Important**: Each role includes ALL capabilities from lower-level roles. This hierarchical system ensures volunteers get member benefits, Administrator 2 gets volunteer tools, etc.

### Role Hierarchy Overview

**Understanding the Role Structure:**

**Level 6 - Administrator** (Highest Level)
- **Includes**: All permissions from all lower levels
- **Purpose**: Complete website control and management

**Level 5 - Administrator 2** (Limited Admin)
- **Includes**: All permissions from levels 1-4, plus limited admin capabilities
- **Purpose**: Content management and limited administration

**Level 4 - Volunteer**
- **Includes**: All permissions from levels 1-3, plus volunteer tools
- **Purpose**: Community volunteers with enhanced access

**Level 3 - Member**
- **Includes**: All permissions from levels 1-2, plus member benefits
- **Purpose**: Premium members with exclusive content access

**Level 2 - Subscriber**
- **Includes**: All permissions from level 1, plus logged-in features
- **Purpose**: Basic logged-in users with commenting abilities

**Level 1 - Public**
- **Includes**: Basic website access only
- **Purpose**: General website visitors

### Detailed Role Definitions

#### 1. Administrator (Highest Level)
- **Internal Name**: administrator
- **Access**: Complete WordPress dashboard control + ALL lower role benefits
- **Purpose**: Website owners and technical managers
- **Includes**: All permissions from Administrator 2, Volunteer, Member, and Subscriber roles

**Additional Capabilities:**
| Capability Category | Specific Capabilities | Purpose |
|-------------------|---------------------|---------|
| **System Management** | manage_options, activate_plugins, switch_themes | Complete system control |
| **User Management** | create_users, edit_users, delete_users | Full user administration |
| **Content Management** | edit_others_posts, delete_others_posts | All content control |
| **Security** | manage_network, unfiltered_html | Advanced security settings |

#### 2. Administrator 2 (Limited Admin)
- **Internal Name**: administrator (with restricted capabilities)  
- **Access**: Limited WordPress dashboard access + ALL Volunteer/Member/Subscriber benefits
- **Purpose**: Content management and limited administration
- **Includes**: All permissions from Volunteer, Member, and Subscriber roles

**Additional Capabilities:**
| Capability Category | Specific Capabilities | Purpose |
|-------------------|---------------------|---------|
| **Content Management** | edit_posts, publish_posts, delete_posts | Full content control |
| **Comment Management** | moderate_comments, edit_comment | Comment administration |
| **Media Management** | upload_files, edit_files | Media library access |
| **Limited User Management** | edit_users (own level and below) | User editing capabilities |

**Cannot Do**: Install plugins, modify core settings, create roles

#### 3. Volunteer
- **Internal Name**: volunteer
- **Access**: Specialized WordPress dashboard access + ALL Member/Subscriber benefits
- **Purpose**: Community volunteers with enhanced access
- **Includes**: All permissions from Member and Subscriber roles

**Additional Capabilities:**
| Capability Category | Specific Capabilities | Purpose |
|-------------------|---------------------|---------|
| **Volunteer Tools** | read_volunteer_content, edit_volunteer_posts | Volunteer-specific features |
| **Event Management** | edit_events, publish_events | Event coordination |
| **Member Interaction** | read_member_content, comment_on_member_posts | Member engagement |
| **Resource Access** | access_volunteer_resources | Training and coordination materials |

**Cannot Do**: Access administrative settings, manage users

#### 4. Member  
- **Internal Name**: member
- **Access**: No WordPress dashboard + ALL Subscriber benefits
- **Purpose**: Paying members with premium content access
- **Includes**: All permissions from Subscriber role

**Additional Capabilities:**
| Capability Category | Specific Capabilities | Purpose |
|-------------------|---------------------|---------|
| **Member Content** | read_member_content, access_member_events | Premium content access |
| **Member Resources** | download_member_resources | Exclusive downloads |
| **Member Communication** | participate_member_forums | Member-only discussions |
| **Enhanced Features** | advanced_search, priority_support | Premium user experience |

**Cannot Do**: Access WordPress dashboard, create content

#### 5. Subscriber (Base Level)
- **Internal Name**: subscriber
- **Access**: No WordPress dashboard access
- **Purpose**: Default role for new registrations
- **Base Capabilities**:
  - View all public website content
  - Comment on blog posts when logged in
  - Basic user profile management

**Cannot Do**: Access any restricted content or dashboard

## Managing Roles with Members Plugin

### Creating Custom Roles

#### Step-by-Step Process

1. **Navigate to Role Creation**
   - Go to Members → Add New
   - Fill in role information

2. **Role Information**
   - **Role Name**: Descriptive name (e.g., "Event Coordinator")
   - **Role**: Internal identifier (e.g., "event_coordinator")
   - **Description**: Clear role description

3. **Capability Selection**
   - **Content Management**: Read, edit, publish permissions
   - **User Management**: Limited user interaction capabilities
   - **System Management**: Administrative permissions (use sparingly)

4. **Save Role**
   - Click "Add Role"
   - Verify role appears in roles list

#### Custom Role Examples for KCN Seniors

| Role Name | Internal Name | Purpose | Key Capabilities |
|-----------|---------------|---------|------------------|
| **Event Coordinator** | event_coordinator | Manage events and registrations | edit_events, publish_events, manage_event_registrations |
| **Content Editor** | content_editor | Create and edit website content | edit_posts, publish_posts, upload_files |
| **Member Liaison** | member_liaison | Member communication and support | read_member_content, moderate_comments, edit_member_profiles |
| **Volunteer Coordinator** | volunteer_coordinator | Volunteer management and training | manage_volunteers, access_volunteer_tools, edit_volunteer_content |

### Editing Existing Roles

#### Modification Process

1. **Access Role Edit**
   - Go to Members → Roles
   - Find the role and click "Edit"

2. **Modify Capabilities**
   - **Grant**: Check boxes for permissions to grant
   - **Deny**: Check boxes for permissions to explicitly deny
   - **Inherit**: Leave unchecked for default behavior

3. **Save Changes**
   - Click "Update Role"
   - Test with affected users

#### Capability Categories

| Category | Description | Common Capabilities |
|----------|-------------|-------------------|
| **Content** | Post and page management | read, edit_posts, publish_posts, delete_posts |
| **Media** | File and media management | upload_files, edit_files, delete_files |
| **Comments** | Comment moderation | moderate_comments, edit_comment, delete_comment |
| **Users** | User account management | edit_users, delete_users, create_users |
| **System** | Administrative functions | manage_options, activate_plugins, switch_themes |

### Cloning Roles

#### Process for Creating Similar Roles

1. **Navigate to Role Cloning**
   - Go to Members → Roles
   - Find the base role and click "Clone"

2. **Modify Cloned Role**
   - Adjust role name and description
   - Modify capabilities as needed
   - Save the new role

3. **Verify New Role**
   - Test with appropriate users
   - Ensure permissions work correctly

## Content Protection with Members Plugin

### Post and Page Protection

#### Protection Setup

1. **Edit Content**
   - Edit the post or page
   - Find the "Access" meta box (usually in sidebar)

2. **Select Access Roles**
   - Choose roles that can access the content
   - Multiple roles can be selected
   - Public content requires no restrictions

3. **Save Changes**
   - Update/publish the content
   - Test access with different user types

#### Protection Examples

| Content Type | Protected Roles | Access Level | Example Use |
|--------------|----------------|--------------|-------------|
| **Member Events** | Member, Volunteer, Administrator 2, Administrator | Level 3+ | Exclusive member events |
| **Volunteer Training** | Volunteer, Administrator 2, Administrator | Level 4+ | Volunteer orientation materials |
| **Administrative Reports** | Administrator 2, Administrator | Level 5+ | Monthly activity reports |
| **Public Information** | All roles + visitors | Level 1 | General website content |

### Category Protection

#### Category-Level Protection

1. **Access Category Settings**
   - Go to Posts → Categories
   - Edit the category

2. **Set Access Permissions**
   - Choose roles that can view category content
   - Apply to all posts in category
   - Save changes

#### Category Protection Benefits

| Benefit | Description | Implementation |
|---------|-------------|----------------|
| **Bulk Protection** | Protect entire content categories | Set once, applies to all posts |
| **Organized Access** | Group content by access level | Member-only, volunteer-only categories |
| **Easy Management** | Centralized access control | Single point of management |
| **Consistent Experience** | Uniform access across content | Predictable user experience |

### Advanced Protection Features

#### Block-Level Protection

| Feature | Description | Use Case |
|---------|-------------|----------|
| **Block Permissions** | Control access to specific content blocks | Hide sensitive information in posts |
| **Conditional Content** | Show/hide content based on role | Role-specific announcements |
| **Dynamic Protection** | Time-based or condition-based access | Limited-time member offers |

#### Integration Features

| Integration | Description | Benefit |
|-------------|-------------|---------|
| **EventPrime** | Event access control | Member-only events |
| **WPForms** | Form access restrictions | Role-specific forms |
| **WooCommerce** | Product access control | Member-only products |
| **BuddyPress** | Community feature access | Role-based community features |

## Role Testing and Verification

### Testing Process

#### User Testing Checklist

| Test Item | Administrator | Administrator 2 | Volunteer | Member | Subscriber |
|-----------|---------------|---------|-----------|--------|------------|
| **Dashboard Access** | ✅ Full | ✅ Limited | ✅ Volunteer | ❌ None | ❌ None |
| **Content Creation** | ✅ All | ✅ Posts/Pages | ✅ Volunteer | ❌ None | ❌ None |
| **Member Content** | ✅ Access | ✅ Access | ✅ Access | ✅ Access | ❌ None |
| **Volunteer Tools** | ✅ Access | ✅ Access | ✅ Access | ❌ None | ❌ None |
| **Admin Settings** | ✅ Full | ❌ None | ❌ None | ❌ None | ❌ None |

#### Content Access Testing

| Content Type | Public | Subscriber | Member | Volunteer | Administrator 2 | Administrator |
|--------------|--------|------------|--------|-----------|---------|---------------|
| **Public Posts** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Member Events** | ❌ | ❌ | ✅ | ✅ | ✅ | ✅ |
| **Volunteer Training** | ❌ | ❌ | ❌ | ✅ | ✅ | ✅ |
| **Admin Reports** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

### Verification Tools

#### Built-in Testing

| Tool | Location | Purpose |
|------|----------|---------|
| **Role Tester** | Members → Roles → Edit | Test specific capabilities |
| **Access Checker** | Post/Page Edit | Verify content protection |
| **User Capability Viewer** | User Edit | View user permissions |

#### Manual Testing

| Test Method | Process | Verification |
|-------------|---------|--------------|
| **User Login Test** | Login as different user types | Verify dashboard access |
| **Content Access Test** | Try to access protected content | Confirm restrictions work |
| **Functionality Test** | Test role-specific features | Ensure capabilities work |

## Troubleshooting Role Issues

### Common Problems

| Issue | Possible Cause | Solution |
|-------|----------------|----------|
| **User Cannot Access Content** | Role not assigned correctly | Verify role assignment |
| **Permissions Not Working** | Plugin conflict | Deactivate other plugins temporarily |
| **Role Changes Not Saving** | Database permissions | Check database user permissions |
| **Content Still Visible** | Cache issues | Clear website cache |

### Debugging Steps

#### Step-by-Step Debugging

1. **Verify Role Assignment**
   - Check user's current role
   - Confirm role has required capabilities

2. **Test Capabilities**
   - Use Members plugin capability tester
   - Verify specific permissions

3. **Check for Conflicts**
   - Review other security plugins
   - Test with default WordPress roles

4. **Clear Caches**
   - Clear website cache
   - Clear browser cache
   - Test in incognito mode

## Performance Considerations

### Role Management Impact

| Factor | Impact | Optimization |
|--------|--------|--------------|
| **Role Complexity** | Database queries | Limit custom capabilities |
| **User Count** | Memory usage | Regular user cleanup |
| **Content Protection** | Query overhead | Use efficient protection methods |
| **Caching** | Performance improvement | Enable role-aware caching |

### Best Practices

| Practice | Implementation | Benefit |
|----------|----------------|---------|
| **Minimal Capabilities** | Grant only necessary permissions | Security and performance |
| **Role Hierarchy** | Use inheritance effectively | Easier management |
| **Regular Audits** | Review roles quarterly | Maintain security |
| **Documentation** | Document role purposes | Clear understanding |

## Next Steps

- Understand [Password Management & Security](/docs/user-management/password-management)
- Explore [Role-Based Access Control](/docs/user-management/role-based-access)
- Configure [User Registration Settings](/docs/user-management/registration-settings)
- Review [User Management Overview](/docs/user-management/overview)


