function CTA() {
  return (
    <section className="py-16 px-6 bg-[#0d0d1a]">
      <div className="max-w-4xl mx-auto bg-indigo-600 rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Ready to try-out this template?
          </h2>
          <p className="text-indigo-200 text-sm">
            Start for free. No credit card required.
          </p>
        </div>
        <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-semibold px-7 py-3 rounded-full transition-colors duration-200 shrink-0">
          Get started for free
        </button>
      </div>
    </section>
  )
}

export default CTA
