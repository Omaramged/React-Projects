import './App.css'

const navItems = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
]

const jobs = [
  {
    title: 'Senior Full Stack Developer',
    company: '@ Tech Corp',
    date: 'Jan 2020 - Present',
    items: [
      'Led a cross-functional team to build scalable web applications using React, Node.js, and PostgreSQL.',
      'Improved system performance by reducing API response times and optimizing database queries.',
      'Worked closely with product and design teams to create user-focused features and improve the customer experience.',
      'Mentored junior developers and helped improve the team delivery process.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: '@ Web Solutions',
    date: 'Jun 2017 - Dec 2019',
    items: [
      'Designed and developed web applications using JavaScript, React, and Express.',
      'Built responsive interfaces and managed backend services for business clients.',
      'Collaborated with clients to deliver features that fit business needs and improve processes.',
      'Participated in agile planning and contributed to product improvements and bug fixes.',
    ],
  },
]

const projects = [
  {
    title: 'Project Goal Tracker For Makers/Creators',
    tags: ['Next.js', 'React', 'TypeScript', 'MySQL'],
    image: '/project_1.jpeg',
    description: 'A project goal tracking app for creators. It helps you create, track, and manage goals in one simple dashboard.',
  },
  {
    title: 'Pricing Bees',
    tags: ['Next.js', 'Shadcn', 'React', 'Node.js'],
    image: '/project_2.jpeg',
    description: 'A pricing page builder that helps businesses create customized pricing experiences quickly and clearly.',
  },
  {
    title: 'Indie Hustle',
    tags: ['React', 'Node', 'Tailwind', 'MongoDB'],
    image: '/project_3.jpeg',
    description: 'A platform for indie makers to share work, discover ideas, and build product momentum in one place.',
  },
]

const education = [
  {
    title: 'Full Stack Web Development with React',
    school: 'Coursera',
    date: 'Sep 2019 - May 2020',
    detail: 'Completed a course focused on building full-stack web applications using React, Node.js, Express, and MongoDB.',
  },
  {
    title: 'Bachelor of Science in Computer Science',
    school: 'University of California, Berkeley',
    date: 'Sep 2013 - May 2017',
    detail: 'Completed coursework in software development, data structures, algorithms, web technologies, and system design.',
  },
]

const testimonials = [
  {
    quote: '“John is a fantastic developer who consistently delivers high-quality work. His ability to solve complex problems is impressive and makes him a valuable team member.”',
    name: 'Jane Smith',
    role: 'Project Manager @ Tech Solutions Inc.',
    image: '/testimonial_1_avatar.jpg',
  },
  {
    quote: '“John is a highly skilled developer who brings a lot of value to our projects. His expertise in full stack development and problem solving is outstanding.”',
    name: 'Mike Johnson',
    role: 'CEO @ Web Innovators LLC',
    image: '/testimonial_2_avatar.jpg',
  },
]

const blogPosts = [
  {
    title: 'How the Blog Feature Work...',
    date: 'Published at 2nd Jul, 2024',
    excerpt: 'Learn how to use MDX and Next.js to add static blogs in your website.',
  },
  {
    title: 'Welcome to Logsfolio Website!',
    date: 'Published at 2nd Jul, 2024',
    excerpt: 'Although there are many open-source portfolio websites out there, but most of them are hard to customize and not easy to use.',
  },
]

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="logo">AH</div>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      <main className="content">
        <section className="intro">
          <img className="profileImage" src="/profile.jpg" alt="Arif Hossain" />

          <div className="introText">
            <h1>
              Hey <span className="wave">👋</span>, I'm Arif Hossain
            </h1>

            <p>
              I am a passionate full-stack developer with a strong background in
              building modern, scalable web applications. Let&apos;s collaborate and
              bring your ideas to life.
            </p>

            <div className="socials">
              <span className="socialIcon">x</span>
              <span className="socialIcon">in</span>
              <span className="socialIcon">gh</span>
              <span className="socialIcon">be</span>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <h2>Work Experience</h2>

          <div className="jobs">
            {jobs.map((job) => (
              <div className="job" key={job.title}>
                <div className="jobMarker"></div>

                <div className="jobInfo">
                  <div className="jobTitleRow">
                    <span className="jobTitle">{job.title}</span>
                    <span className="jobCompany">{job.company}</span>
                  </div>

                  <span className="jobDate">{job.date}</span>

                  <ul className="jobList">
                    {job.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2>My Projects</h2>

          <div className="projects">
            {projects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="projectHeader">
                  <h3>{project.title}</h3>

                  <div className="projectTags">
                    {project.tags.map((tag) => (
                      <span className="projectTag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="projectPreview">
                  <img src={project.image} alt={project.title} />
                </div>

                <p className="projectDescription">{project.description}</p>

                <div className="projectButtons">
                  <button type="button">Live Demo</button>
                  <button type="button" className="ghostButton">
                    Open Repository
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <h2>Education</h2>

          <div className="educationList">
            {education.map((item) => (
              <div className="educationItem" key={item.title}>
                <div className="jobMarker"></div>

                <div className="educationInfo">
                  <div className="jobTitleRow">
                    <span className="jobTitle">{item.title}</span>
                  </div>

                  <span className="educationSchool">
                    {item.school} | {item.date}
                  </span>

                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="testimonials">
          <h2>Testimonials</h2>

          <div className="testimonialsGrid">
            {testimonials.map((person) => (
              <div className="testimonialCard" key={person.name}>
                <p>{person.quote}</p>

                <div className="testimonialPerson">
                  <img src={person.image} alt={person.name} />
                  <div>
                    <strong>{person.name}</strong>
                    <span>{person.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section blogSection" id="blog">
          <h2>Blogs</h2>

          <div className="blogList">
            {blogPosts.map((post) => (
              <article className="blogPost" key={post.title}>
                <h3>{post.title}</h3>
                <p className="blogMeta">{post.excerpt}</p>
                <span>{post.date}</span>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        All rights reserved by Logging Studio - Distributed by ThemeWagon
      </footer>
    </div>
  )
}

export default App
