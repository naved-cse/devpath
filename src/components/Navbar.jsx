import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  // Piece 1: State to track if the mobile menu is open
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // Added 'relative' here so the mobile dropdown positions correctly beneath it
    <nav className="relative bg-slate-900 text-white flex justify-between items-center px-6 md:px-8 py-4 border-b border-slate-800">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="text-xl">⚡</span>
        <span className="text-cyan-400 text-2xl font-bold tracking-wide">
          DevPath
        </span>
      </Link>

      {/* Piece 2: Desktop Links (Hidden on mobile with 'hidden md:flex') */}
      <div className="hidden md:flex gap-8">
        <Link
          to="/"
          className="text-slate-300 font-medium transition-colors hover:text-white"
        >
          Home
        </Link>
        <Link
          to="/roadmaps"
          className="text-slate-300 font-medium transition-colors hover:text-white"
        >
          Roadmaps
        </Link>
      </div>

      {/* Desktop 'Get Started' Button (Also hidden on mobile so it doesn't crush the layout) */}
      <Link
        to="/roadmaps"
        className="hidden md:inline-block bg-cyan-400 text-slate-900 px-5 py-2.5 rounded-md font-semibold transition-colors hover:bg-cyan-300"
      >
        Get Started
      </Link>

      {/* Piece 3: Hamburger Toggle Button (Visible only on mobile with 'md:hidden') */}
      <button
        className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>

      {/* Piece 4: Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 flex flex-col md:hidden z-50 shadow-2xl">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-300 font-medium px-6 py-4 border-b border-slate-800/50 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/roadmaps"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-slate-300 font-medium px-6 py-4 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
          >
            Roadmaps
          </Link>

          {/* Mobile 'Get Started' Button inside the menu */}
          <div className="p-6 pt-2">
            <Link
              to="/roadmaps"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-cyan-400 text-slate-900 px-5 py-3 rounded-md font-bold text-center block transition-colors hover:bg-cyan-300 w-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
