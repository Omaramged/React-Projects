import { Play } from 'lucide-react'

function VideoSection() {
  return (
    <section className="py-20 px-6 bg-[#111128]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-indigo-400 font-medium text-sm mb-2">Watch a video</p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Learn how to fulfill your needs
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
          This section is to highlight a key feature or aspect of your product. It could be a video or a screenshot of your
          product. It can also contain some words to make it more interesting.
        </p>

        <div className="relative rounded-2xl overflow-hidden bg-indigo-700/30 border border-indigo-500/30 shadow-2xl">
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-indigo-800/40 to-purple-900/40">
            <button className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-105 border border-white/30">
              <Play size={24} className="text-white ml-1" fill="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
