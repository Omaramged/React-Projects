import React, { useState } from 'react';

const Contact = () => {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [subscribeForm, setSubscribeForm] = useState({
    name: '',
    email: '',
  });

  const [ticketStatus, setTicketStatus] = useState('');
  const [subStatus, setSubStatus] = useState('');

  const handleTicketSubmit = (e) => {
    e.preventDefault();
    if (!ticketForm.name || !ticketForm.email || !ticketForm.message) return;
    setTicketStatus('Ticket submitted successfully!');
    setTicketForm({ name: '', email: '', message: '' });
    setTimeout(() => setTicketStatus(''), 4000);
  };

  const handleSubSubmit = (e) => {
    e.preventDefault();
    if (!subscribeForm.name || !subscribeForm.email) return;
    setSubStatus('Subscribed successfully!');
    setSubscribeForm({ name: '', email: '' });
    setTimeout(() => setSubStatus(''), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-[#12173e] border border-white/5 p-8 sm:p-12 rounded-2xl shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Need Help? Open a Ticket
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Our support team will get back to you ASAP via email.
            </p>

            {ticketStatus && (
              <div className="mb-6 p-4 rounded-md bg-blue-600/20 border border-blue-500 text-blue-400 text-sm">
                {ticketStatus}
              </div>
            )}

            <form onSubmit={handleTicketSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={ticketForm.name}
                    onChange={(e) =>
                      setTicketForm({ ...ticketForm, name: e.target.value })
                    }
                    className="w-full bg-[#181f4b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={ticketForm.email}
                    onChange={(e) =>
                      setTicketForm({ ...ticketForm, email: e.target.value })
                    }
                    className="w-full bg-[#181f4b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Enter your Message"
                  value={ticketForm.message}
                  onChange={(e) =>
                    setTicketForm({ ...ticketForm, message: e.target.value })
                  }
                  className="w-full bg-[#181f4b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-md shadow-lg shadow-blue-600/20 transition"
              >
                Submit Ticket
              </button>
            </form>
          </div>

          <div className="lg:col-span-4 bg-[#12173e] border border-white/5 p-8 sm:p-10 rounded-2xl shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Subscribe to receive future updates
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </p>

            <div className="h-px bg-white/10 w-full mb-6"></div>

            {subStatus && (
              <div className="mb-4 p-3 rounded-md bg-blue-600/20 border border-blue-500 text-blue-400 text-xs">
                {subStatus}
              </div>
            )}

            <form onSubmit={handleSubSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                value={subscribeForm.name}
                onChange={(e) =>
                  setSubscribeForm({ ...subscribeForm, name: e.target.value })
                }
                className="w-full bg-[#181f4b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                value={subscribeForm.email}
                onChange={(e) =>
                  setSubscribeForm({ ...subscribeForm, email: e.target.value })
                }
                className="w-full bg-[#181f4b] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 transition"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-md shadow-lg shadow-blue-600/20 transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              No spam guaranteed, So please don't worry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
