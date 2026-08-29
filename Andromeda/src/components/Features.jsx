import React from 'react'
import { ShieldCheck, Sliders, RefreshCw } from 'lucide-react'

function Features() {
  const featureList = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#ff5722]" />,
      title: 'Updated Security',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.'
    },
    {
      icon: <Sliders className="w-6 h-6 text-[#ff5722]" />,
      title: 'Magnetic Turning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#ff5722]" />,
      title: 'Secured & up-to-date',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#ff5722] uppercase">
            SPECIAL FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Elements To Get You Started
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#fff0ea] flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
