import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BenefitOne from './components/BenefitOne'
import BenefitTwo from './components/BenefitTwo'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d1a]">
      <Navbar />
      <Hero />
      <BenefitOne />
      <BenefitTwo />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
