import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import VideoSection from './components/VideoSection'
import Misunderstandings from './components/Misunderstandings'
import NoCode from './components/NoCode'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-orange-100 selection:text-orange-600">
      <header className="sticky top-0 z-50 w-full bg-[#fff9f5]/90 backdrop-blur-md border-b border-orange-100/60 transition-all">
        <Navbar />
      </header>
      <Hero />
      <Features />
      <VideoSection />
      <Misunderstandings />
      <NoCode />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  )
}

export default App
