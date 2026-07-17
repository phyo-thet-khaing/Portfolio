const ProjectText = () => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
        My Projects
      </h2>

      <div className="mt-4 h-1 w-16 rounded-full bg-neutral-900 dark:bg-white" />

      <p className="mt-6 text-base leading-7 text-neutral-600 dark:text-neutral-400 sm:text-lg">
        Explore my frontend projects built with{" "}
        <span className="font-semibold text-neutral-900 dark:text-white">
          JavaScript, React, and Tailwind CSS.
        </span>{" "}
        Each project focuses on creating clean designs, responsive layouts,
        reusable components, and smooth user experiences.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {["JavaScript", "React", "Tailwind CSS"].map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectText;
