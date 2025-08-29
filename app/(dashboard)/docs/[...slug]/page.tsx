'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Tag, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Printer,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { 
  getAllSections, 
  getSectionBySlug, 
  getDocBySlug, 
  getDocsBySection,
  getBreadcrumbs 
} from '@/app/lib/docs';
import { formatDate } from '@/app/lib/utils';
import Breadcrumbs from '@/components/docs/Breadcrumbs';
import MarkdownContent from '@/components/docs/MarkdownContent';

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function DocPage({ params }: PageProps) {
  const { slug } = params;
  const sectionSlug = slug[0];
  const docSlug = slug[1];

  // Get section and document data
  const section = getSectionBySlug(sectionSlug);
  const doc = docSlug ? getDocBySlug(docSlug) : null;
  const sectionDocs = section ? getDocsBySection(section.id) : [];
  const breadcrumbs = getBreadcrumbs(sectionSlug, docSlug);

  // If section doesn't exist, show 404
  if (!section) {
    notFound();
  }

  // If we're looking for a specific doc but it doesn't exist, show 404
  if (docSlug && !doc) {
    notFound();
  }

  // If we have a doc, show the document page
  if (doc) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{doc.title}</h1>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{doc.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span className="capitalize">{doc.difficulty}</span>
                  </div>
                  <span>Updated {formatDate(doc.lastUpdated)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Printer className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Tags */}
            {doc.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-lg p-8"
          >
            <MarkdownContent content={doc.content} videoUrl={doc.videoUrl} />
          </motion.div>

          {/* Feedback Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Was this article helpful?
              </h3>
              <div className="flex items-center justify-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  Yes
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                  No
                </button>
              </div>
              <button className="flex items-center gap-2 mx-auto mt-4 text-gray-600 hover:text-gray-900 transition-colors">
                <MessageSquare className="w-4 h-4" />
                Leave feedback
              </button>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center justify-between">
              <Link
                href={`/docs/${sectionSlug}`}
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {section.title}
              </Link>
              <div className="text-sm text-gray-500">
                Article {sectionDocs.findIndex(d => d.slug === docSlug) + 1} of {sectionDocs.length}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // If no specific doc, show section overview
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl">{section.description}</p>
        </motion.div>

        {/* Section Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {section.children?.map((child, index) => {
            const childDoc = getDocBySlug(child.slug);
            
            return (
              <motion.div
                key={child.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="glass rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <Link href={`/docs/${sectionSlug}/${child.slug}`}>
                  <div className="h-full">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-orange-600 transition-colors">
                      {child.title}
                    </h3>
                    {childDoc && (
                      <div className="space-y-3">
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {childDoc.content.substring(0, 150)}...
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{childDoc.estimatedTime}</span>
                          </div>
                          <span className="capitalize">{childDoc.difficulty}</span>
                        </div>
                        {childDoc.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {childDoc.tags.slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                            {childDoc.tags.length > 2 && (
                              <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs">
                                +{childDoc.tags.length - 2}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need more help with {section.title}?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive guides and tutorials to master {section.title.toLowerCase()} for your KCN Seniors website.
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
  );
}
