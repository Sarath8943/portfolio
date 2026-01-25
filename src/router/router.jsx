import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";

import { About } from "../page/About";

import { Skill } from "../page/Skill";
import { Contact } from "../page/Contact";
import { Projects } from "../page/Projects";
import { Home } from "lucide-react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "skills",
        element: <Skill />,
      },

      {
        path: "projects",
        element: <Projects />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
