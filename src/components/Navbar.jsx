import styled from "styled-components";
import { Link } from "react-router";

const Navbar = ({ className }) => (
  <nav className={className}>
    <Link to="/">
      <svg className="feather">
        <use href="node_modules/feather-icons/dist/feather-sprite.svg#home" />
      </svg>
    </Link>

    <Link to="/shop">
      <svg className="feather">
        <use href="node_modules/feather-icons/dist/feather-sprite.svg#shopping-bag" />
      </svg>
    </Link>

    <Link to="/cart">
      {/* {if itemCount>0} create a span that displays number of items in cart when there are items, positioned absolutely to this parent top right */}
      <svg className="feather">
        <use href="node_modules/feather-icons/dist/feather-sprite.svg#shopping-cart" />
      </svg>
    </Link>
  </nav>
);

const StyledNavbar = styled(Navbar)`
  height: fit-content;
  background: gray;
  display: flex;
  justify-content: space-around;

  .feather {
    fill: none;
    stroke: black;
    stroke-width: 1.5;
    stroke-linecap: round;
    stroke-linejoin: round;

    max-width: 25vw;
    max-height: 100px;
  }
`;
export { StyledNavbar, Navbar };
