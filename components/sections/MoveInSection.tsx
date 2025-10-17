'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaHome, FaUsers, FaHeart } from 'react-icons/fa'

const MoveInSection = () => {
  const steps = [
    {
      icon: FaHome,
      title: '問い合わせ',
      description: 'まずはお気軽にお問い合わせください',
    },
    {
      icon: FaUsers,
      title: '見学',
      description: '実際の空間を見学していただけます',
    },
    {
      icon: FaHeart,
      title: '入居',
      description: '新しい生活の始まりです',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-nodoka-orange/5 to-nodoka-orange-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            入居案内
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            のどかでの新しい生活を始めませんか？
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-nodoka-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-nodoka-dark mb-3">
                {step.title}
              </h3>
              <p className="text-nodoka-dark/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/movein-guide"
            className="inline-flex items-center gap-3 btn-primary text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            詳細な入居案内を見る
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MoveInSection
