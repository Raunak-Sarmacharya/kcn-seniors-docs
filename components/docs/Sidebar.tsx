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
          'fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 z-50 overflow-hidden transition-all duration-300 ease-in-out shadow-lg',
          'lg:relative lg:z-auto lg:flex-shrink-0 lg:translate-x-0',
          // Mobile: slide in/out based on isOpen state
          // Desktop: always visible
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">Documentation</h2>
                <p className="text-sm text-gray-500">KCN Seniors</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-gray-100 bg-white">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto bg-white">
            <div className="p-6 space-y-2">
              {/* Home link */}
              <Link
                href="/docs"
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 hover:bg-orange-50 hover:text-orange-700',
                  pathname === '/docs' && 'bg-orange-100 text-orange-700 font-semibold'
                )}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Overview</span>
              </Link>

              {/* Sections */}
              <AnimatePresence>
                {filteredSections.map((section) => {
                  const Icon = iconMap[section.icon] || FileText;
                  const isExpanded = expandedSections.has(section.slug);
                  const hasActiveChild = section.children?.some(child => 
                    isChildActive(section.slug, child.slug)
                  );
                  const isSectionActive = isActive(section.slug) || hasActiveChild;

                  return (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Section header */}
                      <div className="flex items-center group">
                        <Link
                          href={`/docs/${section.slug}`}
                          className={cn(
                            'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-gray-700 hover:bg-orange-50 hover:text-orange-700 flex-1',
                            isSectionActive && 'bg-orange-100 text-orange-700 font-semibold'
                          )}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{section.title}</span>
                        </Link>
                        {section.children && (
                          <button
                            onClick={() => toggleSection(section.slug)}
                            className={cn(
                              'p-2 rounded-lg transition-all duration-200 opacity-100 bg-gray-50 border border-gray-200',
                              'hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300',
                              isExpanded && 'text-orange-700 bg-orange-50 border-orange-300'
                            )}
                            aria-label={`Toggle ${section.title} menu`}
                          >
                            <motion.div
                              animate={{ rotate: isExpanded ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronRight className="w-6 h-6 text-gray-700 hover:text-orange-700 font-bold" />
                            </motion.div>
                          </button>
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
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-8 mt-3 space-y-1">
                                {section.children.map((child) => (
                                  <Link
                                    key={child.id}
                                    href={`/docs/${section.slug}/${child.slug}`}
                                    className={cn(
                                      'block px-4 py-2.5 text-sm rounded-lg transition-all duration-200 text-gray-600 hover:bg-orange-50 hover:text-orange-700',
                                      isChildActive(section.slug, child.slug) && 'bg-orange-50 text-orange-700 font-medium'
                                    )}
                                  >
                                    <span className="font-medium">{child.title}</span>
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
          <div className="p-4 border-t border-gray-200 bg-gray-50">
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
