import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => {
        setIsSubscribed(false)
      }, 4000)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mb-24">
      <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-blue-500/30 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-3 text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Sign up to our <br />
              newsletter.
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md">
              Stay updated with our latest offers, creative insights, and agency news directly in your inbox.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="relative max-w-md lg:ml-auto">
              <div className="flex items-center bg-white rounded-full p-1.5 shadow-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-5 pr-4 py-2.5 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 bg-[#080d27] hover:bg-slate-900 text-white p-3 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {isSubscribed && (
                <div className="absolute -bottom-8 left-4 flex items-center gap-1.5 text-xs text-white bg-emerald-600 px-3 py-1 rounded-full animate-fade-in">
                  <Check className="w-3.5 h-3.5" />
                  <span>Thanks for subscribing!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
