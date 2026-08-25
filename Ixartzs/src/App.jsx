import Header from './components/Header'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Projects from './components/Projects'
import Posts from './components/Posts'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-gray-200">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        <Header />
        <Hero />
        <Sponsors />
        <Projects />
        <Posts />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default App
