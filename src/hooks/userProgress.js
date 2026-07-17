import { useState, useEffect } from "react";

const useProgress = (roadmapId) => {

  const [topicProgress, setTopicProgress] = useState(() => {
    const saved = localStorage.getItem(`progress-${roadmapId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(`progress-${roadmapId}`, JSON.stringify(topicProgress))
  }, [topicProgress, roadmapId]);

  return [topicProgress, setTopicProgress];
};

export default useProgress;