import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AlbumSection from '@/components/album/AlbumSection'

export default function AlbumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AlbumSection />
      <Footer />
    </main>
  )
}
