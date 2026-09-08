import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Stats from './components/Stats'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import WorldNetwork from './components/WorldNetwork'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Stats />
        <Services />
        <WhyChooseUs />
        <WorldNetwork />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
