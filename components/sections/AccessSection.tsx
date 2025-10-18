'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaTrain, FaCar, FaShoppingBag, FaUtensils, FaBook, FaDumbbell, FaCoffee, FaStore } from 'react-icons/fa'

const AccessSection = () => {
  const facilities = [
    { icon: FaStore, name: '商店街', distance: '板宿駅直結' },
    { icon: FaShoppingBag, name: 'コンビニ', distance: '徒歩1分' },
    { icon: FaDumbbell, name: 'トレーニングジム', distance: '徒歩3分' },
    { icon: FaCoffee, name: 'カフェ', distance: '徒歩2分' },
    { icon: FaBook, name: '本屋', distance: '徒歩3分' },
    { icon: FaUtensils, name: '八百屋', distance: '徒歩2分' },
    { icon: FaShoppingBag, name: '古着屋', distance: '徒歩3分' },
    { icon: FaStore, name: 'サンディ（スーパー）', distance: '徒歩5分' },
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
            神戸市須磨区の便利な立地に位置しています
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
            <div className="aspect-square bg-nodoka-gray rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.2087654321!2d135.1234567!3d34.6581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzI5LjIiTiAxMzXCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="シェアハウスのどか 地図"
              />
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
                      〒654-0001
                    </p>
                    <p className="text-nodoka-dark/80">
                      兵庫県神戸市須磨区禅昌寺町1丁目27-5
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
                    <p className="font-semibold text-nodoka-dark">板宿駅</p>
                    <p className="text-nodoka-dark/80">神戸市営地下鉄・阪神電鉄から徒歩15分</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCar className="text-nodoka-orange" size={20} />
                  <div>
                    <p className="font-semibold text-nodoka-dark">神戸三宮駅から</p>
                    <p className="text-nodoka-dark/80">車で20分</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Facilities */}
            <div className="bg-nodoka-gray rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-nodoka-dark mb-6">周辺施設</h3>
              <p className="text-nodoka-dark/70 mb-4 text-sm">
                板宿駅を出ると商店街があって大体なんでも揃います
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <facility.icon className="text-nodoka-orange flex-shrink-0" size={16} />
                    <div className="flex justify-between w-full">
                      <p className="font-medium text-nodoka-dark text-sm">{facility.name}</p>
                      <p className="text-nodoka-dark/70 text-sm">{facility.distance}</p>
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