import React from 'react'
import { CheckCircle2 } from 'lucide-react'

function WhyChooseUs() {
  const points = [
    {
      title: 'Quality',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Communication',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Reliability',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-72 h-80 sm:w-80 sm:h-96 bg-[#fed7aa]/40 rounded-3xl -z-10"></div>
              <img
                src="/iPad.png"
                alt="Why we best - iPad Mockup"
                className="w-full max-w-md h-auto object-contain relative z-10 drop-shadow-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why we best?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="space-y-6 pt-2">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 fill-emerald-50" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {point.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
