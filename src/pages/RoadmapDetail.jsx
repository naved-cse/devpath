import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Monitor,
  Brain,
  Server,
  GripVertical,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Check,
  Section,
} from "lucide-react";
import roadmaps from "../data/roadmaps";

const RoadmapDetail = () => {
  const { id } = useParams();
  const roadmap = roadmaps.find((r) => r.id === id);

  const [activeSectionId, setActiveSectionId] = useState(null);

  const [topicProgress, setTopicProgress] = useState({});

  useEffect(() => {
    if (roadmap && roadmap.sections.length > 0) {
      setActiveSectionId(roadmap.sections[0].id);

      const initialProgress = {};
      roadmap.sections.forEach((section) => {
        section.topics?.forEach((topic) => {
          initialProgress[topic.id] = topic.status || "notstarted";
        });
      });
      settopicProgress(initialProgress);
    }
  }, [roadmap]);

  if (!roadmap) {
    return (
      <div className="text-white text-center py-20">Roadmap not found.</div>
    );
  }

  const icons = {
    Monitor: Monitor,
    Brain: Brain,
    Server: Server,
  };

  const MainIcon = icons[roadmap.icon] || Monitor;

  const activeSection = roadmap.sections.find((s) => s.id === activeSectionId);
  const activeSectionIndex = roadmap.sections.findIndex(
    (s) => s.id === activeSectionId,
  );

  const cycleStatus = (topicId) => {
    setTopicProgress((prev) => {
      const currentStatus = prev[topicId];
      let nextStatus = "inprogress";
      if (currentStatus === "inprogress") nextStatus = "done";
      if (currentStatus === "done") nextStatus = "notstarted";

      return { ...prev, [topicId]: nextStatus };
    });
  };

  const calculateSectionProgress = (section) => {
    if (!section.topics || section.topics.length === 0) return 0;
    const doneCount = section.topics.filter(
      (t) => topicProgress[t.id] === "done",
    ).length;
    return Math.round((doneCount / section.topics.length) * 100);
  };

  const totalRoadmapTopics = roadmap.sections.reduce((acc, sec) => {
    return (
      acc +
      (sec.topics?.filter((t) => topicProgress[t.id] === "done").length || 0)
    );
  }, 0);

  const overallProgress =
    totalRoadmapTopics === 0
      ? 0
      : Math.round((totalCompletedTopics / totalRoadmapTopics) * 100);

  const StatusBadge = ({ status }) => {
    if (status === "done") {
      return (
        <div className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold rounded-md">
          Done <Check className="w-3.5 h-3.5" />
        </div>
      );
    }
    if (status === "inprogress") {
      return (
        <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-semibold rounded-md">
          In Progress
        </div>
      );
    }
    return (
      <div className="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-semibold rounded-md">
        Not Started
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col lg:flex-row font-sans">
      <div className="w-full lg:w-[380px] bg-[#0F172A] lg:border-r border-slate-800 p-6 flex flex-col flex-shrink-0">
        <Link
          to="/roadmaps"
          className=" flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
        </Link>

        <div className=" bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className=" bg-slate-900/80 p-3 border border-slate-700/50 rounded-lg">
              <MainIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-white text-xl font-bold">{roadmap.title}</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {roadmap.description}
          </p>

          <div className="flex justify-between text-sm mb-2">
            <span className=" text-slate-300 font-medium">
              Overall Progress
            </span>
            <span className="text-slate-300">{overallProgress}%</span>
          </div>
          <div className=" w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail;
