import React from 'react';
import { Check } from 'lucide-react';

const AboutOne = () => {
  const points = [
    'Premium quality',
    'Tailwind CSS',
    'Developer friendly',
    'Regular updates',
    'Rich documentation',
    'Modern design',
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
              Crafted for Startup, SaaS and Business Sites.
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business-critical applications with interactive demos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-600/20 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-lg w-full">
              <img
                src="/about-image-dark.svg"
                alt="About Startup"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
