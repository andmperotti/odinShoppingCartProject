import styled from "styled-components";
import { useOutletContext } from "react-router";
import { StyledProductCard } from "./ProductCard";

function ShopPage({ className }) {
  const [products, cartItems, setCartItems] = useOutletContext();
  return (
    <div className={className}>
      <h1>Shop</h1>
      <ul>
        {products.map((product, index) => (
          <StyledProductCard
            product={product}
            key={index}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </ul>
    </div>
  );
}

const StyledShopPage = styled(ShopPage)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ul > * {
    margin: 1ch 5vw;
  }
`;
export { ShopPage, StyledShopPage };
