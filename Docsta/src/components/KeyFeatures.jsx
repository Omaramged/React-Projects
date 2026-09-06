import React from 'react'

function KeyFeatures() {
  const features = [
    {
      icon: '/key-icon-1.svg',
      title: 'Dark Mode Included',
      description: 'Automatically detects system preference and provides a toggle for seamless light and dark theme switching.'
    },
    {
      icon: '/key-icon-2.svg',
      title: 'SEO Ready',
      description: 'Includes meta tags, sitemap, and Open Graph settings to help your docs rank and preview well.'
    },
    {
      icon: '/key-icon-3.svg',
      title: 'Instant Deploy',
      description: 'Deploy instantly with Vercel or Netlify, or export static files for traditional hosting without hassle.'
    },
    {
      icon: '/key-icon-4.svg',
      title: 'Custom 404 Page',
      description: "Prebuilt 404 page matches your site's style, ensuring consistent experience even on broken links."
    },
    {
      icon: '/key-icon-5.svg',
      title: 'Versioned Docs',
      description: 'Supports multiple versions so users can easily switch between releases and find relevant information fast.'
    },
    {
      icon: '/key-icon-6.svg',
      title: 'MIT Licensed',
      description: 'Fully open-source and MIT licensed—use, modify, and distribute freely for personal or commercial projects.'
    }
  ]

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[#0F7ED9] text-xs font-semibold uppercase tracking-wider block mb-2">
          DOCSTA KEY FEATURES
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Everything You Need — Nothing You Don&apos;t
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5">
              <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm mb-1.5">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KeyFeatures
