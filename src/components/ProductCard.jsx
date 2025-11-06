import styled from "styled-components";
import { useOutletContext } from "react-router";

function ProductCard({ className, product }) {
  return (
    <div className={className}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <span>
        Rating: {product.rating.rate} ({product.rating.count} ratings)
      </span>
      <p>{product.description}</p>
      <span className="product-price">{product.price.toFixed(2)}</span>
      <div>
        {/* quantity input field */}
        <input type="number" class="order-quantity-input"></input>
        {/* add to cart button */}
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

const StyledProductCard = styled(ProductCard)`
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1ch;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .product-price {
    font-weight: bold;
  }
  .order-quantity-input {
    width: 10ch;
  }
`;
export { ProductCard, StyledProductCard };
