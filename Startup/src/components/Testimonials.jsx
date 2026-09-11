import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        '“Our members are so impressed. It\'s intuitive. It\'s clean. It\'s also dynamic. Things are organized, they are easy to find and it looks amazing.”',
      author: 'Musharof Chy',
      role: 'Founder @ TailGrids',
      avatar: '/author-01.png',
    },
    {
      quote:
        '“Our members are so impressed. It\'s intuitive. It\'s clean. It\'s also dynamic. Things are organized, they are easy to find and it looks amazing.”',
      author: 'Devid Lethal',
      role: 'Founder @ GrayGrids',
      avatar: '/author-02.png',
    },
    {
      quote:
        '“Our members are so impressed. It\'s intuitive. It\'s clean. It\'s also dynamic. Things are organized, they are easy to find and it looks amazing.”',
      author: 'Joplin Dey',
      role: 'Founder @ UIdeck',
      avatar: '/author-03.png',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#12173e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Users Says
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#12173e] border border-white/5 p-8 rounded-xl shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                />
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
