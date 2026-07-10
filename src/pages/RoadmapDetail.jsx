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
};

export default RoadmapDetail;
