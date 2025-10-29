import { createBrowserRouter } from "react-router";
import { Homepage } from "../components/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
    errorElement: Homepage,
  },
]);

export { router };
