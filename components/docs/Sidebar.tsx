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
  X,
  Menu
} from 'lucide-react';
import { getAllSections, getSectionBySlug } from '@/app/lib/docs';
import { cn } from '@/app/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.children?.some(child => 
      child.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const isActive = (slug: string) => {
    return pathname === `/docs/${slug}` || pathname.startsWith(`/docs/${slug}/`);
  };

  const isChildActive = (sectionSlug: string, childSlug: string) => {
    return pathname === `/docs/${sectionSlug}/${childSlug}`;
  };

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

             {/* Sidebar */}
       <aside
         className={cn(
           'fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-800 z-50 overflow-hidden transition-all duration-300 ease-in-out',
           'lg:relative lg:z-auto lg:flex-shrink-0',
           // Mobile: slide in/out based on isOpen state
           // Desktop: also slide in/out based on isOpen state
           isOpen ? 'translate-x-0 shadow-2xl lg:shadow-none' : '-translate-x-full lg:translate-x-0',
           // Hide sidebar completely when closed
           isOpen ? 'block' : 'hidden'
         )}
       >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-white">Documentation</h2>
                <p className="text-xs text-gray-400">KCN Seniors</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="p-4 space-y-2">
              {/* Home link */}
              <Link
                href="/docs"
                className={cn(
                  'sidebar-item',
                  pathname === '/docs' && 'active'
                )}
              >
                <Home className="w-5 h-5" />
                <span>Overview</span>
              </Link>

              {/* Sections */}
              <AnimatePresence>
                {filteredSections.map((section) => {
                  const Icon = iconMap[section.icon] || FileText;
                  const isExpanded = expandedSections.has(section.slug);
                  const hasActiveChild = section.children?.some(child => 
                    isChildActive(section.slug, child.slug)
                  );

                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Section header */}
                      <button
                        onClick={() => toggleSection(section.slug)}
                        className={cn(
                          'sidebar-item w-full justify-between',
                          (isActive(section.slug) || hasActiveChild) && 'active'
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <span>{section.title}</span>
                        </div>
                        {section.children && (
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </motion.div>
                        )}
                      </button>

                      {/* Section children */}
                      {section.children && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-8 mt-2 space-y-1">
                                {section.children.map((child) => (
                                  <Link
                                    key={child.id}
                                    href={`/docs/${section.slug}/${child.slug}`}
                                    className={cn(
                                      'block px-4 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-gray-800/50 hover:text-primary-400',
                                      isChildActive(section.slug, child.slug) && 'bg-primary-500/20 text-primary-400'
                                    )}
                                  >
                                    {child.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="text-center text-xs text-gray-500">
              <p>KCN Seniors Documentation</p>
              <p>Version 1.0.0</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
