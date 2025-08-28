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
import { getAllSections } from '@/app/lib/docs';

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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-primary-500/5"></div>
        <div className="relative px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-white sm:text-6xl mb-6">
                Welcome to{' '}
                <span className="gradient-text">KCN Seniors</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Comprehensive documentation portal for managing your WordPress website. 
                Find everything you need to maintain and enhance your KCN Seniors community site.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="glass rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/20 rounded-lg mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">11</h3>
                <p className="text-gray-400">Documentation Sections</p>
              </div>
              <div className="glass rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary-500/20 rounded-lg mb-4 mx-auto">
                  <Search className="w-6 h-6 text-secondary-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-400">Guides & Tutorials</p>
              </div>
              <div className="glass rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4 mx-auto">
                  <Video className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
                <p className="text-gray-400">Video Tutorials</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/docs/getting-started/welcome"
                className="glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-primary-400 transition-colors">
                      Get Started
                    </h3>
                    <p className="text-sm text-gray-400">Begin your journey</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors ml-auto" />
                </div>
              </Link>

              <Link
                href="/docs/content-management/dashboard-overview"
                className="glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary-500/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-secondary-400 transition-colors">
                      Dashboard Guide
                    </h3>
                    <p className="text-sm text-gray-400">Learn the basics</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-secondary-400 transition-colors ml-auto" />
                </div>
              </Link>

              <Link
                href="/docs/event-management/event-creation"
                className="glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-green-400 transition-colors">
                      Create Events
                    </h3>
                    <p className="text-sm text-gray-400">Manage your events</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors ml-auto" />
                </div>
              </Link>

              <Link
                href="/docs/troubleshooting/common-issues"
                className="glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white group-hover:text-red-400 transition-colors">
                      Troubleshoot
                    </h3>
                    <p className="text-sm text-gray-400">Fix common issues</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors ml-auto" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Documentation Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Documentation Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sections.map((section, index) => {
                const Icon = iconMap[section.icon] || FileText;
                
                return (
                  <motion.div
                    key={section.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="glass rounded-lg p-6 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                  >
                    <Link href={`/docs/${section.slug}`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary-400 transition-colors">
                            {section.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">
                            {section.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <ClockIcon className="w-3 h-3" />
                              <span>{section.children?.length || 0} guides</span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-400 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Recent Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Recent Updates</h2>
            <div className="glass rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-400">January 15, 2025</span>
                  <span className="text-white">Added comprehensive Event Management documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-400">January 10, 2025</span>
                  <span className="text-white">Updated User Management guides with new features</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-400">January 5, 2025</span>
                  <span className="text-white">Enhanced Security & Maintenance documentation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass rounded-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our comprehensive documentation covers everything from basic setup to advanced customization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/troubleshooting/common-issues"
                  className="button-primary"
                >
                  View Troubleshooting
                </Link>
                <Link
                  href="/docs/video-tutorials/getting-started-videos"
                  className="button-secondary"
                >
                  Watch Tutorials
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
