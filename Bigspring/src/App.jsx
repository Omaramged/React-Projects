import Header from './components/Header'
import FeatureCard from './components/FeatureCard'
import Footer from './components/Footer'

const featureCards = [
  {
    iconType: 'code',
    title: 'Cloud Suite',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    iconType: 'pointer',
    title: 'Online Standout',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    iconType: 'person',
    title: 'Self Service',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    iconType: 'heart',
    title: 'Value for Money',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    iconType: 'clock',
    title: 'Faster Response',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    iconType: 'cloud',
    title: 'Cloud Support',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.',
  },
]

function App() {
  return (
    <div className="font-sans text-gray-600 bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-0 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Let us solve your critical website<br />development challenges
          </h1>
          <p className="text-base text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our developer network today. Unlimited access to more than 500 top rated developers so that you can quickly and easily achieve your digital marketing goals.
          </p>
          <img
            src="/banner.svg"
            alt="Hero illustration"
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Something You Need To Know */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Something You Need To Know
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card) => (
              <FeatureCard
                key={card.title}
                iconType={card.iconType}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Row 1 - text left, image right */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                It is the most advanced digital marketing and it company.
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold transition-colors">
                Read More →
              </a>
            </div>
            <div className="flex-1">
              <img
                src="/service-slide-1.png"
                alt="Dashboard feature"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Row 2 - image left, text right */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="/service-slide-2.png"
                alt="Security feature"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                It is a privately owned Information and cyber security company
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold transition-colors">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Row 3 - text left, image right */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                It's a team of experienced and skilled people with distributions
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold transition-colors">
                Read More →
              </a>
            </div>
            <div className="flex-1">
              <img
                src="/service-slide-1.png"
                alt="Team feature"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Row 4 - image left, text right */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src="/service-slide-2.png"
                alt="Company feature"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
                A company standing different from others
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold transition-colors">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Experience the best<br />workflow with us
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src="/banner-art.svg"
            alt="Workflow illustration"
            className="w-full max-w-5xl mx-auto"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/cta.svg"
                alt="Get started illustration"
                className="w-48 sm:w-64"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Ready to get started?
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-full text-sm font-bold text-white bg-teal-500 hover:bg-teal-600 transition-colors duration-200 shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
