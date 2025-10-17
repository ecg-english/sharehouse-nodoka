import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import GallerySection from '@/components/sections/GallerySection'
import MoveInSection from '@/components/sections/MoveInSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import AccessSection from '@/components/sections/AccessSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <MoveInSection />
      <TestimonialsSection />
      <AccessSection />
      <Footer />
    </main>
  )
}
