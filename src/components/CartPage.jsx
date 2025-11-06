import styled from "styled-components";
import { Link } from "react-router";
import { StyledNavbar } from "./Navbar";
import { useOutletContext } from "react-router";

//non prop version other than styled-content className prop
function CartPage({ className }) {
  const [cartItems, setCartItems] = useOutletContext();
  return (
    <div className={className}>
      <h2>Shopping Cart</h2>
    </div>
  );
}

const StyledCartPage = styled(CartPage)`
  background: lightgreen;
`;
export { CartPage, StyledCartPage };
