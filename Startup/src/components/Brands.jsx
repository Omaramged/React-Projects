import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'UIdeck', logo: '/uideck.svg' },
    { name: 'TailGrids', logo: '/tailgrids.svg' },
    { name: 'LineIcons', logo: '/lineicons.svg' },
    { name: 'AyroUI', logo: '/ayroui.svg' },
    { name: 'PlainAdmin', logo: '/plainadmin.svg' },
  ];

  return (
    <section className="py-16 bg-[#12173e]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 sm:h-9 w-auto max-w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
