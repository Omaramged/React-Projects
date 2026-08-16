import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          AI CONFERENCE
        </div>
        <nav className="nav-links">
          <a href="#pitch" className="nav-link">Pitch</a>
          <a href="#schedule" className="nav-link">Schedule</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>
        <div className="header-buttons">
          <button className="btn-signin">Sign In</button>
          <button className="btn-register">Register</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
