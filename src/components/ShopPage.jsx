import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { StyledProductCard } from "./ProductCard";
import PropTypes from "prop-types";

function ShopPage({ className }) {
  const [products, cartItems, setCartItems, loading, error] =
    useOutletContext();
  return (
    <div className={className} data-testid="ShopPage">
      <h1>Products</h1>
      {loading === true && <p>Loading products from resources...</p>}
      {products.length > 0 && (
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
      )}
      {products.length < 1 && error && <p>Error obtaining products</p>}
    </div>
  );
}

ShopPage.propTypes = {
  products: PropTypes.array,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

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
