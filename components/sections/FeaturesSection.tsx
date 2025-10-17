'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaUsers, FaHome, FaCoffee, FaWifi, FaCar } from 'react-icons/fa'

const FeaturesSection = () => {
  const features = [
    {
      icon: FaHeart,
      title: 'のんびりスローライフ',
      description: '忙しい日常から離れて、心穏やかに過ごせる空間。自然と調和した生活を送ることができます。',
    },
    {
      icon: FaUsers,
      title: '情熱的な仲間たち',
      description: '仕事や趣味に全力で取り組む人たちが集まります。お互いを刺激し合い、成長できる環境です。',
    },
    {
      icon: FaHome,
      title: '快適な住環境',
      description: '清潔で居心地の良い部屋と共用スペース。一人の時間も、みんなとの時間も大切にできます。',
    },
    {
      icon: FaCoffee,
      title: 'コミュニティ活動',
      description: '定期的なイベントや交流会で、新しい出会いと友情を育むことができます。',
    },
    {
      icon: FaWifi,
      title: '充実した設備',
      description: '高速Wi-Fi、洗濯機、冷蔵庫など、生活に必要な設備が完備されています。',
    },
    {
      icon: FaCar,
      title: 'アクセス良好',
      description: '神戸市内の主要駅からアクセス良好。通勤・通学にも便利な立地です。',
    },
  ]

  return (
    <section className="py-20 bg-nodoka-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            シェアハウスのどかの特徴
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            のんびりとした時間の中で、情熱を持って人生を生きる人たちが集まる特別な場所
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-nodoka-orange/10 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="text-nodoka-orange text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-nodoka-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-nodoka-dark/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-nodoka-dark mb-8">
            のどかでの生活を動画で見る
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-nodoka-dark/10 rounded-2xl overflow-hidden">
              <img
                src="/images/video-thumbnail.jpg"
                alt="シェアハウスのどか紹介動画"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-nodoka-orange rounded-full flex items-center justify-center cursor-pointer hover:bg-nodoka-orange-dark transition-colors duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
