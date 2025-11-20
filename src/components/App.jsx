import styled from "styled-components";
import { NavBar, StyledNavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts([...data]);
      });
  }, []);

  return (
    <div data-testid="app">
      <StyledNavBar cartItems={cartItems} />
      <Outlet context={[products, cartItems, setCartItems]} />
    </div>
  );
}

const StyledApp = styled(App)``;

export { StyledApp, App };
