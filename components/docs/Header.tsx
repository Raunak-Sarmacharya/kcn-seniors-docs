'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X,
  Home,
  FileText,
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  content: string;
  sectionId: string;
  slug: string;
  tags: string[];
  difficulty: string;
  matchScore: number;
}

// Mock search data for now - this will be replaced with actual search functionality
const mockSearchResults: SearchResult[] = [
  {
    id: 'user-management-overview',
    title: 'User Management Overview',
    content: 'Complete guide to user management system including roles, permissions, and security measures for the KCN Seniors website.',
    sectionId: 'user-management',
    slug: 'user-management-overview',
    tags: ['user management', 'roles', 'permissions', 'security'],
    difficulty: 'intermediate',
    matchScore: 5
  },
  {
    id: 'role-based-access',
    title: 'Role-Based Access Control',
    content: 'Detailed guide to controlling access based on user roles and implementing proper security measures throughout the website.',
    sectionId: 'user-management',
    slug: 'role-based-access',
    tags: ['access control', 'roles', 'security', 'permissions'],
    difficulty: 'advanced',
    matchScore: 4
  },
  {
    id: 'event-management-overview',
    title: 'Event Management Overview',
    content: 'Complete guide to EventPrime event management system with role-based access control and venue management.',
    sectionId: 'event-management',
    slug: 'event-management-overview',
    tags: ['events', 'eventprime', 'venue management', 'access control'],
    difficulty: 'intermediate',
    matchScore: 3
  }
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();
  const router = useRouter();

  // Simple search function that filters mock data
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = mockSearchResults.filter(result => 
      result.title.toLowerCase().includes(lowerQuery) ||
      result.content.toLowerCase().includes(lowerQuery) ||
      result.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );

    // Sort by relevance (title matches first, then content, then tags)
    const sorted = filtered.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(lowerQuery);
      const bTitleMatch = b.title.toLowerCase().includes(lowerQuery);
      
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      
      return b.matchScore - a.matchScore;
    });

    setSearchResults(sorted);
  };

  // Debounced search
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        setIsSearching(true);
        performSearch(searchQuery);
        setShowResults(true);
        setIsSearching(false);
      }
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  const handleResultClick = (result: SearchResult) => {
    router.push(`/docs/${result.sectionId}/${result.slug}`);
    setSearchQuery('');
    setShowResults(false);
    setIsSearchOpen(false);
  };

  // Highlight search terms in text
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-orange-200 text-orange-900 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 min-w-0">
        {/* Left side - Brand */}
        <div className="flex items-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center shadow-sm">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-gray-900 text-lg">KCN Seniors</h1>
              <p className="text-sm text-gray-500">Documentation Portal</p>
            </div>
          </Link>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-md mx-6 hidden md:block min-w-0 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => searchQuery.trim().length >= 2 && setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 200)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
            />
            {isSearching && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {showResults && searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50"
              >
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer transition-colors"
                      onClick={() => handleResultClick(result)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 text-orange-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-gray-900 mb-1 line-clamp-1">
                            {highlightText(result.title, searchQuery)}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {highlightText(result.content.substring(0, 120) + '...', searchQuery)}
                          </p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                            <span>{result.sectionId.replace('-', ' ')}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Mobile search button */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
