import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactMe",
        element: <ContactMe />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);
