import { useState } from 'react'

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-section">
          <img src="/logo.png" alt="Bookworm Logo" className="logo-image" />
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>

        <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
          <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
          <div className="dropdown-container">
            <button 
              className="nav-link dropdown-toggle" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Pages 
              <span className="arrow-down"></span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item" onClick={() => setMenuOpen(false)}>Elements</a>
                <a href="#" className="dropdown-item" onClick={() => setMenuOpen(false)}>Privacy Policy</a>
              </div>
            )}
          </div>
        </nav>

        <div className="search-section">
          <button className="search-button" aria-label="Search">
            <svg 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
