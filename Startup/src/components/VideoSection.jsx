import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            We are ready to help
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
          <img
            src="/blog-01.jpg"
            alt="Team working together"
            className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#090e34]/30 flex items-center justify-center">
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-blue-600/90 text-white shadow-xl hover:bg-blue-600 hover:scale-110 transition duration-300 focus:outline-none"
              aria-label="Play video"
            >
              <span className="absolute -inset-2 rounded-full bg-blue-500/30 animate-ping"></span>
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 z-10 bg-black/50 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
