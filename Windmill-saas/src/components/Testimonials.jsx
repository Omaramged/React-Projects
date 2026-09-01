import { useState } from 'react'

export default function Testimonials() {
  const allReviews = [
    {
      name: 'Sarah Connor',
      handle: '@sarahc_dev',
      avatar: '/120.jpg',
      quote:
        'Windmill has fundamentally changed how I organize my customer support pipeline. The AI summaries save me at least 2 hours daily.',
    },
    {
      name: 'Alex Rivera',
      handle: '@arivera_design',
      avatar: '/150.jpg',
      quote:
        'The cleanest email client I have ever used. Fast, gorgeous UI and zero latency when switching between multiple client inboxes.',
    },
    {
      name: 'Elena Rostova',
      handle: '@elena_tech',
      avatar: '/120.jpg',
      quote:
        'Automated workflows are a game changer. Incoming tickets are instantly routed and drafted before I even wake up.',
    },
    {
      name: 'Marcus Vance',
      handle: '@marcusvance',
      avatar: '/150.jpg',
      quote:
        'Keyboard shortcuts are lightning fast. Moving through 200 emails takes 10 minutes instead of an entire afternoon.',
    },
    {
      name: 'David Kim',
      handle: '@davidkim_pm',
      avatar: '/150.jpg',
      quote:
        'Sharing draft responses with team members without forwarding email chains makes collaboration effortless.',
    },
    {
      name: 'Jessica Taylor',
      handle: '@jtaylor_ops',
      avatar: '/120.jpg',
      quote:
        'The offline mode saved me on flights multiple times. Everything syncs smoothly the second I reconnect.',
    },
    {
      name: 'Liam Nguyen',
      handle: '@liam_founder',
      avatar: '/150.jpg',
      quote:
        'Our whole engineering team switched to Windmill. It feels like an IDE tailored exclusively for email communication.',
    },
    {
      name: 'Chloe Bennett',
      handle: '@chloeb_mktg',
      avatar: '/120.jpg',
      quote:
        'Beautiful design, intuitive features, and top-tier support. I can never go back to regular webmail clients.',
    },
  ]

  const [visibleCount, setVisibleCount] = useState(8)

  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Love from our customers
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            See how modern teams transform their inbox experience every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {allReviews.slice(0, visibleCount).map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#0f111a] border border-white/5 hover:border-purple-500/30 flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">{review.name}</h4>
                  <span className="text-xs text-gray-400">{review.handle}</span>
                </div>
              </div>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                "{review.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => alert('All reviews are currently displayed!')}
            className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all"
          >
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}
