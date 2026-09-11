import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-40">
        <div className="w-[500px] h-[500px] rounded-full bg-blue-600/30 blur-[120px]"></div>
      </div>
      <div className="absolute top-10 right-10 -z-10 hidden lg:block pointer-events-none opacity-60">
        <svg width="450" height="400" viewBox="0 0 450 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" stroke="url(#paint0_linear)" strokeOpacity="0.3" strokeWidth="40" />
          <circle cx="211" cy="225" r="150" stroke="url(#paint1_linear)" strokeOpacity="0.25" strokeWidth="30" />
          <defs>
            <linearGradient id="paint0_linear" x1="-18.8968" y1="63" x2="277" y2="388" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="-10" y1="180" x2="245" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute -bottom-10 left-5 -z-10 hidden sm:block pointer-events-none opacity-40">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="90" cy="90" r="70" stroke="#4A6CF7" strokeWidth="6" strokeDasharray="10 10" />
          <circle cx="90" cy="90" r="40" stroke="#4A6CF7" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Free and Open-Source Next.js Template for Startup & SaaS
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
            Startup is free Next.js template for startups and SaaS businesses comes with all the essential pages, components, and needed other features to kickstart your project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-md shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
