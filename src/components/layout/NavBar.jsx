import { Menu, Moon, Sun, X, ZodiacTaurus } from "lucide-react";
import { useState } from "react";

const NavBar = ({ theme, toggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0  right-0 z-50 w-full h-20 bg-white dark:bg-neutral-800  backdrop-blur-md">
      <div className="flex items-center justify-between h-full max-w-7xl px-6 mx-auto border-gray-200 dark:border-white">
        {/* logo and name */}
        <a
          href=""
          className="flex items-center gap-2 text-black dark:text-white"
        >
          <span className="transition-transform duration-300 hover:scale-110">
            <ZodiacTaurus size={24} />
          </span>
          <span>Phyo Thet Khaing</span>
        </a>

        {/* button */}
        <button
          className="sm:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* menu */}

        <nav
          className={`absolute sm:static top-20 left-0 w-full sm:w-auto bg-white dark:bg-neutral-800 backdrop-blur-md sm:bg-transparent sm:flex ${open ? "block" : "hidden"}`}
        >
          <div className="flex items-center gap-4 sm:flex-row flex-col py-6 sm:py-0">
            <a href="/" className="text-black dark:text-white">
              Home
            </a>
            <a href="/about" className="text-black dark:text-white">
              About
            </a>
            <a href="/project" className="text-black dark:text-white">
              Project
            </a>
            <a href="/contact" className="text-black dark:text-white">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="text-black dark:text-white px-4 py-2 rounded-md  transition"
            >
              {theme === "dark" ? (
                <span className="flex items-center gap-2">
                  <Moon size={20} /> Night Theme
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sun size={20} /> Day Theme
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
