import { useState } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert(`Thanks for signing up with: ${email}`)
      setEmail('')
    }
  }

  return (
    <section className="relative pt-16 pb-20 overflow-hidden text-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-medium mb-8">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Introducing 2.0</span>
          <ArrowRight className="w-3 h-3 text-purple-400" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          Your Mailbox is simplified
        </h1>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Keep your team in sync with real-time conversations, automated workflows and powerful AI features built right in.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16 px-2">
          <div className="flex items-center bg-[#151722] border border-white/15 rounded-full p-1.5 focus-within:border-purple-500 transition-colors">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email..."
              className="w-full bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white hover:bg-gray-200 text-black text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full whitespace-nowrap transition-colors"
            >
              Get Started
            </button>
          </div>
        </form>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 rounded-2xl blur-xl opacity-75"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#0e1017]">
            <img
              src="/tablet-mockup.png"
              alt="Windmill Mail Dashboard"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
