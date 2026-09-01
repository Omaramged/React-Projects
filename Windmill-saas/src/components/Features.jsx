import { Zap, Sparkles, Users, WifiOff, Layers, Inbox } from 'lucide-react'

export default function Features() {
  const featureList = [
    {
      icon: Zap,
      title: 'Fast & Secure',
      description: 'Enterprise-grade encryption and ultra-fast syncing across all your devices.',
    },
    {
      icon: Sparkles,
      title: 'Smart AI Assist',
      description: 'Draft replies and summarize long email threads in seconds with built-in AI.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share drafts, delegate tasks, and collaborate without ever leaving your inbox.',
    },
    {
      icon: WifiOff,
      title: 'Offline Access',
      description: 'Read, write, and organize your emails even without an active internet connection.',
    },
    {
      icon: Layers,
      title: 'Custom Workflows',
      description: 'Automate repetitive email tasks with powerful custom rules and automated filters.',
    },
    {
      icon: Inbox,
      title: 'Multi-Account',
      description: 'Connect all your personal and work inboxes in one single unified workspace.',
    },
  ]

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Discover Our Amazing Features
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Powerful tools and automation built to streamline your communication and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f111a]/80 border border-white/5 hover:border-purple-500/40 hover:bg-[#131522] transition-all group"
              >
                <div className="p-3 rounded-xl bg-purple-900/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
