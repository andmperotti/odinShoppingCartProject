import styled from "styled-components";
import { useOutletContext } from "react-router";
import { StyledProductCard } from "./ProductCard";

function ShopPage({ className }) {
  const [products] = useOutletContext();
  return (
    <div className={className}>
      <h1>Shop</h1>
      <ul>
        {products.map((product, index) => (
          <StyledProductCard product={product} key={index} />
        ))}
      </ul>
    </div>
  );
}

const StyledShopPage = styled(ShopPage)`
  ul > * {
    margin: 1ch 0;
  }
  h1 {
    text-align: center;
  }
`;
export { ShopPage, StyledShopPage };
