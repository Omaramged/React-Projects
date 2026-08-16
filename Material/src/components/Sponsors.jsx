import React from 'react';

function Sponsors() {
  return (
    <section className="sponsors-section">
      <h3 className="sponsors-title">SPONSORED BY</h3>
      <div className="sponsors-grid">
        <img src="/logo-coinbase.svg" alt="Coinbase" className="sponsor-logo" />
        <img src="/logo-spotify.svg" alt="Spotify" className="sponsor-logo" />
        <img src="/logo-pinterest.svg" alt="Pinterest" className="sponsor-logo" />
        <img src="/logo-google.svg" alt="Google" className="sponsor-logo" />
        <img src="/logo-amazon.svg" alt="Amazon" className="sponsor-logo" />
        <img src="/logo-netflix.svg" alt="Netflix" className="sponsor-logo" />
      </div>
    </section>
  );
}

export default Sponsors;
