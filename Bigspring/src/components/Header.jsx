import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Bigspring" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">Bigspring</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-xs font-semibold text-gray-600 hover:text-teal-500 tracking-widest">TEAM</a>
            <a href="#" className="text-xs font-semibold text-gray-600 hover:text-teal-500 tracking-widest">BLOG</a>
            <a href="#" className="text-xs font-semibold text-gray-600 hover:text-teal-500 tracking-widest">PRICING</a>
            <a href="#" className="text-xs font-semibold text-gray-600 hover:text-teal-500 tracking-widest">CONTACT</a>
            <a href="#" className="text-xs font-semibold text-gray-600 hover:text-teal-500 tracking-widest">FAQ</a>
          </nav>

          <a
            href="#"
            className="hidden md:inline-block px-5 py-2 rounded-full text-xs font-bold text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-200 tracking-wider"
          >
            GET STARTED
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 focus:outline-none"
            type="button"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-3 pt-3">
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-teal-500">TEAM</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-teal-500">BLOG</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-teal-500">PRICING</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-teal-500">CONTACT</a>
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-teal-500">FAQ</a>
            <a href="#" className="mt-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-teal-500 text-center">GET STARTED</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
