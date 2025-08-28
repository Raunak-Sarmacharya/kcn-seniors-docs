'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem {
  title: string;
  slug: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="/docs"
          className="flex items-center gap-1 hover:text-primary-400 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Documentation</span>
        </Link>
      </motion.div>

      {items.map((item, index) => (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + (index + 1) * 0.1 }}
          className="flex items-center space-x-2"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
          {index === items.length - 1 ? (
            <span className="text-white font-medium">{item.title}</span>
          ) : (
            <Link
              href={item.slug}
              className="hover:text-primary-400 transition-colors"
            >
              {item.title}
            </Link>
          )}
        </motion.div>
      ))}
    </nav>
  );
}
