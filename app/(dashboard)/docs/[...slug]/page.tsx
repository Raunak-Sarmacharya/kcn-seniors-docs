'use client';

import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  Printer
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  getAllSections, 
  getSectionBySlug, 
  getMarkdownDocBySlug, 
  getMarkdownDocsBySection,
  getBreadcrumbs,
  DocContent
} from '@/app/lib/markdown-docs';
import { formatDate } from '@/app/lib/utils';
import Breadcrumbs from '@/components/docs/Breadcrumbs';
import MarkdownContent from '@/components/docs/MarkdownContent';
import html2pdf from 'html2pdf.js';



interface PageProps {
  params: {
    slug: string[];
  };
}

export default function DocPage({ params }: PageProps) {
  const { slug } = params;
  const sectionSlug = slug[0];
  const docSlug = slug[1];

  // State for dynamic data
  const [doc, setDoc] = useState<DocContent | null>(null);
  const [sectionDocs, setSectionDocs] = useState<DocContent[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ title: string; slug: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [shareCopied, setShareCopied] = useState(false);
  const [printLoading, setPrintLoading] = useState(false);



  // Get section data (this is static)
  const section = getSectionBySlug(sectionSlug);

  // If section doesn't exist, show 404
  if (!section) {
    notFound();
  }



  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionSlug, docSlug]);



  // Share handler
  const handleShare = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setShareCopied(true);
      
      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setShareCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShareCopied(true);
      setTimeout(() => {
        setShareCopied(false);
      }, 2000);
    }
  };

  // Print handler
  const handlePrint = async () => {
    if (!doc) return;
    
    setPrintLoading(true);

    try {
      // Create a temporary container for the PDF content
      const printContainer = document.createElement('div');
      printContainer.style.padding = '40px';
      printContainer.style.fontFamily = 'Arial, sans-serif';
      printContainer.style.lineHeight = '1.6';
      printContainer.style.color = '#333';
    
    // Add title
    const title = document.createElement('h1');
    title.textContent = doc.title;
    title.style.fontSize = '28px';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '20px';
    title.style.color = '#1f2937';
    title.style.borderBottom = '2px solid #f97316';
    title.style.paddingBottom = '10px';
    printContainer.appendChild(title);

    // Add reading time
    const readingTime = document.createElement('p');
    readingTime.textContent = `Reading time: ${doc.estimatedTime}`;
    readingTime.style.fontSize = '14px';
    readingTime.style.color = '#6b7280';
    readingTime.style.marginBottom = '30px';
    readingTime.style.fontStyle = 'italic';
    printContainer.appendChild(readingTime);

    // Add content (strip HTML tags for clean text)
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = doc.htmlContent;
    
    // Style the content for PDF
    const style = document.createElement('style');
    style.textContent = `
      h1, h2, h3, h4, h5, h6 { 
        color: #1f2937; 
        margin-top: 20px; 
        margin-bottom: 10px; 
        font-weight: bold; 
      }
      h1 { font-size: 24px; }
      h2 { font-size: 20px; }
      h3 { font-size: 18px; }
      p { margin-bottom: 12px; }
      ul, ol { margin-bottom: 12px; padding-left: 20px; }
      li { margin-bottom: 4px; }
      table { border-collapse: collapse; width: 100%; margin: 15px 0; }
      th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
      th { background-color: #f3f4f6; font-weight: bold; }
      code { background-color: #f3f4f6; padding: 2px 4px; border-radius: 3px; font-family: monospace; }
      pre { background-color: #f3f4f6; padding: 10px; border-radius: 5px; overflow-x: auto; }
      blockquote { border-left: 4px solid #f97316; padding-left: 15px; margin: 15px 0; font-style: italic; }
    `;
    printContainer.appendChild(style);
    printContainer.appendChild(contentDiv);

    // Add footer
    const footer = document.createElement('div');
    footer.style.marginTop = '40px';
    footer.style.paddingTop = '20px';
    footer.style.borderTop = '1px solid #d1d5db';
    footer.style.fontSize = '12px';
    footer.style.color = '#6b7280';
    footer.style.textAlign = 'center';
    footer.innerHTML = `
      <p>KCN Seniors Documentation</p>
      <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      <p>Source: ${window.location.href}</p>
    `;
    printContainer.appendChild(footer);

    // Configure PDF options
    const opt = {
      margin: [10, 10, 10, 10],
      filename: `${doc.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' 
      }
    };

    // Generate and download PDF
    await html2pdf().set(opt).from(printContainer).save();
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    setPrintLoading(false);
  }
};

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Fetch document if we have a docSlug
        if (docSlug) {
          const docData = await getMarkdownDocBySlug(docSlug);
          setDoc(docData);
        }

        // Fetch section docs
        if (section) {
          const sectionDocsData = await getMarkdownDocsBySection(section.id);
          setSectionDocs(sectionDocsData);
        }

        // Get breadcrumbs
        const breadcrumbsData = await getBreadcrumbs(sectionSlug, docSlug);
        setBreadcrumbs(breadcrumbsData);
      } catch (error) {
        console.error('Error fetching documentation:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [sectionSlug, docSlug, section?.id]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading documentation...</p>
        </div>
      </div>
    );
  }

  // If we're looking for a specific doc but it doesn't exist, show 404
  if (docSlug && !doc) {
    notFound();
  }

  // If we have a doc, show the document page
  if (doc) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
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
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button 
                  onClick={handleShare}
                  className={`p-2 rounded-lg transition-all duration-300 relative group ${
                    shareCopied 
                      ? 'bg-green-100 text-green-600' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={shareCopied ? { 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    } : {}}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Share2 className="w-5 h-5 group-hover:text-orange-600 transition-colors" />
                  </motion.div>
                  {shareCopied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }
                      }}
                      exit={{ opacity: 0, y: -10, scale: 0.8 }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10"
                    >
                      <div className="flex items-center gap-1">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring", stiffness: 500 }}
                          className="w-2 h-2 bg-white rounded-full"
                        />
                        Copied to clipboard!
                      </div>
                    </motion.div>
                  )}
                </motion.button>
                <motion.button 
                  onClick={handlePrint}
                  disabled={printLoading}
                  className={`p-2 rounded-lg transition-colors group relative ${
                    printLoading 
                      ? 'bg-orange-100 text-orange-600 cursor-not-allowed' 
                      : 'hover:bg-gray-100 text-gray-600'
                  }`}
                  title={printLoading ? "Generating PDF..." : "Download as PDF"}
                  whileHover={printLoading ? {} : { scale: 1.05 }}
                  whileTap={printLoading ? {} : { scale: 0.95 }}
                >
                  {printLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5"
                    >
                      <Printer className="w-5 h-5 text-orange-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      whileHover={{ 
                        rotate: [0, 5, -5, 0],
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Printer className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
                    </motion.div>
                  )}
                  {printLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }
                      }}
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-10"
                    >
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 border-2 border-white border-t-transparent rounded-full"
                        />
                        Generating PDF...
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              </div>
            </div>

            {/* Tags */}
            {doc.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                            {doc.tags.map((tag: string) => (
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

  // If no specific doc, check if section has children or show section content
  if (section.children && section.children.length > 0) {
    // Section has children, show section overview
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
            <p className="text-xl text-gray-600 max-w-4xl">{section.description}</p>
          </motion.div>

          {/* Section Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {section.children.map((child, index) => {
              const childDoc = sectionDocs.find(doc => doc.slug === child.slug);
              
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
                          </div>
                          {childDoc.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {childDoc.tags.slice(0, 2).map((tag: string) => (
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
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                View troubleshooting guides and video tutorials for additional support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/docs/troubleshooting/common-issues"
                  className="button-primary"
                >
                  View Troubleshooting
                </Link>
                <Link
                  href="/docs/video-tutorials"
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
  } else {
    // Section has no children, show section content directly
    const sectionDoc = sectionDocs.find(doc => doc.slug === sectionSlug);
    
    if (sectionDoc) {
      return (
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
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
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{sectionDoc.title}</h1>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{sectionDoc.estimatedTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {sectionDoc.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {sectionDoc.tags.map((tag: string) => (
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
              <MarkdownContent content={sectionDoc.content} videoUrl={sectionDoc.videoUrl} />
            </motion.div>
          </div>
        </div>
      );
    }
  }
}
