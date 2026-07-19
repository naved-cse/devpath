import { X } from "lucide-react";

const TopicModal = ({ topic, onClose }) => {
  if (!topic) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0F172A] border border-slate-700 rounded-2xl p-6 md:p-8 w-full max-w-lg relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-white text-3xl font-bold mb-6 pr-8">
          {topic.title}
        </h2>

        <div className="mb-6">
          <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-2">
            Description
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            {topic.description || "Detailed description coming soon."}
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-2">
            Where it is used
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            {topic.usedIn || "Real-world usage information coming soon."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopicModal;
