import { projects } from "../../../data/project";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-20">
      {projects.map((project, index) => (
        <div
          key={index}
          className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-lg"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              className="inline-block rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
            >
              See Details
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
