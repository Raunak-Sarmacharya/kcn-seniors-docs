'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight, 
  Search, 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  Clock, 
  Palette, 
  Puzzle, 
  Code, 
  Shield, 
  Wrench, 
  Video,
  X
} from 'lucide-react';
import { getAllSections, getSectionBySlug } from '@/app/lib/markdown-docs';
import { cn } from '@/app/lib/utils';

const iconMap: Record<string, React.ComponentType<any>> = {
  Home,
  Users,
  FileText,
  Calendar,
  Clock,
  Palette,
  Puzzle,
  Code,
  Shield,
  Wrench,
  Video,
};

export default function Sidebar() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const sections = getAllSections();

  // Auto-expand current section
  useEffect(() => {
    const currentSection = pathname.split('/')[2]; // /docs/[section]
    if (currentSection) {
      setExpandedSections(prev => new Set([...prev, currentSection]));
    }
  }, [pathname]);

  // Auto-expand sections when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const sectionsToExpand = new Set<string>();
      
      sections.forEach(section => {
        const sectionMatches = 
          section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const hasMatchingChildren = section.children?.some(child => 
          child.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          child.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if (sectionMatches || hasMatchingChildren) {
          sectionsToExpand.add(section.slug);
        }
      });
      
      setExpandedSections(prev => new Set([...prev, ...sectionsToExpand]));
    }
  }, [searchQuery, sections]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  // Enhanced filtering with highlighting
  const getFilteredSections = () => {
    if (!searchQuery.trim()) {
      return sections.map(section => ({
        ...section,
        children: section.children,
        searchHighlight: { title: false, description: false },
        childrenHighlights: section.children?.map(child => ({
          ...child,
          searchHighlight: { title: false, description: false }
        }))
      }));
    }

    const query = searchQuery.toLowerCase();
    
    return sections.map(section => {
      const titleMatches = section.title.toLowerCase().includes(query);
      const descriptionMatches = section.description.toLowerCase().includes(query);
      
      const filteredChildren = section.children?.filter(child => 
        child.title.toLowerCase().includes(query) ||
        child.description.toLowerCase().includes(query)
      ).map(child => ({
        ...child,
        searchHighlight: {
          title: child.title.toLowerCase().includes(query),
          description: child.description.toLowerCase().includes(query)
        }
      }));

      const hasMatches = titleMatches || descriptionMatches || (filteredChildren && filteredChildren.length > 0);
      
      if (!hasMatches) return null;

      return {
        ...section,
        children: filteredChildren,
        searchHighlight: { title: titleMatches, description: descriptionMatches },
        childrenHighlights: filteredChildren
      };
    }).filter(Boolean);
  };

  const filteredSections = getFilteredSections();

  const isActive = (slug: string) => {
    return pathname === `/docs/${slug}` || pathname.startsWith(`/docs/${slug}/`);
  };

  const isChildActive = (sectionSlug: string, childSlug: string) => {
    return pathname === `/docs/${sectionSlug}/${childSlug}`;
  };

  // Highlight search terms in text
  const highlightText = (text: string, shouldHighlight: boolean) => {
    if (!shouldHighlight || !searchQuery.trim()) return text;
    
    const query = searchQuery.toLowerCase();
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-orange-200 text-orange-900 px-1 rounded font-semibold">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex-shrink-0 overflow-hidden shadow-sm">
      <div className="flex flex-col h-full">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center p-6 border-b border-gray-100 bg-white"
        >
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm"
            >
              <FileText className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg">Documentation</h2>
              <p className="text-sm text-gray-500">KCN Seniors</p>
            </div>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="p-6 border-b border-gray-100 bg-white"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search navigation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
            />
            {searchQuery.trim() && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto bg-white">
          <div className="p-6 space-y-2">
            {/* Home link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <Link
                href="/docs"
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 hover:bg-orange-50 hover:text-orange-700 group',
                  pathname === '/docs' && 'bg-orange-100 text-orange-700 font-semibold'
                )}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Home className="w-5 h-5" />
                </motion.div>
                <span className="font-medium">Overview</span>
              </Link>
            </motion.div>

            {/* Sections */}
            <AnimatePresence>
              {filteredSections.map((section, index) => {
                if (!section) return null;
                
                const Icon = iconMap[section.icon] || FileText;
                const isExpanded = expandedSections.has(section.slug);
                const hasActiveChild = section.children?.some(child => 
                  isChildActive(section.slug, child.slug)
                );
                const isSectionActive = isActive(section.slug) || hasActiveChild;
                const hasSearchMatches = searchQuery.trim() && (
                  section.searchHighlight.title || 
                  section.searchHighlight.description || 
                  (section.children && section.children.length > 0)
                );

                return (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                    className={cn(
                      hasSearchMatches && 'ring-2 ring-orange-200 ring-opacity-50 rounded-xl'
                    )}
                  >
                    {/* Section header */}
                    <div className={cn(
                      'flex items-center group rounded-xl transition-all duration-200 overflow-hidden',
                      isSectionActive && 'bg-orange-100 shadow-sm',
                      hasSearchMatches && 'bg-orange-50'
                    )}>
                      <Link
                        href={`/docs/${section.slug}`}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 transition-all duration-200 text-gray-700 hover:bg-orange-50 hover:text-orange-700 flex-1 group',
                          isSectionActive && 'text-orange-700 font-semibold',
                          hasSearchMatches && 'text-orange-800'
                        )}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        <span className="font-medium">
                          {highlightText(section.title, section.searchHighlight.title)}
                        </span>
                      </Link>
                      {section.children && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleSection(section.slug)}
                          className={cn(
                            'p-1.5 transition-all duration-200 opacity-100',
                            isSectionActive 
                              ? 'bg-orange-100 text-orange-700 border-l border-orange-200' 
                              : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300',
                            isExpanded && 'text-orange-700'
                          )}
                          aria-label={`Toggle ${section.title} menu`}
                        >
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <ChevronRight className="w-4 h-4 font-bold" />
                          </motion.div>
                        </motion.button>
                      )}
                    </div>

                    {/* Section children */}
                    {section.children && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="ml-8 mt-3 space-y-1.5">
                              {section.children.map((child, childIndex) => {
                                const childHighlight = section.childrenHighlights?.find(ch => ch.id === child.id);
                                const hasChildSearchMatch = searchQuery.trim() && childHighlight && (
                                  childHighlight.searchHighlight.title || childHighlight.searchHighlight.description
                                );
                                
                                return (
                                  <motion.div
                                    key={child.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: childIndex * 0.05 }}
                                    className={cn(
                                      hasChildSearchMatch && 'ring-1 ring-orange-200 rounded-lg'
                                    )}
                                  >
                                    <Link
                                      href={`/docs/${section.slug}/${child.slug}`}
                                      className={cn(
                                        'flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg transition-all duration-200 text-gray-600 hover:bg-orange-50 hover:text-orange-700',
                                        isChildActive(section.slug, child.slug) && 'text-orange-700 font-medium',
                                        hasChildSearchMatch && 'bg-orange-50 text-orange-800'
                                      )}
                                    >
                                      <div className="flex items-center gap-3 w-full">
                                        {isChildActive(section.slug, child.slug) && (
                                          <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 shadow-sm"
                                          />
                                        )}
                                        <span className="font-medium flex-1">
                                          {highlightText(child.title, childHighlight?.searchHighlight.title || false)}
                                        </span>
                                      </div>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* No search results message */}
            {searchQuery.trim() && filteredSections.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8 text-gray-500"
              >
                <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">No navigation items found</p>
                <p className="text-xs text-gray-400 mt-1">Try different search terms</p>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="p-4 border-t border-gray-200 bg-gray-50"
        >
          <div className="text-center text-xs text-gray-500">
            <p>KCN Seniors Documentation</p>
            <p>Version 1.0.0</p>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
