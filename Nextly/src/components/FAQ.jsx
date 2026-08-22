import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const questions = [
  {
    q: 'Is this template completely free to use?',
    a: 'Yes, Nextly is completely free and open-source. You can use it for personal or commercial projects without any restrictions.'
  },
  {
    q: 'Do I need to purchase a license?',
    a: 'No, you do not need to purchase a license. The template is available under the MIT license, which allows you to use it freely.'
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Since this is a free template, there is nothing to cancel. You can use it as long as you want.'
  },
  {
    q: 'Do you give your agency a discount?',
    a: 'We offer special pricing for agencies and teams. Please contact us directly for more information about bulk pricing.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="py-20 px-6 bg-[#111128]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium text-sm mb-2">FAQ</p>
          <h2 className="text-3xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm">
            Answer your customers possible questions here. It will help them to buy your product. The FAQs are a great
            way to resolve your customer's doubts.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {questions.map((item, i) => (
            <div
              key={i}
              className="bg-[#0d0d1a] border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => toggleItem(i)}
              >
                <span className="text-white font-medium text-sm">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
