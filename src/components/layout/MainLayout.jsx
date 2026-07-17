import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const MainLayout = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-neutral-800 dark:text-white">
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <div className="flex-1 pt-20">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
};

export default MainLayout;
