import React from 'react'

function Hero() {
  const brandLogos = [
    { name: 'Airbnb', src: '/01-colored.png' },
    { name: 'Microsoft', src: '/02-colored.png' },
    { name: 'HubSpot', src: '/03-colored.png' },
    { name: 'Tumblr', src: '/04-colored.png' },
    { name: 'Microsoft', src: '/05-colored.png' },
  ]

  return (
    <section id="home" className="relative w-full overflow-hidden bg-[#fff9f5] pt-12 pb-16">
      <div className="absolute top-12 left-10 w-16 h-16 rounded-full bg-[#ff5722] opacity-90 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-36 left-20 w-12 h-12 rounded-full bg-[#ffdccf] opacity-60 pointer-events-none hidden md:block"></div>
      <div className="absolute top-1/3 right-12 w-14 h-14 rounded-full bg-[#ff5722] opacity-90 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-1/2 right-4 w-16 h-16 rounded-full bg-[#ffdccf] opacity-60 pointer-events-none hidden lg:block"></div>
      <div className="absolute top-8 left-1/3 w-6 h-6 rounded-full bg-[#ffdccf] opacity-80 pointer-events-none"></div>
      <div className="absolute top-24 right-1/4 w-4 h-4 rounded-full bg-[#ff5722] opacity-90 pointer-events-none"></div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100 150 C 200 50, 400 300, 700 120 C 1000 -60, 1200 250, 1600 80"
          fill="none"
          stroke="#ffab91"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M -50 300 C 300 200, 500 450, 900 220 C 1200 50, 1400 350, 1800 200"
          fill="none"
          stroke="#ffab91"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto">
          Andromeda is the most intuitive way to prototype Designs
        </h1>

        <div className="mt-12 sm:mt-16 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <img
              src="/banner-app.png"
              alt="Andromeda App Dashboard Mockup"
              className="w-full h-auto drop-shadow-2xl mx-auto transform hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 border-t border-slate-200/60 pt-8">
        <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-6 opacity-70 hover:opacity-100 transition-opacity">
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-8">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-6 sm:max-h-7 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
