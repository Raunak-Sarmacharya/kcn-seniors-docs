'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <span className="text-4xl font-bold text-white">404</span>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-gray-400 mb-8">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4">
            <Link
              href="/docs"
              className="button-primary w-full flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Documentation
            </Link>
            
            <Link
              href="/search"
              className="button-secondary w-full flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              Search Documentation
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
