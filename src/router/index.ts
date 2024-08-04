import { createBrowserRouter } from "react-router-dom";
import { AboutMe } from "../pages/AboutMe";
import { ContactMe } from "../pages/ContactMe";
import { Home } from "../pages/Home";
import { MyWorks } from "../pages/MyWorks";
import { PortfolioSingle } from "../pages/PortfolioSingle";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/about-me",
    Component: AboutMe,
  },
  {
    path: "/portfolio",
    Component: MyWorks,
  },
  {
    path: "/portfolio/:id",
    Component: PortfolioSingle,
  },
  {
    path: "/contact-me",
    Component: ContactMe,
  },
]);
