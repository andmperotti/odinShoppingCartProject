import styled from "styled-components";
import { NavBar, StyledNavBar } from "./NavBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, []);

  return (
    <div data-testid="app">
      <StyledNavBar cartItems={cartItems} />
      <Outlet context={[products, cartItems, setCartItems, loading, error]} />
    </div>
  );
}

const StyledApp = styled(App)``;

export { StyledApp, App };
