import React from 'react'

function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Andromeda" className="h-7 w-auto" />
              </div>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante vel justo hendrerit rhoncus.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Socials
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#twitter" className="hover:text-orange-500 transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#facebook" className="hover:text-orange-500 transition-colors">Facebook</a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-orange-500 transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#linkedin" className="hover:text-orange-500 transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500">
              <li>
                <a href="#news" className="hover:text-orange-500 transition-colors">News</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-orange-500 transition-colors">Terms & Condition</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
              Location & Contact
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-500">
              <p>2145 North Road, San Jose, CA 95134</p>
              <p>info@andromeda.com</p>
              <p>+1 (555) 234-5678</p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-xs text-slate-400">
            Copyright & Developed by Andromeda. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
