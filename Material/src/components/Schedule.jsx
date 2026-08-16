import React, { useState } from 'react';

function Schedule() {
  const [activeTab, setActiveTab] = useState('Day 1');

  const sessions = [
    {
      id: 1,
      day: 'Day 1',
      type: 'Keynote Address',
      title: "AI's Role in Shaping the Future",
      description: 'A deep dive into how Artificial Intelligence is transforming various industries, followed by a Q&A session with our experts.',
      image: '/avatar1.jpg',
      author: 'Sarah Chen',
      role: 'AI Research Lead'
    },
    {
      id: 2,
      day: 'Day 2',
      type: 'Panel Discussion',
      title: 'Introduction to Machine Learning',
      description: 'This panel discusses the foundations of machine learning, modern tools and libraries, and future trends.',
      image: '/avatar2.jpg',
      author: 'David Miller',
      role: 'ML Engineer'
    },
    {
      id: 3,
      day: 'Day 3',
      type: 'Workshop Session',
      title: 'AI in Healthcare: Revolutionizing Patient Care',
      description: 'This workshop explores practical applications of AI in healthcare, from diagnostics to personal treatment.',
      image: '/avatar3.jpg',
      author: 'David Black',
      role: 'Healthcare Tech Director'
    }
  ];

  const filteredSessions = sessions.filter(function(session) {
    return session.day === activeTab;
  });

  return (
    <section className="schedule-section" id="schedule">
      <div className="schedule-tabs">
        <button 
          className={activeTab === 'Day 1' ? 'tab-btn active' : 'tab-btn'}
          onClick={function() { setActiveTab('Day 1'); }}
        >
          Day 1
        </button>
        <button 
          className={activeTab === 'Day 2' ? 'tab-btn active' : 'tab-btn'}
          onClick={function() { setActiveTab('Day 2'); }}
        >
          Day 2
        </button>
        <button 
          className={activeTab === 'Day 3' ? 'tab-btn active' : 'tab-btn'}
          onClick={function() { setActiveTab('Day 3'); }}
        >
          Day 3
        </button>
      </div>

      <div className="sessions-list">
        {filteredSessions.map(function(session) {
          return (
            <div className="session-card" key={session.id}>
              <div className="session-image-container">
                <img src={session.image} alt={session.author} className="session-image" />
              </div>
              <div className="session-info">
                <span className="session-type">{session.type}</span>
                <h3 className="session-title">{session.title}</h3>
                <p className="session-description">{session.description}</p>
                <div className="author-info">
                  <div className="author-avatar-badge">
                    <svg viewBox="0 0 24 24" className="badge-svg">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div className="author-text">
                    <span className="author-blog-link">Read Blog</span>
                    <span className="author-name">By {session.author}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Schedule;
