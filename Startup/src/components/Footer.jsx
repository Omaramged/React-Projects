import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#090e34] pt-20 pb-12 border-t border-white/10 overflow-hidden">
      <div className="absolute right-0 bottom-0 -z-10 opacity-30 pointer-events-none hidden sm:block">
        <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#4A6CF7" strokeWidth="20" strokeOpacity="0.3" />
          <circle cx="200" cy="200" r="120" stroke="#4A6CF7" strokeWidth="15" strokeOpacity="0.2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="inline-block">
              <img src="/logo.svg" alt="Startup" className="h-8 w-auto" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition"
                aria-label="Youtube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 text-gray-400 hover:text-white flex items-center justify-center transition"
                aria-label="Linkedin"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Useful Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#blog" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Terms
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  TOS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-5">
              Support & Help
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  Open Ticket
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-blue-500 transition">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-gray-500">
            Template by{' '}
            <a
              href="https://uideck.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              UIdeck
            </a>{' '}
            and{' '}
            <a
              href="https://tailgrids.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              TailGrids
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
