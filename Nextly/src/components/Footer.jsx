
const footerLinks = {
  Product: ['Features', 'Pricing', 'Case Studies', 'Reviews'],
  Company: ['About', 'Team', 'Blog', 'Careers'],
  Contact: ['Helpdesk', 'Sales', 'Contact']
}

function Footer() {
  return (
    <footer className="bg-[#0a0a18] border-t border-white/10 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Nextly" className="h-7 w-7" />
              <span className="text-white font-semibold">Nextly</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-5">
              Nextly is a free landing page & marketing website template for startups and indie projects.
            </p>          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-600 text-xs">
            Copyright © {new Date().getFullYear()} Nextly. Made with ♥ by Surjith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
