import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Features from './components/Features'
import Spotlight from './components/Spotlight'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-gray-100 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Brands />
        <Features />
        <Spotlight />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
