function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-10 gap-8">
      <div className="flex-1 max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Hi there, I'm <span className="text-cyan-400">Ixartz</span> 👋
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
          <a href="#" className="text-cyan-400 hover:underline">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a href="#" className="text-cyan-400 hover:underline">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="transition-transform hover:scale-110">
            <img src="/twitter-icon.png" alt="Twitter" className="w-7 h-7" />
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <img src="/facebook-icon.png" alt="Facebook" className="w-7 h-7" />
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-7 h-7" />
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <img src="/youtube-icon.png" alt="YouTube" className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src="/avatar.svg"
          alt="Ixartz Avatar"
          className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
        />
      </div>
    </section>
  )
}

export default Hero
