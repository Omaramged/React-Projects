export default function Brands() {
  const logos = [
    { name: 'Logo 1', src: '/logoipsum-288.svg' },
    { name: 'Logo 2', src: '/logoipsum-317.svg' },
    { name: 'Logo 3', src: '/logoipsum-321.svg' },
    { name: 'Logo 4', src: '/logoipsum-323.svg' },
    { name: 'Logo 5', src: '/logoipsum-330.svg' },
    { name: 'Logo 6', src: '/logoipsum-331.svg' },
  ]

  return (
    <section className="py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-widest text-gray-500 uppercase mb-8">
          Trusted by 10,000+ teams worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="h-7 sm:h-8 w-auto object-contain filter invert brightness-150 hover:brightness-200 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
