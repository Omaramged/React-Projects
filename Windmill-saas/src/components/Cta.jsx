export default function Cta() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161825] to-[#0d0f17] border border-white/10 p-10 sm:p-16 text-center shadow-2xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full pointer-events-none -z-10" />

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to get started?
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Experience the new standard of email. Start your 14-day free trial today with no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white hover:bg-gray-200 text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-white/10">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
