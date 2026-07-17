import ProjectCard from "./ProjectCard";
import ProjectText from "./ProjectText";

const ProjectSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <ProjectText />
      <ProjectCard />
    </section>
  );
};

export default ProjectSection;
