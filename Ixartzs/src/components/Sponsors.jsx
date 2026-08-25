function Sponsors() {
  const sponsors = [
    { name: "Clerk", image: "/clerk-logo-white.DOy6Sljo.png" },
    { name: "CodeRabbit", image: "/coderabbit-logo-dark.CIo2Poy3.svg" },
    { name: "Sentry", image: "/sentry-white.B7FnKYQt.png" },
    { name: "Arcjet", image: "/arcjet-dark.BzGE8rIA.svg" },
    { name: "Crowdin", image: "/crowdin-white.ZFJqjbmf.png" },
    { name: "Next.js Boilerplate", image: "/nextjs-boilerplate-saas.C9lr6Ni8.png" },
  ]

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-white mb-6">Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 border border-slate-700 rounded-lg overflow-hidden">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-6 border border-slate-700/80 hover:bg-slate-800/40 transition-colors h-28 cursor-pointer"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="max-h-10 max-w-[140px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Sponsors
