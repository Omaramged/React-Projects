import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert('Thank you for subscribing!')
      setEmail('')
    }
  }

  return (
    <section className="py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-md">
          <h2 className="text-xl font-bold text-white mb-2">
            Subscribe to my <span className="text-cyan-400">Newsletters</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Tenetur vero
            esse non molestias eos excepturi, inventore atque cupiditate.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-[#172235] border border-slate-700/80 rounded-xl p-1.5 w-full md:w-auto shadow-inner"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email..."
            className="bg-transparent px-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none w-full md:w-56"
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-400 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors flex-shrink-0 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
