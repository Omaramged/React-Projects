const testimonials = [
  {
    name: 'Sara Lobkowicz',
    role: 'Software Developer',
    image: '/user1.bed8d08ca54e52f2003da5ce7a4ae543.jpg',
    text: 'Blown away by how good this template looks out of the box. It saved me a ton of time and looks great for my personal customer.'
  },
  {
    name: 'Divya Gosine',
    role: 'Marketing Manager',
    image: '/user2.3619e52a934ed9b4e659ce22ce5d3884.jpg',
    text: 'Make sure you try this out before you build your landing page. It is the best template I have seen so far.'
  },
  {
    name: 'Zainab Alias',
    role: 'Freelancer',
    image: '/user3.4e33c4cbe16743f6f372aaee4a55eb75.jpg',
    text: 'This is an awesome landing page template I have ever used. I would rate it 10 for anything.'
  }
]

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#0d0d1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Here's what our customers said
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Testimonials is a great way to increase the brand trust and awareness. Use this section to highlight your
            popular customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#111128] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-colors duration-200"
            >
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
