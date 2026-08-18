function Card({ title, image, author, date, tag, description, isFeatured }) {
  return (
    <article className={isFeatured ? 'blog-card featured' : 'blog-card'}>
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <div className="author-info">
            <div className="author-avatar-placeholder">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <span className="author-name">{author}</span>
          </div>
          <span className="meta-separator">•</span>
          <span className="post-date">{date}</span>
          <span className="meta-separator">•</span>
          <span className="post-tag">
            <svg 
              className="tag-icon" 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
              <line x1="7" y1="7" x2="7.01" y2="7"></line>
            </svg>
            {tag}
          </span>
        </div>
        <h2 className="card-title">
          <a href="#">{title}</a>
        </h2>
        <p className="card-description">{description}</p>
      </div>
    </article>
  )
}

export default Card
