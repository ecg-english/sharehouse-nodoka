'use client'

import { motion } from 'framer-motion'
import { FaHome, FaArrowRight, FaStar } from 'react-icons/fa'

const MoveInGuideHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-nodoka-orange/10 via-white to-nodoka-orange-light/10">
          {/* Decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-nodoka-orange/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-nodoka-orange-light/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-nodoka-orange/15 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <FaStar className="text-nodoka-orange text-3xl mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold text-nodoka-dark">
                入居案内
              </h1>
              <FaStar className="text-nodoka-orange text-3xl ml-4" />
            </div>
            <p className="text-xl md:text-2xl text-nodoka-dark/70 max-w-3xl mx-auto leading-relaxed">
              のどかでの新しい生活を始めませんか？
              <br />
              <span className="text-nodoka-orange font-semibold">素敵な出会い</span>が待っています✨
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-nodoka-orange/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-nodoka-orange rounded-full flex items-center justify-center">
                  <FaHome className="text-white text-xl" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-nodoka-dark">新しいお家</p>
                  <p className="text-sm text-nodoka-dark/70">素敵な住人と共に</p>
                </div>
              </div>
            </div>
            
            <FaArrowRight className="text-nodoka-orange text-2xl hidden sm:block" />
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-nodoka-orange/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-nodoka-orange rounded-full flex items-center justify-center">
                  <FaStar className="text-white text-xl" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-nodoka-dark">素敵な出会い</p>
                  <p className="text-sm text-nodoka-dark/70">人生を豊かにする</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-nodoka-orange/20"
        >
          <div className="flex items-center space-x-2 text-nodoka-dark">
            <FaHome className="w-4 h-4" />
            <span className="text-gray-400">&gt;</span>
            <span className="font-medium">入居案内</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MoveInGuideHero
