import React from 'react'
import { ArrowRight, BarChart3, Palette, Server, Compass } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Marketing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-100',
    },
    {
      icon: Server,
      title: 'Hosting',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      iconColor: 'text-sky-600',
      iconBg: 'bg-sky-100',
    },
    {
      icon: Compass,
      title: 'SEO & Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-100',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              We provide that <br />
              service.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <div className="pt-2">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#e6f4fe] rounded-3xl p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {services.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <div className={`w-12 h-12 rounded-xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-4`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
