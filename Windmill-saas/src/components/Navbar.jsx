import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#08090d]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center gap-2">
            <img src="/logo-mark.png" alt="Windmill Logo" className="w-7 h-7 object-contain" />
            <span className="font-bold text-lg tracking-tight text-white">Windmill</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
            <a href="#resources" className="hover:text-white transition-colors">Resources</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Log in
            </button>
            <button className="bg-white hover:bg-gray-200 text-black text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Features
          </a>
          <a
            href="#solutions"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Solutions
          </a>
          <a
            href="#resources"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Resources
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white py-2 text-base font-medium"
          >
            Pricing
          </a>
          <div className="pt-4 flex flex-col gap-2">
            <button className="w-full text-center py-2 text-sm font-medium text-gray-300 hover:text-white">
              Log in
            </button>
            <button className="w-full bg-white text-black py-2 rounded-full font-semibold text-sm hover:bg-gray-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
