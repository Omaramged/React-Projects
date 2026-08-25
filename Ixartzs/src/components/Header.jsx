import { BarChart3 } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="w-6 h-6 text-cyan-400" />
        <span className="text-lg font-bold text-cyan-400">Ixartz's Blog</span>
      </div>
      <nav className="flex items-center gap-6 text-sm text-gray-300">
        <a href="#" className="hover:text-cyan-400 transition-colors">
          Blogs
        </a>
        <a href="#" className="hover:text-cyan-400 transition-colors">
          GitHub
        </a>
        <a href="#" className="hover:text-cyan-400 transition-colors">
          Twitter
        </a>
      </nav>
    </header>
  );
}

export default Header;
