import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'Understand your customers',
    desc: 'Then if I can see some of the most beautiful offices you have ever seen in your life.'
  },
  {
    title: 'Improve your analytics',
    desc: 'Bigger is better! Make data-driven decisions and grow your business faster.'
  },
  {
    title: 'Drive customer obsession',
    desc: 'An ounce of prevention is worth a pound of cure. Give your customers the best experience.'
  }
]

function BenefitOne() {
  return (
    <section className="py-20 px-6 bg-[#111128]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/benefit-one.0f49b07f184f99faf0f58754d6aa47cd.png"
            alt="Benefits illustration"
            className="w-72 h-72 object-contain"
          />
        </div>

        <div>
          <p className="text-indigo-400 font-medium text-sm mb-2">Why should you use this</p>
          <h2 className="text-3xl font-bold text-white mb-4">
            Why should you use this landing page
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Semrush is the best way to get more customers and grow your business by helping you to create better content
            and improve your SEO. It is already used by more than 7,000,000 marketers worldwide.
          </p>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Highlight your benefits</h3>
            <p className="text-gray-400 text-sm mb-6">
              You can use this space to highlight your first benefit or a feature of your product. It can also be a
              closing statement, for when your visitor has scrolled to the very bottom of your page.
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
        </div>
      </div>
    </section>
  )
}

export default BenefitOne
