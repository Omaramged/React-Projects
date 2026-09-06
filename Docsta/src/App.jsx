import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import EditorSection from './components/EditorSection'
import KeyFeatures from './components/KeyFeatures'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-[#e2e8f0] flex flex-col font-sans selection:bg-[#0F7ED9] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <EditorSection />
        <KeyFeatures />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}

export default App
