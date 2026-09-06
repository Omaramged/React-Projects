import React from 'react'
import { Check } from 'lucide-react'

function Features() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
        Designed For Developer Flow
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#10121a] border border-white/10 rounded-xl p-6 flex flex-col justify-center gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              Routing Setup
            </span>
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              Layout System
            </span>
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              Markdown Support
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              Dark Mode
            </span>
            <span className="flex items-center gap-1.5 bg-[#0F7ED9] text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-md shadow-blue-500/20">
              <Check size={12} className="text-white" />
              Utility Styling
            </span>
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              SEO Defaults
            </span>
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              GitHub...
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              Custom 404 Page
            </span>
            <span className="flex items-center gap-1.5 bg-[#171a24] border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              <Check size={12} className="text-gray-400" />
              Deployment
            </span>
          </div>
        </div>

        <div className="bg-[#10121a] border border-white/10 rounded-xl p-6 flex flex-col items-start justify-center">
          <div className="mb-3">
            <img src="/build-icon.svg" alt="Built with Tailwind" className="w-6 h-6" />
          </div>
          <h3 className="text-white font-semibold text-base mb-1.5">
            Built with Tailwind
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Fully customizable styling with utility-first CSS.
          </p>
        </div>

        <div className="bg-[#10121a] border border-white/10 rounded-xl p-6 flex flex-col items-start justify-center">
          <div className="mb-3">
            <img src="/play-icon.svg" alt="Fast Setup" className="w-6 h-6" />
          </div>
          <h3 className="text-white font-semibold text-base mb-1.5">
            Fast Setup
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Get up and running in minutes with built-in routing, layouts, SEO, and styling—all preconfigured and ready.
          </p>
        </div>

        <div className="bg-[#10121a] border border-white/10 rounded-xl p-6 flex flex-col items-start justify-center">
          <div className="mb-3">
            <img src="/mdx-icon.svg" alt="Write in MDX" className="w-6 h-6" />
          </div>
          <h3 className="text-white font-semibold text-base mb-1.5">
            Write in MDX
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Mix Markdown and JSX for expressive documentation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
