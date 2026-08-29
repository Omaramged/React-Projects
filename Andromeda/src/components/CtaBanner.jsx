import React from 'react'

function CtaBanner() {
  return (
    <section id="download" className="relative py-20 bg-[#fff9f5] overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-[#ff5722] opacity-80 pointer-events-none hidden sm:block"></div>
      <div className="absolute bottom-8 right-12 w-14 h-14 rounded-full bg-[#ffdccf] opacity-70 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-8 right-16 w-4 h-4 rounded-full bg-[#ff5722] opacity-80 pointer-events-none"></div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -50 100 C 300 200, 600 50, 1100 120 C 1400 180, 1600 80, 1900 150"
          fill="none"
          stroke="#ffab91"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
          Get Andromeda Now
        </h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.
        </p>
        <a
          href="#download"
          className="inline-block bg-[#ff5722] hover:bg-[#f4511e] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        >
          Download The App
        </a>
      </div>
    </section>
  )
}

export default CtaBanner
