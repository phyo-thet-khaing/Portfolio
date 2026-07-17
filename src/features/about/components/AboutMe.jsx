import { skills } from "../../../data/portfolio";

const AboutMe = () => {
  return (
    <section className="py-16">
      <h2
        className="
          text-3xl 
          lg:text-4xl 
          font-bold 
          text-neutral-900 
          dark:text-white
          mb-10
        "
      >
        About Me
      </h2>

      <div
        className="
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Left Content */}
        <div>
          <p
            className="
              text-neutral-700
              dark:text-neutral-300
              text-base
              lg:text-lg
              leading-8
            "
          >
            I am a passionate Full Stack Developer who enjoys creating modern,
            scalable, and user-friendly applications. I specialize in building
            complete web solutions using frontend and backend technologies, from
            designing interfaces to developing powerful APIs and deploying
            applications.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h3
              className="
                text-xl
                font-semibold
                text-neutral-900
                dark:text-white
                mb-4
              "
            >
              Technologies I Work With
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-medium

                    bg-neutral-100
                    text-neutral-800
                    border
                    border-neutral-200

                    dark:bg-neutral-800
                    dark:text-neutral-200
                    dark:border-neutral-700

                    hover:bg-neutral-900
                    hover:text-white

                    dark:hover:bg-white
                    dark:hover:text-black

                    transition
                    duration-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              w-[280px]
              h-[280px]

              lg:w-[350px]
              lg:h-[350px]

              rounded-2xl
              overflow-hidden

              border-4
              border-neutral-200
              dark:border-neutral-700

              shadow-xl
            "
          >
            <img
              src="/assets/images/ptk2.jpg"
              alt="Full Stack Developer"
              className="
                w-full
                h-full
                object-cover

                hover:scale-105
                transition
                duration-500
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
