import { useState } from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'For individuals getting started with clean email.',
      features: [
        '1 Email Account',
        '5GB Cloud Storage',
        'Basic AI Assistant',
        'Community Support',
      ],
      isPopular: false,
      buttonText: 'Get Started',
    },
    {
      name: 'Pro',
      price: isYearly ? 12 : 15,
      description: 'For busy professionals and fast-moving teams.',
      features: [
        'Unlimited Accounts',
        '50GB Cloud Storage',
        'Advanced AI Summaries & Drafts',
        'Priority 24/7 Support',
        'Custom Workflow Automations',
      ],
      isPopular: true,
      buttonText: 'Subscribe Pro',
    },
    {
      name: 'Enterprise',
      price: isYearly ? 24 : 29,
      description: 'For organizations needing security & governance.',
      features: [
        'Unlimited Accounts & Storage',
        'Dedicated Account Manager',
        'Custom SLA & SAML SSO',
        'Audit Logs & Advanced Security',
        'Direct Phone Support',
      ],
      isPopular: false,
      buttonText: 'Contact Us',
    },
  ]

  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Pricing for Everyone
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Choose the perfect plan for you and your team.
          </p>

          <div className="mt-8 inline-flex items-center bg-[#151722] p-1 rounded-full border border-white/10">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                !isYearly ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                isYearly ? 'bg-white text-black font-semibold' : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all ${
                plan.isPopular
                  ? 'bg-[#12141f] border-2 border-purple-500 shadow-2xl shadow-purple-950/50 scale-105'
                  : 'bg-[#0f111a] border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">/ month</span>
                </div>

                <div className="space-y-3.5 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      <div className="p-0.5 rounded-full bg-purple-500/20 text-purple-400 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  plan.isPopular
                    ? 'bg-white hover:bg-gray-200 text-black shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
