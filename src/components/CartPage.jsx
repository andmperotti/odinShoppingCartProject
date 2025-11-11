import styled from "styled-components";
import { useOutletContext } from "react-router";
import { StyledCartCard } from "./CartCard";

//non prop version other than styled-content className prop
function CartPage({ className }) {
  const [products, cartItems, setCartItems] = useOutletContext();
  let totalCartPrice = cartItems.reduce(
    (total, eachProduct) =>
      total + products[eachProduct.id - 1].price * eachProduct.quantity,
    0
  );

  if (cartItems.length > 0) {
    return (
      <div className={className}>
        <h2>Shopping Cart</h2>
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
        <div className="total-cost">
          <p>Total Cart Price: {totalCartPrice.toFixed(2)}</p>
          <button type="button">Checkout</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={className}>
        <h2>Shopping Cart</h2>
        <p>Nothing in cart</p>
      </div>
    );
  }
}

// value={cartItems[product.id - 1].quantity}

const StyledCartPage = styled(CartPage)`
  h2,
  p {
    text-align: center;
  }
  .total-cost {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3vw;
  }
`;
export { CartPage, StyledCartPage };
