import React from 'react';

const AboutTwo = () => {
  const items = [
    {
      title: 'Bug free code',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Premier support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      title: 'Regular updates',
      description: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative max-w-lg w-full">
              <img
                src="/about-image-2-dark.svg"
                alt="Startup Code"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            {items.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
