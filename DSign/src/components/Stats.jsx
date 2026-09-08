import React from 'react'

function Stats() {
  const stats = [
    {
      value: '80k',
      title: 'Active Clients',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
      color: 'bg-sky-500',
    },
    {
      value: '90k',
      title: 'Projects Done',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
      color: 'bg-amber-400',
    },
    {
      value: '80%',
      title: 'Success Rate',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
      color: 'bg-rose-500',
    },
    {
      value: '50+',
      title: 'Team Members',
      description: 'All the lorem ipsum generators on the Internet tend to repeat',
      color: 'bg-emerald-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className={`w-2.5 h-2.5 rounded-full ${stat.color}`}></span>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-800 mb-2">
                {stat.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
