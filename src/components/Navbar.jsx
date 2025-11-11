import styled from "styled-components";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

function Navbar({ className }) {
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
    <div>
      <nav className={className}>
        <Link to="/">
          <h2>Home</h2>
          <svg className="feather">
            <use href="node_modules/feather-icons/dist/feather-sprite.svg#home" />
          </svg>
        </Link>

        <Link to="/shop">
          <h2>Shop</h2>
          <svg className="feather">
            <use href="node_modules/feather-icons/dist/feather-sprite.svg#shopping-bag" />
          </svg>
        </Link>

        <Link to="/cart">
          <h2>Cart</h2>
          {cartItems && (
            <span className="cart-count">
              {cartItems
                .filter((item) => item.quantity > 0)
                .reduce(
                  (accumulator, current) =>
                    accumulator + Number(current.quantity),
                  0
                )}
            </span>
          )}
          <svg className="feather cart-feather">
            <use href="node_modules/feather-icons/dist/feather-sprite.svg#shopping-cart" />
          </svg>
        </Link>
      </nav>
      <Outlet context={[products, cartItems, setCartItems]} />
    </div>
  );
}

const StyledNavbar = styled(Navbar)`
  background: gray;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;

  //svg file
  .feather {
    fill: none;
    stroke: black;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    min-width: 100px;
    width: 25vw;
  }

  //Link's
  a {
    position: relative;
    z-index: 0;
    width: min-content;
  }

  //cart item output
  .cart-count {
    color: black;
    font-size: calc(100% + 0.3vw);
    background: lightgreen;
    border-radius: 1vw;
    padding: 2px 6px;
    position: absolute;
    right: 5%;
    top: 30%;
  }

  //title over each icon
  h2 {
    text-align: center;
    color: black;
    text-decoration: none;
  }

  //taking off text-decoration
  a {
    text-decoration: none;
  }
`;
export { StyledNavbar, Navbar };
