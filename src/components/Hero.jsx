import { Link } from "react-router-dom";
import { Map, BookOpen, Gift } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-slate-900 flex flex-col items-center text-center  py-24 min-h-screen">
      <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight mb-6">
        Master Your <span className="text-cyan-400">Dev Journey</span>
      </h1>

      <p className="text-slate-400 text-mid md:text-lg max-w-sm md:max-w-2xl mb-10 leading-relaxed">
        Track structured roadmaps, learn in layers, and become the developer{" "}
        <br className="hidden md:block" /> you aspire to be.
      </p>

      <div className="flex gap-3 md:gap-6">
        <Link
          to="/roadmaps"
          className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-md font-semibold transition-colors hover:bg-cyan-300"
        >
          Explore Roadmaps
        </Link>

        <Link
          to="/"
          className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-md font-semibold transition-colors hover:bg-cyan-400/10"
        >
          See How It Works
        </Link>
      </div>

      <div className="flex gap-6 mt-16">
        <div className="flex items-center gap-4 bg-slate-800 border border-slate-700 px-6 py-4 rounded-xl min-w-[160px]">
          <Map className="text-cyan-400" size={32} />
          <div className="text-left">
            <div className="text-white font-bold text-xl">5+</div>
            <div className="text-slate-400 font-sm">Roadmaps</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-800 border border-slate-700 px-6 py-4 rounded-xl min-w-[160px]">
          <BookOpen className="text-cyan-400" size={32} />
          <div className="text-left">
            <div className="text-white font-bold text-xl">100+</div>
            <div className="text-slate-400 font-sm">Topics</div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-slate-800 border border-slate-700 px-6 py-4 rounded-xl min-w-[160px]">
          <Gift className="text-cyan-400" size={32} />
          <div className="text-left">
            <div className="text-white font-bold text-xl">Free</div>
            <div className="text-slate-400 font-sm">Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
