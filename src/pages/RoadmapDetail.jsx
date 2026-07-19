import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MonitorCog,
  Brain,
  Server,
  GripVertical,
  ChevronRight,
  BookOpen,
  CheckCircle2,
  Check,
} from "lucide-react";
import roadmaps from "../data/roadmaps";
import useProgress from "../hooks/userProgress";
import TopicModal from "../components/TopicModal";
import DSAModal from "../components/DSAModal";

const RoadmapDetail = () => {
  const { id } = useParams();
  const roadmap = roadmaps.find((r) => r.id === id);

  // Default to the first section if roadmap exists
  const [activeSectionId, setActiveSectionId] = useState(null);

  // Storing progress in state
  const [topicProgress, setTopicProgress] = useProgress(id);

  const [selectedTopic, setSelectedTopic] = useState(null);

  // Initialize active section when roadmap loads
  useEffect(() => {
    if (roadmap && roadmap.sections.length > 0) {
      setActiveSectionId(roadmap.sections[0].id);

      // // Initialize default statuses based on data
      // const initialProgress = {};
      // roadmap.sections.forEach((section) => {
      //   section.topics?.forEach((topic) => {
      //     initialProgress[topic.id] = topic.status || "notstarted";
      //   });
      // });
      // setTopicProgress(initialProgress);
    }
  }, [roadmap]);

  if (!roadmap) {
    return (
      <div className="text-white text-center py-20">Roadmap not found.</div>
    );
  }

  // Icon lookup dictionary
  const icons = {
    MonitorCog: MonitorCog,
    Brain: Brain,
    Server: Server,
  };
  const MainIcon = icons[roadmap.icon] || MonitorCog;

  // Find currently active section data
  const activeSection = roadmap.sections.find((s) => s.id === activeSectionId);
  const activeSectionIndex = roadmap.sections.findIndex(
    (s) => s.id === activeSectionId,
  );

  // Logic: Cycle status on click
  const cycleStatus = (topicId) => {
    setTopicProgress((prev) => {
      const currentStatus = prev[topicId];
      let nextStatus = "inprogress";
      if (currentStatus === "inprogress") nextStatus = "done";
      if (currentStatus === "done") nextStatus = "notstarted";

      return { ...prev, [topicId]: nextStatus };
    });
  };

  // Logic: Calculate Progress Percentages
  const calculateSectionProgress = (section) => {
    if (!section.topics || section.topics.length === 0) return 0;
    const doneCount = section.topics.filter(
      (t) => topicProgress[t.id] === "done",
    ).length;
    return Math.round((doneCount / section.topics.length) * 100);
  };

  const totalRoadmapTopics = roadmap.sections.reduce(
    (acc, sec) => acc + (sec.topics?.length || 0),
    0,
  );
  const totalCompletedTopics = roadmap.sections.reduce((acc, sec) => {
    return (
      acc +
      (sec.topics?.filter((t) => topicProgress[t.id] === "done").length || 0)
    );
  }, 0);

  const overallProgress =
    totalRoadmapTopics === 0
      ? 0
      : Math.round((totalCompletedTopics / totalRoadmapTopics) * 100);

  // Status Badge Component
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
      <div className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-xs font-semibold rounded-md">
        Not Started
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col lg:flex-row font-sans">
      {/* ================= LEFT SIDEBAR ================= */}
      <div className="w-full lg:w-[380px] bg-[#0F172A] lg:border-r border-slate-800 p-6 flex flex-col flex-shrink-0">
        {/* Back Link */}
        <Link
          to="/roadmaps"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
        </Link>

        {/* Roadmap Info Card */}
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-slate-900/80 p-3 border border-slate-700/50 rounded-lg">
              <MainIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-white text-xl font-bold">{roadmap.title}</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {roadmap.description}
          </p>

          {/* Overall Progress Bar */}
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-300 font-medium">Overall Progress</span>
            <span className="text-slate-300">{overallProgress}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-cyan-400 h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Sections List */}
        <div>
          <h3 className="text-slate-500 text-xs font-bold tracking-wider mb-4 px-2 uppercase">
            Sections
          </h3>
          <div className="flex flex-col gap-1">
            {roadmap.sections.map((section, index) => {
              const isActive = activeSectionId === section.id;
              const sectionProgress = calculateSectionProgress(section);

              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSectionId(section.id)}
                  className={`flex items-center justify-between w-full p-3 rounded-lg text-left transition-all duration-200 ${
                    isActive
                      ? "bg-slate-800/60 border-l-2 border-cyan-400"
                      : "hover:bg-slate-800/30 border-l-2 border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-full text-xs border ${
                        isActive
                          ? "bg-cyan-400/10 border-cyan-400 text-cyan-400"
                          : "bg-slate-800 border-slate-700 text-slate-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`text-sm ${isActive ? "text-white font-medium" : "text-slate-400"}`}
                    >
                      {section.title}
                    </span>
                  </div>
                  <span className="text-slate-500 text-xs">
                    {sectionProgress}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= RIGHT MAIN CONTENT ================= */}
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        {activeSection && (
          <div className="max-w-4xl mx-auto">
            {/* Active Section Header */}
            <div className="mb-10">
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-400/30 text-cyan-400 text-lg font-bold bg-cyan-400/10">
                  {activeSectionIndex + 1}
                </span>
                <h1 className="text-white text-3xl font-bold">
                  {activeSection.title}
                </h1>
              </div>

              <div className="flex items-center gap-6 text-slate-400 text-sm ml-14">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {activeSection.topics?.length || 0} Topics
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {calculateSectionProgress(activeSection)}% Completed
                </div>
              </div>
            </div>

            {/* Topics List */}
            <div className="flex flex-col gap-3">
              {activeSection.topics?.map((topic, index) => {
                const currentStatus = topicProgress[topic.id] || "notstarted";

                return (
                  <div
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic)}
                    className="group flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-600 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <GripVertical className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                      <span className="text-slate-400 text-sm font-medium w-6">
                        {index + 1}.
                      </span>
                      <span className="text-slate-200 font-medium">
                        {topic.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          cycleStatus(topic.id);
                        }}
                      >
                        <StatusBadge status={currentStatus} />
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-slate-400 transition-colors" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* Dynamic Modal Logic */}
      {selectedTopic &&
        (selectedTopic.questions ? (
          <DSAModal
            topic={selectedTopic}
            onClose={() => setSelectedTopic(null)}
          />
        ) : (
          <TopicModal
            topic={selectedTopic}
            onClose={() => setSelectedTopic(null)}
          />
        ))}
    </div>
  );
};

export default RoadmapDetail;
