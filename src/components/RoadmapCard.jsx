import { Link } from "react-router-dom";
import { Monitor, Brain, Server, FileText, ArrowRight } from "lucide-react";

const RoadmapCard = ({ title, description, icon, topicCount, id }) => {
  const icons = {
    Monitor: Monitor,
    Brain: Brain,
    Server: Server,
  };

  const IconComponent = icons[icon] || Monitor;

  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 flex flex-col h-full hover:border-cyan-400 transition-colors duration-300">
      <IconComponent
        className="text-cyan-400 w-12 h-12 mb-6"
        strokeWidth={1.5}
      />

      <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>

      <p className="text-slate-400 text-base leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 rounded-lg px-3 py-2 mb-8 w-max">
        <FileText className="text-cyan-400 w-4 h-4" />
        <span className="text-cyan-400 text-sm font-medium">
          {topicCount}+ Topics
        </span>
      </div>

      <Link
        to={`/roadmap/${id}`}
        className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors "
      >
        Start Learning
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default RoadmapCard;
