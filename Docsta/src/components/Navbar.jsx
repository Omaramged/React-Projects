import React from 'react'
import { Search, Star, Sun } from 'lucide-react'

function Navbar() {
  return (
    <header className="w-full border-b border-white/5 bg-[#08090d]/80 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/banner-logo.svg" alt="Docsta" className="w-6 h-6" />
          <span className="font-bold text-white text-base tracking-tight">Docsta</span>
          <span className="text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded font-mono ml-1">v4.01</span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:flex items-center gap-2 bg-[#141620] border border-white/10 rounded-md px-3 py-1.5 text-xs text-gray-400 w-44">
            <Search size={14} className="text-gray-400" />
            <span>Search</span>
          </div>

          <a href="#docs" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
            Docs
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-[#141620] hover:bg-[#1a1e2d] border border-white/15 text-xs px-2.5 py-1 rounded-md text-white transition-colors"
          >
            <img src="/github-white.svg" alt="GitHub" className="w-3.5 h-3.5" />
            <div className="flex items-center gap-1 text-[11px]">
              <Star size={11} className="fill-white" />
              <span>Star</span>
            </div>
            <span className="border-l border-white/20 pl-1.5 text-[10px] text-gray-400">1</span>
          </a>

          <button
            aria-label="Toggle theme"
            className="text-gray-400 hover:text-white p-1 rounded transition-colors"
          >
            <Sun size={17} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
