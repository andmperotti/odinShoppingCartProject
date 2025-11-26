import styled from "styled-components";
import { Link } from "react-router-dom";

function NavBar({ className, cartItems }) {
  return (
    <div data-testid="NavBar" className={className}>
      <nav>
        <Link to="/">
          <h2>Home</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>

        <Link to="/shop">
          <h2>Shop</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-bag"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </Link>

        <Link to="/cart">
          <h2>Cart</h2>
          {cartItems && (
            <span className="cart-count" data-testid="cartCount">
              {cartItems
                .filter((item) => item.quantity > 0)
                .reduce(
                  (accumulator, current) =>
                    accumulator + Number(current.quantity),
                  0
                )}
            </span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-shopping-cart"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>{" "}
        </Link>
      </nav>
    </div>
  );
}

const StyledNavBar = styled(NavBar)`
  background: gray;
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;

  nav {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  svg {
    fill: none;
    stroke: black;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    min-width: 100px;
    width: 25vw;
    min-height: 10vh;
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
export { StyledNavBar, NavBar };
