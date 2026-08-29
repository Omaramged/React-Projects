import React, { useState } from 'react'
import { Play, X } from 'lucide-react'

function VideoSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="relative py-20 bg-[#fff9f5] overflow-hidden">
      <div className="absolute top-12 left-12 w-16 h-16 rounded-full bg-[#ff5722] opacity-80 pointer-events-none hidden sm:block"></div>
      <div className="absolute bottom-16 right-10 w-14 h-14 rounded-full bg-[#ff5722] opacity-80 pointer-events-none hidden sm:block"></div>
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-[#ffdccf] opacity-60 pointer-events-none hidden md:block"></div>
      <div className="absolute top-1/2 left-6 w-8 h-8 rounded-full bg-[#ffdccf] opacity-70 pointer-events-none"></div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -50 120 C 300 20, 600 250, 950 80 C 1200 -20, 1400 200, 1700 100"
          fill="none"
          stroke="#ffab91"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <path
          d="M -100 280 C 250 180, 700 380, 1100 200 C 1400 100, 1600 320, 1900 180"
          fill="none"
          stroke="#ffab91"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#ff5722] uppercase">
            LEARN MORE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-4">
            Built Exclusively For You
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-4 border-white">
          <img
            src="/video-popup.jpg"
            alt="Video Preview"
            className="w-full h-auto object-cover max-h-115 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="w-20 h-20 rounded-full bg-[#ff5722] hover:bg-[#f4511e] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 focus:outline-none"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-orange-400 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoSection
