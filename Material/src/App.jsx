import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import WhyAttend from './components/WhyAttend';
import Highlights from './components/Highlights';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Sponsors />
        <WhyAttend />
        <Highlights />
        <Schedule />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
