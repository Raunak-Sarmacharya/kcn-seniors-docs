'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Sidebar from '@/components/docs/Sidebar';
import Header from '@/components/docs/Header';
import { cn } from '@/app/lib/utils';
import { useAuth } from '@/app/lib/auth-client';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { checkAuth, startAutoRefresh, stopAutoRefresh } = useAuth();

  // Handle responsive sidebar behavior
  useEffect(() => {
    const handleResize = () => {
      // On desktop (lg and above), sidebar should be open by default
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        // On mobile, sidebar should be closed by default
        setIsSidebarOpen(false);
      }
    };
    
    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const userData = await checkAuth();
        if (userData) {
          setUser(userData);
          // Start automatic session refresh
          startAutoRefresh((updatedUser) => {
            if (updatedUser) {
              setUser(updatedUser);
            } else {
              // User was logged out, redirect to login
              router.push('/login');
            }
          });
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Cleanup function
    return () => {
      stopAutoRefresh();
    };
  }, [checkAuth, startAutoRefresh, stopAutoRefresh, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading documentation portal...</p>
        </motion.div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="dashboard-layout flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header 
          onMenuToggle={handleSidebarToggle} 
          user={user}
          isSidebarOpen={isSidebarOpen}
        />
        
        {/* Page content */}
        <main className="flex-1 overflow-auto bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
