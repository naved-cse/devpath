import {
  CircleCheckBig,
  ClockFading,
  Route,
  Map,
  Target,
  Timer,
  History,
} from "lucide-react";

const Features = () => {
  return (
    <section className="bg-slate-900 py-24 flex flex-col items-center px-8">
      <div className="text-center mb-16 max-w-2xl">
        <h2 className=" text-white text-4xl font-bold mb-4 tracking-tight">
          Everything You Need to Level Up
        </h2>
        <p className="text-slate-400 text-lg">
          Powerful features to guide, track, and accelerate your developer
          journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl">
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl px-10 py-16 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <Route
            className="text-cyan-400 w-28 h-28 mb-8 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            strokeWidth={1.2}
          />
          <h3 className="text-white text-2xl font-bold mb-4">
            Structured Roadmaps
          </h3>
          <p className="text-slate-400 leading-relaxed text-lg px-2">
            Follow curated paths from beginner to advanced.
          </p>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl px-10 py-16 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <CircleCheckBig
            className="text-cyan-400 w-28 h-28 mb-8 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            strokeWidth={1.2}
          />
          <h3 className="text-white text-2xl font-bold mb-4">
            Track Your Progress
          </h3>
          <p className="text-slate-400  text-lg leading-relaxed px-2">
            Mark topics as done and see your growth.
          </p>
        </div>

        <div className="bg-slate-800/40 border border-slate-700/50 rounded-3xl px-10 py-16 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <Timer
            className="text-cyan-400 w-28 h-28 mb-8 drop-shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            strokeWidth={1.2}
          />
          <h3 className="text-white text-2xl font-bold mb-4">
            Learn at Your Pace
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed px-2">
            No deadlines, just your journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
