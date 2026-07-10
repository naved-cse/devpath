import RoadmapCard from "../components/RoadmapCard";
import roadmaps from "../data/roadmaps";

const RoadmapList = () => {
  return (
    <div className=" bg-slate-900 min-h-screen pt-20  px-8 flex flex-col items-center">
      <div className="text-center mb-16 max-w-2xl">
        <h2 className="text-white text-5xl md:text-5xl font-bold mb-4 tracking-tight">
          Choose Your Roadmap
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Pick a path and start your journey toward becoming a better developer.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {roadmaps.map((roadmap) => {
          const totalTopics = roadmap.sections.reduce(
            (total, section) => total + (section.topics?.length || 0),
            0,
          );

          return (
            <RoadmapCard
              key={roadmap.id}
              id={roadmap.id}
              title={roadmap.title}
              description={roadmap.description}
              icon={roadmap.icon}
              topicCount={totalTopics}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapList;
