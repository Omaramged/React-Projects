import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = ['Features', 'Pricing', 'Company', 'Blog']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d1a]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Nextly" className="h-7 w-7" />
          <span className="text-white font-semibold text-lg">Nextly</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d0d1a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-full w-fit">
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
