import styled from "styled-components";
import { StyledNavbar } from "./NavBar";
import { RouterProvider } from "react-router";
import { router } from "../assets/router";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //on app load/mount ping the fakestore api for products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts([...data]));
  }, []);

  return (
    <div>
      <StyledNavbar itemCount={cartItems.length} />
      <RouterProvider router={router} />
    </div>
  );
}

const StyledApp = styled(App)`
  background: orange;
`;

export { StyledApp, App };
