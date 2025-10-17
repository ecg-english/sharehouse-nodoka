'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-nodoka-orange/20 to-nodoka-orange-light/30">
          <img
            src="/images/hero-bg.jpg"
            alt="シェアハウスのどか"
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-nodoka-dark mb-6">
            <span className="block">シェアハウス</span>
            <span className="block text-nodoka-orange">のどか</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-nodoka-dark/80 max-w-3xl mx-auto leading-relaxed">
            のんびりスローライフの中に情熱を持って全力で人生を生きる
            <br />
            そんな人たちが集まる場所
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Link
              href="/movein-guide"
              className="btn-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              入居案内を見る
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-nodoka-orange rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-nodoka-orange rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
