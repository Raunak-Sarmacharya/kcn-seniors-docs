'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  BookOpen, 
  ChevronRight, 
  Sparkles,
  FileText,
  Zap
} from 'lucide-react';

export default function HomePage() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [pageCut, setPageCut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Staggered animation sequence
    const timer1 = setTimeout(() => setShowContent(true), 100);
    const timer2 = setTimeout(() => setShowParticles(true), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleOpenDocumentation = () => {
    setIsAnimating(true);
    
    // Page cutting effect
    setTimeout(() => setPageCut(true), 400);
    
    // Navigate after the cutting animation
    setTimeout(() => {
      router.push('/docs');
    }, 1200);
  };

  // Particle system
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Page cutting overlay */}
      <AnimatePresence>
        {pageCut && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 bg-white z-50 origin-top"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          />
        )}
      </AnimatePresence>

      {/* Advanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 45, 90, 135, 180],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 60, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/15 via-red-500/10 to-pink-500/15 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 0.8, 1.1, 0.9, 1.2],
            rotate: [180, 135, 90, 45, 0],
            x: [0, -60, 40, -30, 0],
            y: [0, 50, -60, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-indigo-500/15 rounded-full blur-3xl"
        />

        {/* Floating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/3 w-32 h-32 border border-orange-500/20 rounded-lg"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 right-1/3 w-24 h-24 border border-blue-500/20 rounded-full"
        />
      </div>

      {/* Particle system */}
      <AnimatePresence>
        {showParticles && (
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: particle.x + '%',
                  y: particle.y + '%'
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [particle.x + '%', (particle.x + Math.random() * 20 - 10) + '%'],
                  y: [particle.y + '%', (particle.y - Math.random() * 30) + '%'],
                }}
                transition={{
                  duration: 3,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{ width: particle.size, height: particle.size }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            {/* Enhanced animated logo card */}
            <motion.div
              animate={{
                rotateY: isAnimating ? 180 : 0,
                scale: isAnimating ? 1.1 : 1,
                y: isAnimating ? -20 : 0,
              }}
              transition={{
                rotateY: { duration: 1, ease: "easeInOut" },
                scale: { duration: 0.6, ease: "easeOut" },
                y: { duration: 0.8, ease: "easeOut" }
              }}
              className="inline-block mb-16"
            >
              <div className="relative">
                {/* Main card with enhanced effects */}
                <motion.div
                  className="w-32 h-40 bg-gradient-to-br from-orange-500 via-orange-400 to-blue-600 rounded-3xl shadow-2xl mx-auto relative overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 5,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Card content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-300 to-blue-500 rounded-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        rotate: isAnimating ? 360 : 0,
                        scale: isAnimating ? 1.2 : 1,
                      }}
                      transition={{
                        rotate: { duration: 0.8, ease: "easeInOut" },
                        scale: { duration: 0.4, ease: "easeOut" }
                      }}
                    >
                      <FileText className="w-12 h-12 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                  
                  {/* Enhanced shine effect */}
                  <motion.div
                    animate={{
                      x: [-30, 150, -30],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  />

                  {/* Energy pulse effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-3xl"
                  />
                </motion.div>
                
                {/* Enhanced floating sparkles */}
                <AnimatePresence>
                  {!isAnimating && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0, x: -15, y: -15 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0, x: -15, y: -15 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute -top-2 -left-2"
                      >
                        <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0, x: 15, y: -15 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0, x: 15, y: -15 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="absolute -top-2 -right-2"
                      >
                        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0, x: 0, y: 15 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0, x: 0, y: 15 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
                      >
                        <Zap className="w-4 h-4 text-orange-400 animate-pulse" />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Enhanced main title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-white via-orange-100 to-blue-100 bg-clip-text text-transparent mb-8 leading-tight"
            >
              KCN Seniors
            </motion.h1>
            
            {/* Enhanced subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-2xl mx-auto font-light"
            >
              Complete documentation for your website management system
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                y: -3,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleOpenDocumentation}
              disabled={isAnimating}
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-600 text-white font-bold text-2xl rounded-3xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              {/* Button background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Button content */}
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  animate={{
                    rotate: isAnimating ? 360 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                >
                  <BookOpen className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </motion.div>
                <span>Open Documentation</span>
                <motion.div
                  animate={{
                    x: isAnimating ? 10 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut"
                  }}
                >
                  <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>

          {/* Enhanced tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center text-gray-400"
          >
            <motion.p 
              className="text-xl font-light"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Everything you need to know, beautifully organized
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
