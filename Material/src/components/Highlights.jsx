import React from 'react';

function Highlights() {
  return (
    <section className="highlights-section">
      <div className="highlights-container">
        <div className="highlights-left">
          <span className="section-subtitle">STATS</span>
          <h2 className="highlights-title">Conference Highlights</h2>
          <p className="highlights-desc">
            This conference is designed to bring together the brightest minds, to lead innovations, and to show what the future holds for technology and progress.
          </p>
        </div>
        <div className="highlights-right">
          <div className="stat-box">
            <div className="stat-number">1,500+</div>
            <div className="stat-label">Attendees</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">50</div>
            <div className="stat-label">Speakers</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">20+</div>
            <div className="stat-label">Sessions</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">3</div>
            <div className="stat-label">Days</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
