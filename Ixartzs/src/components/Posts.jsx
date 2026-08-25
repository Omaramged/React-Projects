function Posts() {
  const posts = [
    {
      title: "Typography example",
      date: "Feb 6, 2020",
      image: "/image-post.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Tenetur vero esse non molestias eos excepturi.",
    },
    {
      title: "5th Lorem ipsum dolor sit",
      date: "Feb 5, 2020",
      image: "/image-post2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Tenetur vero esse non molestias eos excepturi.",
    },
    {
      title: "4th Lorem ipsum dolor sit",
      date: "Feb 4, 2020",
      image: "/image-post3.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit. Tenetur vero esse non molestias eos excepturi.",
    },
  ]

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">
          Recent <span className="text-cyan-400">Posts</span>
        </h2>
        <a
          href="#"
          className="text-xs font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
        >
          View all Posts →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-[#162032]/70 border border-slate-800/80 rounded-xl overflow-hidden hover:border-slate-700 transition-colors flex flex-col cursor-pointer"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 text-center flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-[11px] mb-2.5">{post.date}</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Posts
