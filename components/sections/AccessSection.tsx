'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaTrain, FaCar, FaShoppingBag, FaUtensils, FaHospital } from 'react-icons/fa'

const AccessSection = () => {
  const facilities = [
    { icon: FaShoppingBag, name: 'コンビニ', distance: '徒歩2分' },
    { icon: FaUtensils, name: 'レストラン', distance: '徒歩5分' },
    { icon: FaHospital, name: '病院', distance: '徒歩10分' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nodoka-dark mb-6">
            アクセス
          </h2>
          <p className="text-xl text-nodoka-dark/70 max-w-3xl mx-auto">
            神戸市内の便利な立地に位置しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-nodoka-gray rounded-2xl overflow-hidden">
              <img
                src="/images/map.jpg"
                alt="シェアハウスのどか 地図"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-nodoka-gray">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-nodoka-orange text-4xl mx-auto mb-4" />
                  <p className="text-nodoka-dark/60">地図を読み込み中...</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Access Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-nodoka-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-nodoka-dark mb-6">住所</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-nodoka-orange mt-1" size={20} />
                  <div>
                    <p className="text-lg font-semibold text-nodoka-dark">
                      〒650-0013
                    </p>
                    <p className="text-nodoka-dark/80">
                      兵庫県神戸市中央区花隈町17-14
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Access */}
            <div className="bg-nodoka-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-nodoka-dark mb-6">アクセス</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaTrain className="text-nodoka-orange" size={20} />
                  <div>
                    <p className="font-semibold text-nodoka-dark">JR神戸線</p>
                    <p className="text-nodoka-dark/80">三ノ宮駅から徒歩15分</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaTrain className="text-nodoka-orange" size={20} />
                  <div>
                    <p className="font-semibold text-nodoka-dark">阪急神戸線</p>
                    <p className="text-nodoka-dark/80">三宮駅から徒歩15分</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCar className="text-nodoka-orange" size={20} />
                  <div>
                    <p className="font-semibold text-nodoka-dark">お車で</p>
                    <p className="text-nodoka-dark/80">阪神高速3号神戸線 京橋ICから5分</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Facilities */}
            <div className="bg-nodoka-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-nodoka-dark mb-6">周辺施設</h3>
              <div className="space-y-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <facility.icon className="text-nodoka-orange" size={20} />
                    <div className="flex justify-between w-full">
                      <p className="font-semibold text-nodoka-dark">{facility.name}</p>
                      <p className="text-nodoka-dark/80">{facility.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AccessSection
