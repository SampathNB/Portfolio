import {createBrowserRouter} from "react-router-dom";
import {AboutMe} from "../pages/AboutMe";
import {ContactMe} from "../pages/ContactMe";
import {Home} from "../pages/Home";
import {MyWorks} from "../pages/MyWorks";

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
    path: "/contact-me",
    Component: ContactMe,
  },
]);
