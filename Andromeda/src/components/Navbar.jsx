import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Andromeda Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-slate-900 tracking-tight">Andromeda</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="text-orange-500 hover:text-orange-600 transition-colors">Home</a>
          <a href="#features" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#blog" className="hover:text-orange-500 transition-colors">Blog</a>
          <a href="#pages" className="hover:text-orange-500 transition-colors">Pages</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <a
            href="#download"
            className="inline-block bg-[#ff5722] hover:bg-[#f4511e] text-white text-sm font-medium px-6 py-2.5 rounded-md shadow-sm hover:shadow transition-all"
          >
            Get Andromeda Now
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-orange-500 font-medium py-1">Home</a>
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-orange-500 py-1">About</a>
          <a href="#blog" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-orange-500 py-1">Blog</a>
          <a href="#pages" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-orange-500 py-1">Pages</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-orange-500 py-1">Contact</a>
          <div className="pt-2">
            <a
              href="#download"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#ff5722] text-white text-sm font-medium px-6 py-2.5 rounded-md"
            >
              Get Andromeda Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
