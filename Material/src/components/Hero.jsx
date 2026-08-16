import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-date">
          22-24 August @ New York.
        </div>
        <h1 className="hero-title">
          AI Conference 2023: Unlocking the Future
        </h1>
        <p className="hero-subtitle">
          Join us for the most anticipated event of the year, the AI Conference 2023
        </p>
        <div className="hero-actions">
          <button className="btn-buy-ticket">BUY TICKET</button>
          <button className="btn-play">
            <svg viewBox="0 0 24 24" className="play-icon">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
