// Client-side documentation loading using API routes

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
  htmlContent: string;
  sectionId: string;
  slug: string;
  tags: string[];
  lastUpdated: string;
  videoUrl?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  prerequisites?: string[];
  order: number;
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
    title: 'User Management System',
    description: 'Complete user management, roles, permissions, and security',
    icon: 'Users',
    slug: 'user-management',
    category: 'administration',
    order: 2,
    children: [
      { id: 'user-management-overview', title: 'User Management Overview', description: 'Complete guide to user management system', icon: 'Users', slug: 'user-management-overview', category: 'administration', order: 1 },
      { id: 'wordpress-users-management', title: 'WordPress Users Management', description: 'Managing user accounts and profiles', icon: 'UserCheck', slug: 'wordpress-users-management', category: 'administration', order: 2 },
      { id: 'members-plugin-guide', title: 'Members Plugin - Role Management', description: 'Complete role management with Members plugin', icon: 'Shield', slug: 'members-plugin-guide', category: 'administration', order: 3 },
      { id: 'password-management', title: 'Password Management & Security', description: 'Password policies and security measures', icon: 'Lock', slug: 'password-management', category: 'administration', order: 4 },
      { id: 'role-based-access', title: 'Role-Based Access Control', description: 'Controlling access based on roles', icon: 'Key', slug: 'role-based-access', category: 'administration', order: 5 },
      { id: 'registration-settings', title: 'User Registration Settings', description: 'Configuring user registration', icon: 'Settings', slug: 'registration-settings', category: 'administration', order: 6 },
      { id: 'emergency-access', title: 'Emergency Access System', description: 'Backup administrator account for critical situations', icon: 'AlertTriangle', slug: 'emergency-access', category: 'administration', order: 7 },
    ],
  },
  {
    id: 'event-management',
    title: 'Event Management System',
    description: 'Complete EventPrime event management with role-based access control',
    icon: 'Calendar',
    slug: 'event-management',
    category: 'content',
    order: 3,
    children: [
      { id: 'event-management-overview', title: 'Event Management Overview', description: 'Complete guide to EventPrime event management system', icon: 'Calendar', slug: 'event-management-overview', category: 'content', order: 1 },
      { id: 'event-creation', title: 'Creating and Managing Events', description: 'Complete guide to creating and managing events with EventPrime', icon: 'Plus', slug: 'event-creation', category: 'content', order: 2 },
      { id: 'event-protection', title: 'Role-Based Event Protection', description: 'Protecting venue information from non-members', icon: 'Shield', slug: 'event-protection', category: 'content', order: 3 },
      { id: 'eventprime-integration', title: 'EventPrime Plugin Integration', description: 'Technical integration details and advanced features', icon: 'Zap', slug: 'eventprime-integration', category: 'content', order: 4 },
    ],
  },
  {
    id: 'blog-management',
    title: 'Blog Management System',
    description: 'WordPress Posts/Blog system with role-based commenting and Block Editor',
    icon: 'FileText',
    slug: 'blog-management',
    category: 'content',
    order: 4,
    children: [
      { id: 'blog-system-overview', title: 'Blog System Overview', description: 'Complete guide to WordPress Posts/Blog system with role-based commenting', icon: 'FileText', slug: 'blog-system-overview', category: 'content', order: 1 },
      { id: 'comments-system-management', title: 'Comments System Management', description: 'Complete guide to WordPress comments with role-based access control', icon: 'MessageSquare', slug: 'comments-system-management', category: 'content', order: 2 },
    ],
  },
  {
    id: 'content-management',
    title: 'Content Management System',
    description: 'WordPress Media Library management with EventPrime integration and optimization',
    icon: 'Image',
    slug: 'content-management',
    category: 'content',
    order: 5,
    children: [
      { id: 'media-library-management', title: 'WordPress Media Library Management', description: 'Complete guide to managing images, videos, and documents in WordPress Media Library', icon: 'Image', slug: 'media-library-management', category: 'content', order: 1 },
    ],
  },
  {
    id: 'volunteer-management',
    title: 'Service & Volunteer Booking',
    description: 'Automated volunteer task management and coordination',
    icon: 'Heart',
    slug: 'volunteer-management',
    category: 'services',
    order: 6,
    children: [
      { id: 'volunteer-system-overview', title: 'Volunteer System Overview', description: 'Complete guide to volunteer management system', icon: 'Heart', slug: 'volunteer-system-overview', category: 'services', order: 1 },
      { id: 'volunteer-profiles', title: 'Managing Volunteer Profiles', description: 'Setting up volunteer skills and interests', icon: 'User', slug: 'volunteer-profiles', category: 'services', order: 2 },
      { id: 'task-management', title: 'Task Creation and Management', description: 'Creating and managing volunteer tasks', icon: 'List', slug: 'task-management', category: 'services', order: 3 },
      { id: 'automated-matching', title: 'Automated Task Matching', description: 'How the skill-based matching system works', icon: 'Zap', slug: 'automated-matching', category: 'services', order: 4 },
      { id: 'email-notifications', title: 'Email Notification System', description: 'Managing volunteer task notifications', icon: 'Mail', slug: 'email-notifications', category: 'services', order: 5 },
    ],
  },
  {
    id: 'custom-development',
    title: 'Custom Development',
    description: 'Technical implementation details and custom features',
    icon: 'Code',
    slug: 'custom-development',
    category: 'development',
    order: 7,
    children: [
      { id: 'custom-development-overview', title: 'Custom Development Overview', description: 'Overview of custom features and implementations', icon: 'Code', slug: 'custom-development-overview', category: 'development', order: 1 },
      { id: 'functions-php', title: 'Functions.php Customizations', description: 'Custom code in theme functions.php file', icon: 'FileCode', slug: 'functions-php', category: 'development', order: 2 },
      { id: 'acf-integration', title: 'Advanced Custom Fields Integration', description: 'ACF plugin integration for volunteer skills', icon: 'Database', slug: 'acf-integration', category: 'development', order: 3 },
      { id: 'css-injection', title: 'CSS Injection System', description: 'Dynamic CSS injection for content protection', icon: 'Palette', slug: 'css-injection', category: 'development', order: 4 },
      { id: 'database-structure', title: 'Database Structure', description: 'Custom database tables and metadata', icon: 'Server', slug: 'database-structure', category: 'development', order: 5 },
      { id: 'code-snippets-plugin', title: 'WordPress Code Snippets Plugin Integration', description: 'Custom code snippets implementation for enhanced functionality', icon: 'Code', slug: 'code-snippets-plugin', category: 'development', order: 6 },
    ],
  },
  {
    id: 'page-builder-forms',
    title: 'Page Builder & Forms',
    description: 'Elementor page builder integration and form management',
    icon: 'Layout',
    slug: 'page-builder-forms',
    category: 'content',
    order: 8,
    children: [
      { id: 'elementor-integration', title: 'Elementor Integration', description: 'Complete guide to Elementor page builder integration', icon: 'Layout', slug: 'elementor-integration', category: 'content', order: 1 },
      { id: 'form-submissions-management', title: 'Form Submissions Management', description: 'Managing form submissions and applications', icon: 'FileText', slug: 'form-submissions-management', category: 'content', order: 2 },
      { id: 'custom-page-design', title: 'Custom Page Design', description: 'Creating custom pages with Elementor', icon: 'Palette', slug: 'custom-page-design', category: 'content', order: 3 },
      { id: 'wpforms-integration', title: 'WPForms Lite Integration', description: 'Complete guide to WPForms Lite contact form system', icon: 'MessageSquare', slug: 'wpforms-integration', category: 'content', order: 4 },
    ],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Regular maintenance, support procedures, and emergency contacts',
    icon: 'Wrench',
    slug: 'maintenance-support',
    category: 'support',
    order: 12,
    children: [
      { id: 'maintenance-support-overview', title: 'Maintenance & Support Overview', description: 'Overview of maintenance and support procedures', icon: 'Wrench', slug: 'maintenance-support-overview', category: 'support', order: 1 },
      { id: 'maintenance-schedule', title: 'Maintenance Schedule', description: 'Regular maintenance tasks and schedules', icon: 'Calendar', slug: 'maintenance-schedule', category: 'support', order: 2 },
      { id: 'support-procedures', title: 'Support Procedures', description: 'How to get help and support', icon: 'HelpCircle', slug: 'support-procedures', category: 'support', order: 3 },
      { id: 'emergency-contacts', title: 'Emergency Contacts', description: 'Important contact information for urgent issues', icon: 'Phone', slug: 'emergency-contacts', category: 'support', order: 4 },
      { id: 'backup-procedures', title: 'Backup Procedures', description: 'Regular backup and recovery procedures', icon: 'Save', slug: 'backup-procedures', category: 'support', order: 5 },
      { id: 'performance-monitoring', title: 'Performance Monitoring', description: 'Monitoring website performance and health', icon: 'Activity', slug: 'performance-monitoring', category: 'support', order: 6 },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: 'Wrench',
    slug: 'troubleshooting',
    category: 'support',
    order: 13,
    children: [
      { id: 'common-issues', title: 'Common Issues & Solutions', description: 'Common issues and their solutions', icon: 'HelpCircle', slug: 'common-issues', category: 'support', order: 1 },
      { id: 'error-logs', title: 'Error Log Analysis', description: 'Analyzing error logs', icon: 'FileText', slug: 'error-logs', category: 'support', order: 2 },
      { id: 'debug-mode', title: 'Debug Mode Activation', description: 'Activating debug mode', icon: 'Bug', slug: 'debug-mode', category: 'support', order: 3 },
      { id: 'plugin-conflicts', title: 'Plugin Conflict Resolution', description: 'Resolving plugin conflicts', icon: 'AlertTriangle', slug: 'plugin-conflicts', category: 'support', order: 4 },
      { id: 'database-repair', title: 'Database Repair', description: 'Repairing database issues', icon: 'Database', slug: 'database-repair', category: 'support', order: 5 },
      { id: 'emergency-recovery', title: 'Emergency Recovery', description: 'Emergency recovery procedures', icon: 'AlertCircle', slug: 'emergency-recovery', category: 'support', order: 6 },
    ],
  },
];

