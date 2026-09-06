import React from 'react'

function EditorSection() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-[#0F7ED9] text-xs font-semibold uppercase tracking-wider block mb-2">
            MARKDOWN EDITOR
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
            Live-Editable, Component-Powered Docs
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Use MDX and reusable components to keep your docs dynamic, interactive, and maintainable. Perfect for documenting APIs, UI libraries, or internal tools.
          </p>
        </div>

        <div className="bg-[#10121a] border border-white/10 rounded-xl p-5 shadow-2xl font-mono text-xs leading-relaxed">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
          </div>

          <div className="space-y-1 text-gray-300">
            <div>
              <span className="text-rose-400">site_name:</span> docsta
            </div>
            <div>
              <span className="text-rose-400">nav:</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-500">-</span> <span className="text-purple-400">Home:</span> <span className="text-sky-300">index.md</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-500">-</span> <span className="text-purple-400">Installation:</span> <span className="text-sky-300">install.md</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-500">-</span> <span className="text-purple-400">Deploying:</span> <span className="text-sky-300">deployment.md</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-500">-</span> <span className="text-purple-400">Getting Help:</span> <span className="text-sky-300">help.md</span>
            </div>
            <div>
              <span className="text-rose-400">theme:</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">name:</span> <span className="text-sky-300">docsta_theme</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">analytics:</span>
            </div>
            <div className="pl-8">
              <span className="text-purple-400">gtag:</span> <span className="text-sky-300">G-ABC123</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditorSection
