import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Collections from '@/components/collections'
import Craftsmanship from '@/components/craftsmanship'
import Founder from '@/components/founder'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Collections />
      <Craftsmanship />
      <Founder />
      <Footer />
    </main>
  )
}
