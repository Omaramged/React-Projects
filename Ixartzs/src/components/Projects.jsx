function Projects() {
  const projects = [
    {
      title: "Project 1",
      image: "/project-web-design.png",
      tags: [
        { name: "Astro.js", color: "bg-fuchsia-600 text-white" },
        { name: "Web design", color: "bg-lime-500 text-slate-950 font-semibold" },
        { name: "Tailwind.css", color: "bg-sky-500 text-white" },
        { name: "TypeScript", color: "bg-rose-500 text-white" },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    },
    {
      title: "Project 2",
      image: "/project-fire.png",
      tags: [
        { name: "Next.js", color: "bg-violet-600 text-white" },
        { name: "Blog", color: "bg-emerald-500 text-slate-950 font-semibold" },
        { name: "JavaScript", color: "bg-amber-400 text-slate-950 font-semibold" },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    },
    {
      title: "Project 3",
      image: "/project-maps.png",
      tags: [
        { name: "Astro.js", color: "bg-fuchsia-600 text-white" },
        { name: "Bootstrap", color: "bg-indigo-600 text-white" },
        { name: "TypeScript", color: "bg-rose-500 text-white" },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.",
    },
  ]

  return (
    <section className="py-8">
      <h2 className="text-xl font-bold text-white mb-6">
        Recent <span className="text-cyan-400">Projects</span>
      </h2>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-5 bg-[#162032]/70 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-colors"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-20 h-20 object-contain flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="text-lg font-bold text-white mr-1">
                  {project.title}
                </span>
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`${tag.color} text-xs px-2.5 py-0.5 rounded-md`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
