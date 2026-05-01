import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/coverage",
        Component: Coverage,
        hydrateFallbackElement: <h1>Loaing</h1>,
        loader: () => fetch("/serviceCenters.json").then((res) => res.json()),
      },
      {
        path: "/aboutUs",
        Component: AboutUs,
        hydrateFallbackElement: <h1>Loading</h1>,
        loader: () => fetch("/aboutUs.json").then((res) => res.json()),
      },
    ],
  },

  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
