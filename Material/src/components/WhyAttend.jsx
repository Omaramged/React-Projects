import React from 'react';

function WhyAttend() {
  return (
    <section className="why-attend-section" id="pitch">
      <div className="section-header">
        <span className="section-subtitle">WHY ATTEND</span>
        <h2 className="section-title">Why Attend?</h2>
        <p className="section-description">
          Welcome to the AI Conference 2023, where the future unfolds. Whether you're a seasoned AI professional, a curious student, or a tech business leader looking to harness the power of AI, this conference is designed to inspire, educate, and connect.
        </p>
      </div>

      <div className="why-cards-grid">
        <div className="why-card">
          <span className="card-number">01. Insights</span>
          <h3 className="card-title">Cutting-Edge Insights!</h3>
          <p className="card-text">
            Discover insights, keynotes, panel discussions, and workshop sessions led by industry pioneers.
          </p>
          <button className="card-btn">LEARN MORE</button>
        </div>

        <div className="why-card">
          <span className="card-number">02. Strategy</span>
          <h3 className="card-title">Practical Knowledge!</h3>
          <p className="card-text">
            Take home practical and actionable strategies you can start implementing today.
          </p>
          <button className="card-btn">LEARN MORE</button>
        </div>

        <div className="why-card card-full-width">
          <span className="card-number">03. Connect</span>
          <h3 className="card-title">Networking!</h3>
          <p className="card-text">
            Connect with leaders, professionals, and peers from across the globe.
          </p>
          <button className="card-btn">LEARN MORE</button>
        </div>
      </div>
    </section>
  );
}

export default WhyAttend;
