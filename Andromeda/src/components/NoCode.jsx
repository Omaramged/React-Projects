import React from 'react'

function NoCode() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative max-w-md w-full">
              <img
                src="/features-02.png"
                alt="No-Code Analytics Feature"
                className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold tracking-widest text-[#ff5722] uppercase">
              EASY CUSTOMIZATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6 leading-tight">
              Say Hello To No-Code The Advance Creation
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus. Aliquam convallis pellentesque diam dolor. Suspendisse potenti.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoCode
