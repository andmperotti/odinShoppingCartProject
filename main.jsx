import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./src/styles/index.css";
import { RouterProvider } from "react-router";
import { router } from "./src/assets/router.js";
import { StyledNavbar } from "./src/components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledNavbar />
    <RouterProvider router={router} />
  </StrictMode>
);
