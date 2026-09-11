import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import Brands from './components/Brands';
import AboutOne from './components/AboutOne';
import AboutTwo from './components/AboutTwo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#090e34] text-white selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VideoSection />
        <Brands />
        <AboutOne />
        <AboutTwo />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
