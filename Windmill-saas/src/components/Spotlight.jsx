import { CheckCircle2 } from 'lucide-react'

export default function Spotlight() {
  const points1 = [
    {
      title: 'Instant Sync',
      desc: 'Changes sync instantaneously across phone, desktop and web.',
    },
    {
      title: 'Smart Notifications',
      desc: 'Never miss high-priority clients with intelligent filtering.',
    },
    {
      title: 'Offline Mode',
      desc: 'Keep working wherever you are, anytime without lag.',
    },
  ]

  const points2 = [
    {
      title: 'Unified Inbox',
      desc: 'One central hub for all your team and personal communications.',
    },
    {
      title: 'AI Summaries',
      desc: 'Get key takeaways from long threads in a single instant click.',
    },
    {
      title: 'Custom Shortcuts',
      desc: 'Snooze, archive, or label with lightning-fast keybindings.',
    },
  ]

  return (
    <section id="solutions" className="py-20 overflow-hidden space-y-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Stay on top of your business
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Designed for modern professionals who want to reclaim their time and achieve inbox zero effortlessly.
            </p>

            <div className="space-y-5 pt-4">
              {points1.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-purple-500/20 text-purple-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{point.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-purple-900/20 via-zinc-800/40 to-transparent border border-white/5 -z-10" />
            <img
              src="/phone-mockup.png"
              alt="Mobile App Preview"
              className="w-full max-w-[280px] sm:max-w-[340px] drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8">
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-zinc-800/40 via-purple-900/20 to-transparent border border-white/5 -z-10" />
            <img
              src="/phone-mockup.png"
              alt="Mobile App Preview"
              className="w-full max-w-[280px] sm:max-w-[340px] drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Stay on top of your business
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Experience seamless organization with automated prioritization and collaborative drafts.
            </p>

            <div className="space-y-5 pt-4">
              {points2.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-purple-500/20 text-purple-400 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{point.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
