import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./src/styles/index.css";
import { StyledApp } from "./src/components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StyledApp />
  </StrictMode>
);
