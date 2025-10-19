'use client'

import { motion } from 'framer-motion'
import { FaHome, FaChevronRight } from 'react-icons/fa'

const MoveInGuideHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white">
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
            className="mb-16"
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-light text-nodoka-dark mb-6 tracking-wide">
                入居案内
              </h1>
              <div className="w-24 h-1 bg-nodoka-orange mx-auto mb-8"></div>
            </div>
            <p className="text-lg md:text-xl text-nodoka-dark/60 max-w-2xl mx-auto leading-relaxed font-light">
              のどかでの新しい生活を始めませんか？
              <br />
              素敵な出会いが待っています
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <div className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-nodoka-orange/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nodoka-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-nodoka-orange/20 transition-colors duration-300">
                    <FaHome className="text-nodoka-orange text-xl" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-nodoka-dark mb-2">新しいお家</h3>
                    <p className="text-nodoka-dark/60 leading-relaxed">素敵な住人と共に過ごす、温かいコミュニティ</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-nodoka-orange/30">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nodoka-orange/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-nodoka-orange/20 transition-colors duration-300">
                    <svg className="w-5 h-5 text-nodoka-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-nodoka-dark mb-2">素敵な出会い</h3>
                    <p className="text-nodoka-dark/60 leading-relaxed">人生を豊かにする、多様な人々との交流</p>
                  </div>
                </div>
              </div>
            </div>
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
