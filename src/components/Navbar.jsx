import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white flex justify-between items-center px-8 py-4 border-b border-slate-800">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-xl">⚡</span>
        <span className="text-cyan-400 text-2xl font-bold tracking-wide">
          DevPath
        </span>
      </Link>
      <div className="flex gap-8">
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
      <Link
        to="/roadmaps"
        className="bg-cyan-400 text-slate-900 px-5 py-2.5 rounded-md font-semibold transition-colors hover:bg-cyan-300"
      >
        Get Started
      </Link>
    </nav>
  );
};

export default Navbar;
