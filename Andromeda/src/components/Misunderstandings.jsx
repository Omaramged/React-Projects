import React from 'react'

function Misunderstandings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#ff5722] uppercase">
              PRODUCTIVITY APP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
              You Will Not Miss Your All Misunderstandings
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus. Aliquam convallis pellentesque diam dolor. Suspendisse potenti.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <img
                src="/features-01.png"
                alt="Productivity Feature Illustration"
                className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Misunderstandings
