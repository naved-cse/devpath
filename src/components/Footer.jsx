import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-6 gap-6 md:gap-0">
      <div className="text-cyan-400 text-xl font-bold flex items-center gap-1">
        <span className=" text-cyan-400">⚡</span> DevPath
      </div>

      <div className="flex gap-6 md:gap-8 text-slate-400 font-medium">
        <Link to="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <Link to="/roadmaps" className="hover:text-cyan-400 transition-colors">
          Roadmaps
        </Link>
        <a href="#" className="hover:text-cyan-400 transition-colors">
          GitHub
        </a>
      </div>

      <div className=" text-slate-500 text-sm text-center">
        © 2026 DevPath. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
