function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-[#0d0d1a] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/2 w-48 h-48 bg-purple-600/15 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Free Landing Page Template for startups
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
            Nextly is a free landing page & marketing website template for startups and indie projects. Built with Next.js &
            TailwindCSS. And it is completely open-source.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 flex items-center gap-2">
              Download for free
            </button>
            <button className="border border-white/20 text-gray-300 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-full transition-colors duration-200">
              Try Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-indigo-600/20 flex items-center justify-center relative">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-500/30 rounded-full blur-xl" />
            <img
              src="/benefit-one.0f49b07f184f99faf0f58754d6aa47cd.png"
              alt="Hero illustration"
              className="w-64 h-64 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16">
        <p className="text-center text-gray-500 text-sm mb-8">Trusted by companies like</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50">
          <span className="text-gray-400 font-bold text-xl tracking-wide">amazon</span>
          <span className="text-gray-400 font-bold text-xl tracking-wide">verizon</span>
          <span className="text-gray-400 font-bold text-xl tracking-wide">⊞ Microsoft</span>
          <span className="text-gray-400 font-bold text-xl tracking-wide">NETFLIX</span>
          <span className="text-gray-400 font-bold text-xl tracking-wide">SONY</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
