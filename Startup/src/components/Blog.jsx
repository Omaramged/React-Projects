import React from 'react';

const Blog = () => {
  const blogs = [
    {
      image: '/blog-01.jpg',
      category: 'Creative',
      title: 'Best UI components for modern website design',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
      author: {
        name: 'Samuyl Joshi',
        role: 'Graphic Designer',
        avatar: '/auth-01.png',
      },
      date: '2025',
    },
    {
      image: '/blog-02.jpg',
      category: 'Computer',
      title: '9 simple ways to improve your design skills',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
      author: {
        name: 'Musharof Chy',
        role: 'Content Writer',
        avatar: '/auth-02.png',
      },
      date: '2025',
    },
    {
      image: '/blog-03.jpg',
      category: 'Design',
      title: 'Tips to quickly boost your coding speed.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.',
      author: {
        name: 'Lethal Deo',
        role: 'Web Developer',
        avatar: '/auth-03.png',
      },
      date: '2025',
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-28 relative bg-[#12173e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Latest Blogs
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#12173e] border border-white/5 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {blog.category}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-500 transition cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h5 className="text-sm font-semibold text-white">
                      {blog.author.name}
                    </h5>
                    <p className="text-xs text-gray-400">
                      {blog.author.role}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">
                  {blog.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
