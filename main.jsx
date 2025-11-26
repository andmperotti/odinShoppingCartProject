import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./src/styles/index.css";
import { StyledApp } from "./src/components/App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./src/router.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
