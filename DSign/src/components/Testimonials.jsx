import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: 'Alex Morgan',
      role: 'Product Lead at FinTech',
      text: 'All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.',
      rating: 5,
    },
    {
      name: 'Sarah Jenkins',
      role: 'Marketing Director',
      text: 'Working with this agency transformed our brand presence completely. The creative team delivered beyond our expectations with unmatched speed and precision.',
      rating: 5,
    },
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-12 left-[10%] w-6 h-6 bg-purple-500 rounded-full opacity-80"></div>
      <div className="absolute top-20 right-[15%] w-7 h-10 bg-sky-400 rounded-tl-full rounded-br-full transform rotate-45 opacity-80"></div>
      <div className="absolute bottom-16 left-[8%] w-8 h-11 bg-amber-400 rounded-tr-full rounded-bl-full transform -rotate-12 opacity-80"></div>
      <div className="absolute bottom-10 left-[14%] w-6 h-6 bg-indigo-500 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 right-[10%] w-4 h-4 bg-emerald-500 rounded-sm transform rotate-45 opacity-80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          What say clients about us.
        </h2>
        <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto">
          All the lorem ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-200/80 border border-slate-100 relative">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-md">
              <img
                src="/user.png"
                alt="Client Testimonial"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex justify-center gap-1 text-amber-400 mb-6">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <p className="text-base sm:text-lg text-slate-600 italic leading-relaxed mb-6 max-w-2xl mx-auto">
              "{reviews[currentIndex].text}"
            </p>

            <h3 className="text-lg font-bold text-slate-900">
              {reviews[currentIndex].name}
            </h3>
            <p className="text-sm text-blue-600 font-medium mt-1">
              {reviews[currentIndex].role}
            </p>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === currentIndex ? 'w-6 bg-blue-600' : 'bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
