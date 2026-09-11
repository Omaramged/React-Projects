import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-[#090e34]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center">
              <img src="/logo.svg" alt="Startup Logo" className="h-8 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-blue-500 font-medium text-sm transition">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition">
              About
            </a>
            <a href="#blog" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition">
              Blog
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-300 hover:text-blue-500 font-medium text-sm transition">
                Pages
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#12173e] border border-white/10 rounded-md shadow-xl py-2 hidden group-hover:block">
                <a href="#features" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20">
                  Features
                </a>
                <a href="#pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20">
                  Pricing
                </a>
                <a href="#contact" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-blue-600/20">
                  Support
                </a>
              </div>
            </div>
            <a href="#contact" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition">
              Support
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#signin" className="text-gray-300 hover:text-white font-medium text-sm px-4 py-2 transition">
              Sign In
            </a>
            <a
              href="#signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded-md transition shadow-md shadow-blue-600/20"
            >
              Sign Up
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#12173e] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block text-white font-medium text-sm py-2"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white font-medium text-sm py-2"
          >
            About
          </a>
          <a
            href="#blog"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white font-medium text-sm py-2"
          >
            Blog
          </a>
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white font-medium text-sm py-2"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white font-medium text-sm py-2"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-gray-300 hover:text-white font-medium text-sm py-2"
          >
            Support
          </a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#signin"
              className="text-center text-gray-300 hover:text-white font-medium text-sm py-2"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="text-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-md transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
