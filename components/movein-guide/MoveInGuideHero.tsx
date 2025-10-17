'use client'

const MoveInGuideHero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-nodoka-orange/20 to-nodoka-orange-light/30">
          <img
            src="/images/movein-hero-bg.jpg"
            alt="入居案内"
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Background image with overlay text */}
          <div className="relative">
            <div className="aspect-[4/3] bg-nodoka-gray rounded-2xl overflow-hidden">
              <img
                src="/images/movein-hero-bg.jpg"
                alt="入居案内"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="flex space-x-2">
                  <span className="text-6xl font-bold text-yellow-400">G</span>
                  <span className="text-6xl font-bold text-blue-400">U</span>
                  <span className="text-6xl font-bold text-white">I</span>
                  <span className="text-6xl font-bold text-blue-400">D</span>
                  <span className="text-6xl font-bold text-blue-400">E</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Title */}
          <div className="text-center lg:text-left">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
              <h1 className="text-6xl font-bold text-nodoka-dark mb-8 writing-vertical">
                入居案内
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center space-x-2 text-nodoka-dark">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-gray-400">&gt;</span>
            <span className="font-medium">入居案内</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoveInGuideHero
