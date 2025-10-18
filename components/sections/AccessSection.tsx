'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { FaMapMarkerAlt, FaTrain, FaCar, FaShoppingBag, FaUtensils, FaHospital, FaBook, FaDumbbell, FaCoffee, FaStore } from 'react-icons/fa'

const AccessSection = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

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

  useEffect(() => {
    const loadMap = async () => {
      try {
        const { Loader } = await import('@googlemaps/js-api-loader')
        
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
          version: 'weekly',
          libraries: ['places']
        })

        await loader.load()

        if (mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: { lat: 34.6581, lng: 135.1234 }, // 神戸市須磨区禅昌寺町の座標
            zoom: 16,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
              }
            ]
          })

          new google.maps.Marker({
            position: { lat: 34.6581, lng: 135.1234 },
            map: map,
            title: 'シェアハウス のどか',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#FF6B35" stroke="#fff" stroke-width="2"/>
                  <text x="20" y="26" text-anchor="middle" fill="white" font-family="Arial" font-size="16" font-weight="bold">N</text>
                </svg>
              `),
              scaledSize: new google.maps.Size(40, 40),
              anchor: new google.maps.Point(20, 20)
            }
          })

          setMapLoaded(true)
        }
      } catch (error) {
        console.error('Google Maps loading error:', error)
        setMapLoaded(false)
      }
    }

    loadMap()
  }, [])

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
              <div 
                ref={mapRef} 
                className="w-full h-full"
                style={{ minHeight: '400px' }}
              />
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-nodoka-gray">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-nodoka-orange text-4xl mx-auto mb-4" />
                    <p className="text-nodoka-dark/60">地図を読み込み中...</p>
                  </div>
                </div>
              )}
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