import React from 'react'

function WorldNetwork() {
  const countries = [
    {
      name: 'America',
      flag: '/america.svg',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
    },
    {
      name: 'Australia',
      flag: '/australia.svg',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
    },
    {
      name: 'Bangladesh',
      flag: '/bangladesh.svg',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
    },
    {
      name: 'China',
      flag: '/china.svg',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-[#eaf4fd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] max-w-2xl mx-auto">
          Our network & world <br />
          work details.
        </h2>

        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto">
          <img
            src="/map.png"
            alt="World Network Map"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          {countries.map((country, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-sky-900/5 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-lg font-bold text-slate-900">
                  {country.name}
                </h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                {country.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldNetwork
