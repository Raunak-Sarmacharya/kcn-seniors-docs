'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Clock, 
  Tag, 
  ArrowRight,
  X,
  BookOpen,
  FileText,
  Calendar,
  Users,
  Shield,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/app/lib/utils';

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

const categoryIcons: Record<string, React.ComponentType<any>> = {
  'getting-started': BookOpen,
  'user-management': Users,
  'content-management': FileText,
  'event-management': Calendar,
  'service-booking': Clock,
  'theme-customization': FileText,
  'plugin-management': FileText,
  'custom-development': FileText,
  'maintenance-security': Shield,
  'troubleshooting': Wrench,
  'video-tutorials': FileText,
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: '',
    difficulty: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query, filters]);

  const performSearch = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        q: query,
        ...(filters.category && { category: filters.category }),
        ...(filters.difficulty && { difficulty: filters.difficulty }),
      });

      const response = await fetch(`/api/search?${params}`);
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearFilters = () => {
    setFilters({ category: '', difficulty: '' });
  };

  const hasActiveFilters = filters.category || filters.difficulty;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Search Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Search Results</h1>
              <p className="text-gray-400">
                {query ? `Searching for "${query}"` : 'Enter a search term'}
              </p>
            </div>
          </div>

          {/* Search Stats */}
          {query && (
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>{results.length} results found</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              )}
            </div>
          )}
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">Filters</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-4 h-4" />
              {showFilters ? 'Hide' : 'Show'} Filters
            </button>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="glass rounded-lg p-6 mb-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={filters.category}
                      onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">All Categories</option>
                      <option value="getting-started">Getting Started</option>
                      <option value="user-management">User Management</option>
                      <option value="content-management">Content Management</option>
                      <option value="event-management">Event Management</option>
                      <option value="service-booking">Service Booking</option>
                      <option value="theme-customization">Theme Customization</option>
                      <option value="plugin-management">Plugin Management</option>
                      <option value="custom-development">Custom Development</option>
                      <option value="maintenance-security">Maintenance & Security</option>
                      <option value="troubleshooting">Troubleshooting</option>
                      <option value="video-tutorials">Video Tutorials</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Difficulty
                    </label>
                    <select
                      value={filters.difficulty}
                      onChange={(e) => setFilters(prev => ({ ...prev, difficulty: e.target.value }))}
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">All Difficulties</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Search Results */}
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Searching...</p>
          </motion.div>
        ) : query ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {results.length > 0 ? (
              <div className="space-y-6">
                {results.map((result, index) => {
                  const Icon = categoryIcons[result.sectionId] || FileText;
                  
                  return (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                    >
                      <Link href={`/docs/${result.sectionId}/${result.slug}`}>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary-400 transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                              {result.content}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <Tag className="w-3 h-3" />
                                <span className="capitalize">{result.difficulty}</span>
                              </div>
                              <span>Section: {result.sectionId.replace('-', ' ')}</span>
                            </div>
                            {result.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mt-3">
                                {result.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                                {result.tags.length > 3 && (
                                  <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
                                    +{result.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={clearFilters}
                    className="button-primary"
                  >
                    Clear Filters
                  </button>
                  <Link
                    href="/docs"
                    className="button-secondary"
                  >
                    Browse All Docs
                  </Link>
                </div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Start searching</h3>
            <p className="text-gray-400 mb-6">
              Enter a search term to find documentation, guides, and tutorials.
            </p>
            <Link
              href="/docs"
              className="button-primary"
            >
              Browse Documentation
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
