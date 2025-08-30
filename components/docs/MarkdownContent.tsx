'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, ExternalLink, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { copyToClipboard } from '@/app/lib/utils';

interface MarkdownContentProps {
  content: string;
  videoUrl?: string;
}

export default function MarkdownContent({ content, videoUrl }: MarkdownContentProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string, language: string) => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopiedCode(`${language}-${code.slice(0, 10)}`);
      toast.success('Code copied to clipboard!');
      setTimeout(() => setCopiedCode(null), 2000);
    } else {
      toast.error('Failed to copy code');
    }
  };

  const components = {
    h1: ({ children }: any) => (
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-2"
      >
        {children}
      </motion.h1>
    ),
    h2: ({ children }: any) => (
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-4 text-gray-900 mt-8"
      >
        {children}
      </motion.h2>
    ),
    h3: ({ children }: any) => (
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-medium mb-3 text-gray-900 mt-6"
      >
        {children}
      </motion.h3>
    ),
    p: ({ children }: any) => (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-gray-700 mb-4 leading-relaxed"
      >
        {children}
      </motion.p>
    ),
    ul: ({ children }: any) => (
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="list-disc list-outside mb-4 text-gray-700 space-y-2 pl-6"
      >
        {children}
      </motion.ul>
    ),
    ol: ({ children }: any) => (
      <motion.ol
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="list-decimal list-outside mb-4 text-gray-700 space-y-2 pl-6"
      >
        {children}
      </motion.ol>
    ),
    li: ({ children }: any) => (
      <li className="mb-1">{children}</li>
    ),
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      const code = String(children).replace(/\n$/, '');

      if (inline) {
        return (
          <code className="bg-gray-100 text-orange-600 px-2 py-1 rounded text-sm font-mono">
            {children}
          </code>
        );
      }

      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group mb-4"
        >
          <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-lg border-b border-gray-200">
            <span className="text-sm text-gray-600 font-mono">{language}</span>
            <button
              onClick={() => handleCopyCode(code, language)}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {copiedCode === `${language}-${code.slice(0, 10)}` ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          <SyntaxHighlighter
            style={tomorrow}
            language={language}
            PreTag="div"
            className="rounded-b-lg !mt-0"
            customStyle={{
              margin: 0,
              borderRadius: '0 0 0.5rem 0.5rem',
              fontSize: '0.875rem',
            }}
            {...props}
          >
            {code}
          </SyntaxHighlighter>
        </motion.div>
      );
    },
    pre: ({ children }: any) => (
      <div className="mb-4">{children}</div>
    ),
    blockquote: ({ children }: any) => (
      <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="border-l-4 border-orange-500 pl-4 italic text-gray-600 mb-4 bg-orange-50 p-4 rounded-r-lg"
      >
        {children}
      </motion.blockquote>
    ),
    a: ({ href, children }: any) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
      >
        {children}
        <ExternalLink className="w-3 h-3" />
      </a>
    ),
    // Enhanced table components
    table: ({ children }: any) => (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="overflow-x-auto mb-6 rounded-lg border border-gray-200 shadow-sm bg-white"
        style={{
          transition: 'all 250ms linear(0, 0.6796, 1.0326, 1.0275, 1.0011, 0.9981, 0.9997, 1)'
        }}
      >
        <table className="w-full border-collapse">
          {children}
        </table>
      </motion.div>
    ),
    thead: ({ children }: any) => (
      <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
        {children}
      </thead>
    ),
    tbody: ({ children }: any) => (
      <tbody>
        {children}
      </tbody>
    ),
    th: ({ children }: any) => (
      <th className="text-gray-900 px-4 py-3 text-left border-b border-gray-200 font-semibold text-sm sticky top-0 z-10">
        {children}
      </th>
    ),
    td: ({ children }: any) => (
      <td className="px-4 py-3 border-b border-gray-100 text-gray-700 align-top">
        {children}
      </td>
    ),
    tr: ({ children, ...props }: any) => (
      <tr 
        className="hover:bg-gray-50 transition-colors duration-200 even:bg-gray-50/50"
        {...props}
      >
        {children}
      </tr>
    )
  };

  return (
    <div className="markdown-content">
      {/* Video placeholder if available */}
      {videoUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Play className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Video Tutorial</h3>
              <p className="text-gray-600 text-sm">Watch a step-by-step guide</p>
            </div>
          </div>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-gray-600">Video tutorial coming soon</p>
              <p className="text-sm text-gray-500 mt-1">This feature will be available in the next update</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Markdown content */}
      <ReactMarkdown 
        components={components}
        remarkPlugins={[remarkGfm]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