// Cache for markdown content
let markdownCache: DocContent[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Get all markdown documentation content
export async function getAllMarkdownDocs(): Promise<DocContent[]> {
  const now = Date.now();
  
  // Return cached content if still valid
  if (markdownCache && (now - cacheTimestamp) < CACHE_DURATION) {
    return markdownCache;
  }

  try {
    const response = await fetch('/api/docs');
    if (!response.ok) {
      throw new Error('Failed to fetch documentation');
    }
    
    const docs: DocContent[] = await response.json();

    // Sort by section order and then by document order
    docs.sort((a, b) => {
      const sectionA = docSections.find(s => s.id === a.sectionId);
      const sectionB = docSections.find(s => s.id === b.sectionId);
      
      if (sectionA?.order !== sectionB?.order) {
        return (sectionA?.order || 0) - (sectionB?.order || 0);
      }
      
      return a.order - b.order;
    });

    // Update cache
    markdownCache = docs;
    cacheTimestamp = now;

    return docs;
  } catch (error) {
    console.error('Error fetching documentation:', error);
    return [];
  }
}

// Get documentation by slug
export async function getMarkdownDocBySlug(slug: string): Promise<DocContent | null> {
  try {
    const response = await fetch(`/api/docs?slug=${encodeURIComponent(slug)}`);
    if (!response.ok) {
      return null;
    }
    
    const doc: DocContent = await response.json();
    return doc;
  } catch (error) {
    console.error('Error fetching document by slug:', error);
    return null;
  }
}

// Get documentation by section
export async function getMarkdownDocsBySection(sectionId: string): Promise<DocContent[]> {
  try {
    const response = await fetch(`/api/docs?sectionId=${encodeURIComponent(sectionId)}`);
    if (!response.ok) {
      return [];
    }
    
    const docs: DocContent[] = await response.json();
    return docs;
  } catch (error) {
    console.error('Error fetching documents by section:', error);
    return [];
  }
}

// Get section by slug
export function getSectionBySlug(slug: string): DocSection | null {
  return docSections.find(section => section.slug === slug) || null;
}

// Get all sections
export function getAllSections(): DocSection[] {
  return docSections;
}

// Get breadcrumbs for navigation
export async function getBreadcrumbs(sectionSlug: string, docSlug?: string): Promise<Array<{ title: string; slug: string }>> {
  const breadcrumbs = [];

  const section = getSectionBySlug(sectionSlug);
  if (section) {
    breadcrumbs.push({ title: section.title, slug: `/docs/${sectionSlug}` });
  }

  if (docSlug) {
    const doc = await getMarkdownDocBySlug(docSlug);
    if (doc) {
      breadcrumbs.push({ title: doc.title, slug: `/docs/${sectionSlug}/${docSlug}` });
    }
  }

  return breadcrumbs;
}

// Search documentation
export async function searchMarkdownDocs(query: string): Promise<SearchResult[]> {
  const docs = await getAllMarkdownDocs();
  const results: SearchResult[] = [];

  if (!query.trim()) {
    return [];
  }

  const searchTerms = query.toLowerCase().trim().split(/\s+/).filter(term => term.length > 0);

  for (const doc of docs) {
    let matchScore = 0;
    const searchableText = `${doc.title} ${doc.content} ${doc.tags.join(' ')}`.toLowerCase();

    for (const term of searchTerms) {
      // Exact phrase match (higher score)
      if (searchableText.includes(term)) {
        matchScore += 2;
        
        // Boost score for title matches
        if (doc.title.toLowerCase().includes(term)) {
          matchScore += 3;
        }
        
        // Boost score for tag matches
        if (doc.tags.some(tag => tag.toLowerCase().includes(term))) {
          matchScore += 2;
        }

        // Boost score for content matches (first occurrence gets higher score)
        const contentMatches = (doc.content.toLowerCase().match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length;
        if (contentMatches > 0) {
          matchScore += Math.min(contentMatches, 3); // Cap at 3 points for content matches
        }
      } else {
        // Partial word match (lower score)
        const partialMatches = searchTerms.some(searchTerm => 
          searchTerm.length > 2 && // Only consider partial matches for terms longer than 2 characters
          (doc.title.toLowerCase().includes(searchTerm) || 
           doc.content.toLowerCase().includes(searchTerm) ||
           doc.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
        
        if (partialMatches) {
          matchScore += 1;
        }
      }
    }

    if (matchScore > 0) {
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
  }

  // Sort by match score (highest first), then by title for same scores
  return results.sort((a, b) => {
    if (b.matchScore !== a.matchScore) {
      return b.matchScore - a.matchScore;
    }
    return a.title.localeCompare(b.title);
  });
}

// Clear cache (useful for development)
export function clearMarkdownCache(): void {
  markdownCache = null;
  cacheTimestamp = 0;
}
