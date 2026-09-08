import React from 'react'

function Partners() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-12 opacity-70 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter text-slate-600 hover:text-slate-900 transition-colors">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          <div className="flex items-center justify-center">
            <img src="/garnier.png" alt="Garnier" className="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-center">
            <img src="/slack.png" alt="Slack" className="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>

          <div className="flex items-center justify-center">
            <img src="/udemy.png" alt="Udemy" className="h-6 sm:h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>

          <div className="flex items-center gap-1 font-bold text-2xl tracking-tighter text-slate-600 hover:text-slate-900 transition-colors">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
