import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-12 py-8 bg-[#08090d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p className="text-center md:text-left">
          © docsta. All rights reserved Created by Getnextjstemplates.com • Distributed by ThemeWagon
        </p>

        <div className="flex items-center gap-6 text-gray-400">
          <a href="#docs" className="hover:text-white transition-colors">
            Project Docs
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Github
          </a>
          <a href="#license" className="hover:text-white transition-colors">
            License
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
