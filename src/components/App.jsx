import styled from "styled-components";
import { RouterProvider } from "react-router";
import { router } from "../assets/router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const StyledApp = styled(App)``;

export { StyledApp, App };
