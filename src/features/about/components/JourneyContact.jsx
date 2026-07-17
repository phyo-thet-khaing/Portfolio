import { ArrowUpRight, Code2, Mail } from "lucide-react";
import { journey } from "../../../data/portfolio";

const JourneyContact = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-16 mt-28">
      {/* Development Journey */}
      <div className="flex-1">
        <h2
          className="
          text-3xl
          lg:text-4xl
          font-bold
          mb-10
          text-neutral-900
          dark:text-white
          "
        >
          Development Journey
        </h2>

        <div className="relative">
          {journey.map((item, index) => (
            <div
              key={index}
              className="
              relative
              border-l
              border-neutral-200
              dark:border-neutral-800
              pl-10
              pb-12
              last:pb-0
              "
            >
              {/* Timeline Icon */}
              <div
                className="
                absolute
                -left-7
                top-0
                w-14
                h-14
                rounded-full
                bg-white
                dark:bg-neutral-950
                border
                border-neutral-200
                dark:border-neutral-700
                shadow-sm
                flex
                items-center
                justify-center
                "
              >
                <Code2
                  size={26}
                  className="
                  text-indigo-600
                  dark:text-indigo-400
                  "
                />
              </div>

              {/* Content Card */}
              <div
                className="
                rounded-2xl
                border
                border-neutral-200
                dark:border-neutral-800
                bg-white
                dark:bg-neutral-900
                p-6
                shadow-sm
                hover:shadow-md
                transition
                "
              >
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-neutral-400
                  "
                >
                  {item.year}
                </p>

                <h3
                  className="
                  mt-2
                  text-xl
                  font-bold
                  text-neutral-900
                  dark:text-white
                  "
                >
                  {item.role}
                </h3>

                <p
                  className="
                  mt-1
                  text-sm
                  font-medium
                  text-indigo-600
                  dark:text-indigo-400
                  "
                >
                  {item.company}
                </p>

                <p
                  className="
                  mt-4
                  text-sm
                  leading-7
                  text-neutral-600
                  dark:text-neutral-400
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Card */}
      <div className="lg:w-[360px]">
        <div
          className="
          sticky
          top-10
          rounded-3xl
          border
          border-neutral-200
          dark:border-neutral-800
          bg-neutral-50
          dark:bg-neutral-900
          p-8
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            text-neutral-900
            dark:text-white
            "
          >
            Let's Connect
          </h2>

          <p
            className="
            mt-5
            text-sm
            leading-7
            text-neutral-600
            dark:text-neutral-400
            "
          >
            I'm always open to discussing new projects, collaborations, and
            opportunities.
          </p>

          <a
            href="mailto:phyothetkhing2002@gmail.com"
            className="
            group
            mt-8
            flex
            items-center
            justify-between
            rounded-xl
            bg-neutral-900
            dark:bg-white
            px-5
            py-4
            text-white
            dark:text-neutral-900
            transition
            hover:scale-[1.02]
            "
          >
            <div className="flex items-center gap-3">
              <Mail size={20} />

              <span className="text-sm font-medium">Email Me</span>
            </div>

            <ArrowUpRight
              size={18}
              className="
              transition
              group-hover:translate-x-1
              group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default JourneyContact;
