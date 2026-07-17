import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between w-full max-w-6xl gap-12 px-4 py-12 mx-auto sm:px-6 lg:px-8 md:flex-row md:py-24">
      {/* Left side: Content */}
      <div className="w-full space-y-6 text-left md:w-1/2">
        {/* Modern Accent Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border rounded-full bg-neutral-50 text-neutral-600 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:border-neutral-800">
          <Sparkles size={12} className="text-yellow-500 animate-pulse" />
          <span>Available for new opportunities</span>
        </div>

        {/* Heading with Gradient Text */}
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:to-pink-400">
            Phyo Thet Khaing
          </span>
        </h1>

        {/* Enhanced Typography Description */}
        <p className="max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          A passionate frontend developer with a keen eye for design and a love
          for creating beautiful, functional, and highly interactive web
          experiences.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap gap-4 pt-2">
          {/* Primary Button */}
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white transition-all duration-300 rounded-xl bg-neutral-900 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-105 shadow-md shadow-neutral-200 dark:shadow-none"
          >
            View About
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          {/* Secondary Outline Button (Fixed the group-hover bug) */}
          <Link
            to="/post"
            className="group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-300 border text-neutral-700 border-neutral-200 rounded-xl hover:bg-neutral-50 hover:scale-105 dark:text-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900"
          >
            Read Posts
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Right side: Modern Framed Image */}
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        {/* Background Decorative Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-indigo-300 to-purple-400 dark:from-indigo-900 dark:to-purple-900 opacity-30 blur-3xl rounded-full pointer-events-none" />

        {/* Image Wrapper Frame */}
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-800/50 shadow-2xl w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] bg-neutral-100 dark:bg-neutral-900">
          <img
            src="/assets/images/ptk.jpg"
            alt="Phyo Thet Khaing"
            className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105 animate-[float_8s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
