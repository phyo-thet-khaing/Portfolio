import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AboutPage from "../features/about/pages/AboutPage";
import ContactPage from "../features/contact/pages/ContactPage";
import HomePage from "../features/home/pages/HomePage";
import ProjectPage from "../features/project/pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
