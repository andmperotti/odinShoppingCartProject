import { createBrowserRouter } from "react-router";
import { HomePage } from "../components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    errorElement: HomePage,
  },
]);

export { router };
