'use client'

import { motion } from 'framer-motion'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const MoveInGuideHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white">
          {/* Minimal geometric elements */}
          <div className="absolute top-20 right-20 w-2 h-32 bg-nodoka-orange/20 rotate-12" />
          <div className="absolute bottom-32 left-16 w-1 h-24 bg-nodoka-orange/15 rotate-45" />
          <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-nodoka-orange/10 -rotate-12" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-nodoka-dark mb-6">
                入居案内
              </h1>
              <div className="w-24 h-1 bg-nodoka-orange mx-auto mb-8"></div>
            </div>
            <p className="text-lg md:text-xl text-nodoka-dark/70 max-w-2xl mx-auto leading-relaxed">
              のどかでの新しい生活を始めませんか？
              <br />
              素敵な出会いが待っています
            </p>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200"
        >
          <div className="flex items-center space-x-2 text-nodoka-dark/70 text-sm">
            <FaHome className="w-3 h-3" />
            <FaChevronRight className="w-3 h-3" />
            <span className="font-medium">入居案内</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MoveInGuideHero
