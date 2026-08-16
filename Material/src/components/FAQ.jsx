import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is registration free for AI Conference 2023?',
      answer: 'No, registration is not free. You can choose from various ticket options, including standard access and VIP passes. Early bird discounts are available.'
    },
    {
      question: 'What are the payment options for registration?',
      answer: 'We accept all major credit cards, PayPal, and wire transfers for corporate group bookings.'
    },
    {
      question: 'Can I get a refund if I need to cancel my registration?',
      answer: 'Yes, you can request a full refund up to 14 days before the conference starts. Cancellations made after this period are subject to a processing fee.'
    },
    {
      question: 'Will there be remote attendance options?',
      answer: 'Yes, we offer virtual tickets that grant access to live streams of all keynote speeches, panel discussions, and selected workshops.'
    },
    {
      question: 'What is the dress code for the conference?',
      answer: 'The dress code is business casual. We recommend comfortable attire as you will be attending various sessions and networking events throughout the day.'
    }
  ];

  function toggleFaq(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  return (
    <section className="faq-section" id="faq">
      <div className="section-header">
        <h2 className="faq-title">Frequently asked questions</h2>
        <p className="faq-subtitle">
          Welcome to the FAQ section for the AI Conference 2023. Here you will find answers to the most common questions.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map(function(faq, index) {
          const isOpen = openIndex === index;
          return (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={function() { toggleFaq(index); }}>
                <span>{faq.question}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;
