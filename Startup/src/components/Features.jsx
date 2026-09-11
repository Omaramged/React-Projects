import React from 'react';
import { LayoutGrid, Sparkles, Box, Zap, Sliders, RefreshCw } from 'lucide-react';

const Features = () => {
  const featureList = [
    {
      icon: <LayoutGrid className="w-7 h-7 text-blue-500" />,
      title: 'Crafted for Startups',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      icon: <Sparkles className="w-7 h-7 text-blue-500" />,
      title: 'High-quality Design',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      icon: <Box className="w-7 h-7 text-blue-500" />,
      title: 'All Essential Components',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      icon: <Zap className="w-7 h-7 text-blue-500" />,
      title: 'Speed Optimized',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      icon: <Sliders className="w-7 h-7 text-blue-500" />,
      title: 'Fully Customizable',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-blue-500" />,
      title: 'Regular Updates',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Main Features
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-transparent hover:bg-[#12173e]/60 border border-transparent hover:border-white/5 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <div className="group-hover:text-white transition">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
