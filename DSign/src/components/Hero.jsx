import React from 'react'
import { Play } from 'lucide-react'

function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      <div className="absolute top-8 left-[12%] w-7 h-10 bg-amber-400 rounded-tr-full rounded-bl-full transform -rotate-45 opacity-90"></div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-md transform rotate-45 opacity-80"></div>
      <div className="absolute top-10 right-[15%] w-8 h-11 bg-sky-400 rounded-tl-full rounded-br-full transform rotate-12 opacity-90"></div>
      <div className="absolute top-44 right-[10%] w-5 h-5 bg-emerald-500 rounded-sm transform rotate-45 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.2] max-w-4xl mx-auto">
          Solve problem with an <br className="hidden sm:block" />
          integrated agency.
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          A generic agency providing creative solutions for brands and companies that desire high quality products and results.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-200 hover:scale-105 active:scale-95">
            Discover More
          </button>
          <button className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-200 shadow-sm transition-all duration-200 hover:border-slate-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 sm:mt-20 relative max-w-4xl mx-auto">
          <div className="absolute -top-4 left-10 w-40 h-8 bg-emerald-500 rounded-full blur-md opacity-40 -z-10"></div>
          <div className="absolute -top-4 right-10 w-44 h-8 bg-purple-500 rounded-full blur-md opacity-40 -z-10"></div>
          <div className="absolute top-1/2 -left-6 w-12 h-44 bg-sky-500 rounded-3xl blur-md opacity-30 -z-10"></div>
          <div className="absolute top-1/2 -right-6 w-12 h-44 bg-amber-400 rounded-3xl blur-md opacity-30 -z-10"></div>

          <div className="relative bg-white rounded-3xl p-2 sm:p-4 shadow-2xl shadow-slate-300/60 border border-slate-100">
            <img
              src="/dashboard.svg"
              alt="DSign Dashboard Platform"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
