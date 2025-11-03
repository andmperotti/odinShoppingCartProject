import styled from "styled-components";
import { StyledNavbar } from "./NavBar";
import { RouterProvider } from "react-router";
import { router } from "../assets/router";

function App() {
  return (
    <div>
      <StyledNavbar />
      <RouterProvider router={router} />
    </div>
  );
}

const StyledApp = styled(App)`
  background: orange;
`;

export { StyledApp, App };
