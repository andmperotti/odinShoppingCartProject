import { createBrowserRouter } from "react-router";
import { StyledHomePage } from "../components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: StyledHomePage,
    errorElement: StyledHomePage,
  },
]);

export { router };
