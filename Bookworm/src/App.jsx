import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'

const allPosts = {
  1: {
    featured: {
      title: "How to make toys from old Olarpaper",
      image: "/01.jpg",
      author: "Mark Dinn",
      date: "03 Apr 2023",
      tag: "Art",
      description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
    },
    posts: [
      {
        title: "DIY Paper Diamond Tutorial with HUNGRY HEART",
        image: "/03.jpg",
        author: "Mark Dinn",
        date: "11 Aug 2022",
        tag: "Art",
        description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
      },
      {
        title: "What you need to know about Photography",
        image: "/05.jpg",
        author: "Mark Dinn",
        date: "01 Jun 2022",
        tag: "Art",
        description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
      }
    ]
  },
  2: {
    featured: {
      title: "What you need to know about Photography",
      image: "/05.jpg",
      author: "Mark Dinn",
      date: "01 Jun 2022",
      tag: "Art",
      description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
    },
    posts: [
      {
        title: "How to make toys from old Olarpaper",
        image: "/01.jpg",
        author: "Mark Dinn",
        date: "03 Apr 2023",
        tag: "Art",
        description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
      },
      {
        title: "DIY Paper Diamond Tutorial with HUNGRY HEART",
        image: "/03.jpg",
        author: "Mark Dinn",
        date: "11 Aug 2022",
        tag: "Art",
        description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
      }
    ]
  },
  3: {
    featured: {
      title: "DIY Paper Diamond Tutorial with HUNGRY HEART",
      image: "/03.jpg",
      author: "Mark Dinn",
      date: "11 Aug 2022",
      tag: "Art",
      description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
    },
    posts: [
      {
        title: "What you need to know about Photography",
        image: "/05.jpg",
        author: "Mark Dinn",
        date: "01 Jun 2022",
        tag: "Art",
        description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
      },
      {
        title: "How to make toys from old Olarpaper",
        image: "/01.jpg",
        author: "Mark Dinn",
        date: "03 Apr 2023",
        tag: "Art",
        description: "Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blan..."
      }
    ]
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1)
    }
  }

  const currentPageData = allPosts[currentPage]

  return (
    <div className="app-wrapper">
      <Header />
      
      <main className="main-content-area">
        <div className="content-container">
          <Card 
            title={currentPageData.featured.title}
            image={currentPageData.featured.image}
            author={currentPageData.featured.author}
            date={currentPageData.featured.date}
            tag={currentPageData.featured.tag}
            description={currentPageData.featured.description}
            isFeatured={true}
          />

          <div className="posts-grid">
            {currentPageData.posts.map((post, index) => (
              <Card 
                key={index}
                title={post.title}
                image={post.image}
                author={post.author}
                date={post.date}
                tag={post.tag}
                description={post.description}
                isFeatured={false}
              />
            ))}
          </div>

          <div className="pagination-wrapper">
            <button 
              className="pagination-btn arrow-btn" 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button 
              className={currentPage === 1 ? 'pagination-btn number-btn active' : 'pagination-btn number-btn'} 
              onClick={() => setCurrentPage(1)}
            >
              1
            </button>
            <button 
              className={currentPage === 2 ? 'pagination-btn number-btn active' : 'pagination-btn number-btn'} 
              onClick={() => setCurrentPage(2)}
            >
              2
            </button>
            <button 
              className={currentPage === 3 ? 'pagination-btn number-btn active' : 'pagination-btn number-btn'} 
              onClick={() => setCurrentPage(3)}
            >
              3
            </button>
            <button 
              className="pagination-btn arrow-btn" 
              onClick={handleNextPage}
              disabled={currentPage === 3}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
