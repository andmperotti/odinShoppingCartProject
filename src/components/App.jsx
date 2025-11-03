import styled from "styled-components";
import { StyledNavbar } from "./NavBar";
import { RouterProvider } from "react-router";
import { router } from "../assets/router";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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
