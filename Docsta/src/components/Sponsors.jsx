import React from 'react'

function Sponsors() {
  const sponsors = [
    { name: 'Tailwind CSS', icon: '/sponsor-icon-1.svg' },
    { name: 'Open Collective', icon: '/sponsor-icon-2.svg' },
    { name: 'Netlify', icon: '/sponsor-icon-3.svg' },
    { name: 'React', icon: '/sponsor-icon-4.svg' },
    { name: 'CodePen', icon: '/sponsor-icon-5.svg' },
    { name: 'Vercel', icon: '/sponsor-icon-6.svg' }
  ]

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
        Sponsors
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-12">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity"
          >
            <img
              src={sponsor.icon}
              alt={sponsor.name}
              className="h-6 sm:h-7 w-auto object-contain max-w-[120px]"
            />
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto">
        <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
          Support docsta on{' '}
          <a href="#opencollective" className="text-[#0F7ED9] hover:underline">
            Open Collective
          </a>{' '}
          or{' '}
          <a href="#patreon" className="text-[#0F7ED9] hover:underline">
            Patreon
          </a>{' '}
          and help us to make it even better! Your support means a lot for us!
        </p>

        <button className="bg-[#0F7ED9] hover:bg-[#0c6ec0] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/20 transition-all">
          Checkout Docs
        </button>
      </div>
    </section>
  )
}

export default Sponsors
