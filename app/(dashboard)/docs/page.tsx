'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
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
  ArrowRight,
  BookOpen,
  Search,
  Clock as ClockIcon,
  Star
} from 'lucide-react';
import { getAllSections } from '@/app/lib/markdown-docs';

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

export default function DocsOverviewPage() {
  const sections = getAllSections();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="px-8 py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              KCN Seniors Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-5xl leading-relaxed">
              Welcome to your comprehensive documentation portal. Find everything you need to manage your KCN Seniors website effectively and efficiently.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/docs/getting-started/welcome"
                className="glass rounded-lg p-4 hover:bg-orange-50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-700 transition-colors">
                      Get Started
                    </h3>
                    <p className="text-sm text-gray-600">Begin your journey</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors ml-auto" />
                </div>
              </Link>

              <Link
                href="/docs/page-builder-forms/elementor-integration"
                className="glass rounded-lg p-4 hover:bg-yellow-50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-yellow-700 transition-colors">
                      Elementor Guide
                    </h3>
                    <p className="text-sm text-gray-600">Page builder</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-colors ml-auto" />
                </div>
              </Link>

              <Link
                href="/docs/event-management/event-creation"
                className="glass rounded-lg p-4 hover:bg-green-50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-green-700 transition-colors">
                      Event Management
                    </h3>
                    <p className="text-sm text-gray-600">EventPrime setup</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors ml-auto" />
                </div>
              </Link>

              <Link
                href="/docs/troubleshooting/common-issues"
                className="glass rounded-lg p-4 hover:bg-red-50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-red-700 transition-colors">
                      Troubleshooting
                    </h3>
                    <p className="text-sm text-gray-600">Fix common issues</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors ml-auto" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Documentation Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Documentation Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => {
                const IconComponent = iconMap[section.icon] || FileText;
                return (
                  <motion.div
                    key={section.id}
                    variants={itemVariants}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-base leading-relaxed">
                          {section.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {section.children?.length || 0} guides
                          </span>
                          <Link
                            href={`/docs/${section.slug}`}
                            className="text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                          >
                            Explore
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 border border-orange-200 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Need Help?
              </h3>
              <p className="text-gray-600 mb-8 max-w-4xl mx-auto text-lg leading-relaxed">
                Can't find what you're looking for? Our comprehensive documentation covers everything from basic setup to advanced customization. We're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/docs/troubleshooting/common-issues"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  View Troubleshooting
                </Link>
                <Link
                  href="/docs/getting-started/quick-reference"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Quick Reference
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>


    </div>
  );
}
