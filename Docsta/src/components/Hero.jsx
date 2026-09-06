import React, { useState } from 'react'
import { Copy, Check, Star } from 'lucide-react'

function Hero() {
  const [copied, setCopied] = useState(false)
  const installCmd = 'npm install docsta'

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <section className="relative pt-16 pb-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] max-w-full opacity-35 pointer-events-none -z-10 flex items-center justify-center">
        <img
          src="/banner-bg.png"
          alt="Radar background"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-20 h-20 sm:w-24 sm:h-24 mb-8 flex items-center justify-center">
        <img
          src="/banner-logo.svg"
          alt="Docsta Logo"
          className="w-full h-full drop-shadow-[0_0_24px_rgba(15,126,217,0.45)]"
        />
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-3xl leading-tight mb-5">
        Launch Docs. Fast. Beautiful. Focused.
      </h1>

      <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-normal">
        docsta is a modern, minimal, and highly customizable documentation starter template for open-source projects, tools, or libraries.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-[#12141c] border border-white/10 rounded-full px-4 py-2 text-xs sm:text-sm text-gray-300 font-mono">
          <span className="text-gray-500">$</span>
          <span>{installCmd}</span>
          <button
            onClick={handleCopy}
            className="ml-1 text-gray-400 hover:text-white transition-colors"
            aria-label="Copy install command"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
        </div>

        <button className="bg-[#0F7ED9] hover:bg-[#0c6ec0] text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-full transition-all shadow-md shadow-blue-500/20">
          Get Started
        </button>
      </div>

      <p className="text-[11px] sm:text-xs text-gray-500 mb-3">
        MIT Licensed, v4.01 released on May 19, 2025
      </p>

      <div className="inline-flex items-center gap-1.5 bg-[#141620] border border-white/15 rounded-md px-2.5 py-1 text-xs text-white">
        <img src="/github-white.svg" alt="GitHub" className="w-3.5 h-3.5" />
        <div className="flex items-center gap-1 text-[11px]">
          <Star size={11} className="fill-white text-white" />
          <span>Star</span>
        </div>
        <span className="border-l border-white/20 pl-1.5 text-[10px] text-gray-400">1</span>
      </div>

      <button className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#0F7ED9] hover:bg-[#0c6ec0] text-white text-xs font-semibold px-3 py-2.5 rounded-l-md shadow-xl z-40 transition-all">
        Download Now
      </button>
    </section>
  )
}

export default Hero
