'use client'

import { motion } from 'framer-motion'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const MoveInGuideHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white">
          {/* Refined geometric elements with shadows */}
          <div className="absolute top-20 right-20 w-2 h-32 bg-nodoka-orange/20 rotate-12 shadow-lg shadow-nodoka-orange/10" />
          <div className="absolute bottom-32 left-16 w-1 h-24 bg-nodoka-orange/15 rotate-45 shadow-md shadow-nodoka-orange/5" />
          <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-nodoka-orange/10 -rotate-12 shadow-sm shadow-nodoka-orange/5" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-nodoka-dark mb-8 tracking-tight flex justify-center items-center">
                {['入', '居', '案', '内'].map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ 
                      opacity: 0, 
                      x: -150, 
                      rotateZ: -360,
                      scale: 0.5
                    }}
                    animate={{ 
                      opacity: 1, 
                      x: 0, 
                      rotateZ: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 0.2 + (index * 0.15), 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 120,
                      damping: 12
                    }}
                    className="inline-block"
                    style={{
                      textShadow: '0 4px 20px rgba(255, 107, 53, 0.1)',
                      letterSpacing: '-0.02em',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8, 
                  ease: "easeOut" 
                }}
                className="w-32 h-1 bg-gradient-to-r from-transparent via-nodoka-orange to-transparent mx-auto mb-8"
                style={{
                  boxShadow: '0 2px 10px rgba(255, 107, 53, 0.3)'
                }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-2xl text-nodoka-dark/80 leading-relaxed font-medium mb-4">
                のどかでの新しい生活を始めませんか？
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-lg md:text-xl text-nodoka-orange font-semibold tracking-wide"
                style={{
                  textShadow: '0 2px 10px rgba(255, 107, 53, 0.2)'
                }}
              >
                素敵な出会いが待っています
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Breadcrumbs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300"
          style={{
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="flex items-center space-x-3 text-nodoka-dark/70 text-sm">
            <FaHome className="w-4 h-4" />
            <FaChevronRight className="w-3 h-3" />
            <span className="font-semibold tracking-wide">入居案内</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MoveInGuideHero
