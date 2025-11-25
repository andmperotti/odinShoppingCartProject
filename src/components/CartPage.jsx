import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { StyledCartCard } from "./CartCard";
import PropTypes from "prop-types";

//non prop version other than styled-content className prop
function CartPage({ className }) {
  const [products, cartItems, setCartItems] = useOutletContext();
  let totalCartPrice = cartItems.reduce(
    (total, eachProduct) =>
      total + products[eachProduct.id - 1].price * eachProduct.quantity,
    0
  );
  let totalCartQuantity = cartItems.reduce(
    (total, eachProduct) => total + eachProduct.quantity,
    0
  );

  if (cartItems.length > 0) {
    return (
      <div className={className} data-testid="CartPage">
        <h1>Shopping Cart</h1>
        <ul>
          {cartItems.map((cartItem) => (
            <StyledCartCard
              cartItem={cartItem}
              key={cartItem.id}
              products={products}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          ))}
        </ul>
        <div className="total-quantity" data-testid="totalQuantity">
          <p>Total quantity: {totalCartQuantity}</p>
        </div>
        <div className="total-cost">
          <p className="cart-price">
            Total Cart Price: {totalCartPrice.toFixed(2)}
          </p>
          <button type="button">Checkout</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={className} data-testid="CartPage">
        <h1>Shopping Cart</h1>
        <p>Nothing in cart</p>
      </div>
    );
  }
}

CartPage.PropTypes = {
  products: PropTypes.array,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

const StyledCartPage = styled(CartPage)`
  h1,
  p {
    text-align: center;
  }
  .total-cost,
  .total-quantity {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3vw;
  }
  .cart-price {
    font-weight: bold;
  }
`;
export { CartPage, StyledCartPage };
