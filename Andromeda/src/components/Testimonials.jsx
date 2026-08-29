import React from 'react'
import { Quote } from 'lucide-react'

function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#ff5722] uppercase">
            REAL USER REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            OUR TESTIMONIALS
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
          
          <div className="hidden lg:flex flex-col gap-6 relative">
            <div className="absolute -inset-4 bg-[#fed7aa] rounded-full filter blur-2xl opacity-40"></div>
            <div className="relative bg-white border border-slate-100 p-4 rounded-xl shadow-lg flex items-center gap-3 w-56 transform -rotate-3 hover:rotate-0 transition-transform">
              <img
                src="/06.jpg"
                alt="Sarah Jenkins"
                className="w-10 h-10 rounded-full object-cover border border-orange-200"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Sarah Jenkins</p>
                <p className="text-[10px] text-slate-500">UI/UX Designer</p>
              </div>
            </div>

            <div className="relative bg-white border border-slate-100 p-4 rounded-xl shadow-lg flex items-center gap-3 w-56 ml-6 transform rotate-2 hover:rotate-0 transition-transform">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 text-sm">
                MJ
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Michael John</p>
                <p className="text-[10px] text-slate-500">Product Designer</p>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-lg z-10">
            <div className="bg-[#ff5722] text-white p-8 sm:p-10 rounded-3xl shadow-xl text-center relative transform hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white rotate-180" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 font-normal">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus. Aliquam convallis pellentesque diam dolor."
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden bg-slate-900 mb-2">
                <img
                  src="/06.jpg"
                  alt="David Cameron"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h4 className="font-bold text-sm text-slate-900">David Cameron</h4>
              <p className="text-xs text-slate-500">CEO, Company</p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-6 relative">
            <div className="absolute -inset-4 bg-[#fed7aa] rounded-full filter blur-2xl opacity-40"></div>
            <div className="relative bg-white border border-slate-100 p-4 rounded-xl shadow-lg flex items-center gap-3 w-56 ml-4 transform rotate-3 hover:rotate-0 transition-transform">
              <img
                src="/06.jpg"
                alt="Emily Watson"
                className="w-10 h-10 rounded-full object-cover border border-orange-200"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Emily Watson</p>
                <p className="text-[10px] text-slate-500">Lead Marketer</p>
              </div>
            </div>

            <div className="relative bg-white border border-slate-100 p-4 rounded-xl shadow-lg flex items-center gap-3 w-56 transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700 text-sm">
                AL
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Alex Lee</p>
                <p className="text-[10px] text-slate-500">Frontend Engineer</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
