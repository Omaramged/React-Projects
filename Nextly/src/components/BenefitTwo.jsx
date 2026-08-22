import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'Mobile Responsive Template',
    desc: 'Nextly is designed to look great on all devices, from mobile to desktop.'
  },
  {
    title: 'Powered by Next.js & TailwindCSS',
    desc: 'This template is built using the latest version of Next.js and TailwindCSS.'
  },
  {
    title: 'Dark & Light Mode',
    desc: 'Nextly comes with dark and light mode out of the box. You can easily switch between the two.'
  }
]

function BenefitTwo() {
  return (
    <section className="py-20 px-6 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Offer more benefits here
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            You can use this space to highlight your first benefit or a feature of your product. It can also be a
            closing statement, for when your visitor has scrolled to the very bottom of your page. It can also be
            a call to action link.
          </p>
          <div className="flex flex-col gap-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/benefit-two.90262ab04379632ef5dac3ef6e836dfc.png"
            alt="Benefits illustration two"
            className="w-72 h-72 object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default BenefitTwo
