import { X, ExternalLink } from "lucide-react";

const DSAModal = ({ topic, onClose }) => {
  if (!topic) return null;

  // Helper function to color code the difficulty badges
  const getDifficultyColor = (difficulty) => {
    switch (difficulty?.toLowerCase()) {
      case "easy":
        return "bg-green-500/10 border-green-500/20 text-green-400";
      case "medium":
        return "bg-yellow-500/10 border-yellow-500/20 text-yellow-500";
      case "hard":
        return "bg-red-500/10 border-red-500/20 text-red-400";
      default:
        return "bg-slate-800 border-slate-700 text-slate-400";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#0F172A] border border-slate-700 rounded-2xl p-6 md:p-8 w-full max-w-3xl relative shadow-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Title (Shrink-0 keeps it from getting crushed by the scrollable list) */}
        <h2 className="text-white text-3xl font-bold mb-6 pr-8 shrink-0">
          {topic.title}
        </h2>

        {/* Scrollable Questions Container */}
        <div className="overflow-y-auto pr-2 flex-grow">
          <div className="flex flex-col gap-3">
            {topic.questions?.map((q, index) => (
              <div
                key={q.id || index}
                className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-slate-200 font-medium text-base">
                    {index + 1}. {q.title}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${getDifficultyColor(q.difficulty)}`}
                  >
                    {q.difficulty}
                  </span>
                </div>

                <a
                  href={q.leetcodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 ml-4 flex items-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Solve <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAModal;
