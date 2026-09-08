import React from "react";

function Footer() {
  const footerLinks = {
    about: [
      { name: "About Us", href: "#" },
      { name: "Features", href: "#" },
      { name: "News", href: "#" },
      { name: "Careers", href: "#" },
    ],
    company: [
      { name: "Our Team", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Account", href: "#" },
      { name: "Support Center", href: "#" },
      { name: "Feedback", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  };

  return (
    <footer
      id="contact"
      className="bg-[#050819] text-slate-400 pt-36 sm:pt-44 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="DSign Logo"
                className="h-9 w-auto brightness-200"
              />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We provide creative and integrated digital solutions to help your
              business scale efficiently worldwide.
            </p>
          </div>

          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-white font-bold text-base mb-4">About</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-white font-bold text-base mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-white font-bold text-base mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DSign Agency. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
