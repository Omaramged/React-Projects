import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How does the 14-day free trial work?',
      answer:
        'You can start exploring all Pro features immediately for 14 days without entering credit card details. You will only be billed if you choose to upgrade.',
    },
    {
      question: 'Can I change or cancel my plan anytime?',
      answer:
        'Yes, you can upgrade, downgrade, or cancel your subscription at any point directly from your account settings with zero penalties.',
    },
    {
      question: 'Is my email data secure and encrypted?',
      answer:
        'Absolutely. We utilize enterprise-grade AES-256 encryption at rest and in transit. Your private emails and credentials are never sold or shared.',
    },
    {
      question: 'Do you support custom domains and Google / Outlook?',
      answer:
        'Yes, Windmill connects seamlessly with Gmail, Google Workspace, Outlook, Office 365, iCloud, and custom IMAP/SMTP mail servers.',
    },
    {
      question: 'Can my entire team collaborate on one shared inbox?',
      answer:
        'Yes! With team features enabled, you can assign emails, write internal comments, and co-draft responses without forwarding chains.',
    },
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="resources" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Find quick answers to common questions about features, pricing, and integrations.
            </p>
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Have more questions? Contact support</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-2xl bg-[#0f111a] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180 text-purple-400' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
