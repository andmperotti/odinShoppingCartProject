import styled from "styled-components";
import PropTypes from "prop-types";

function ProductCard({ className, product, cartItems, setCartItems }) {
  return (
    <div className={className}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <span>
        Rating: {product.rating.rate} ({product.rating.count} ratings)
      </span>
      <p>{product.description}</p>
      <span className="product-price">
        Price each: ${product.price.toFixed(2)}
      </span>
      <div>
        <span>Quantity: </span>
        <input type="number" className="order-quantity-input" min="1"></input>
        <button
          type="button"
          onClick={(e) => {
            let newCartItems = [...cartItems];
            let inputElement = e.target.parentNode.children[1];
            if (
              newCartItems.filter((item) => item.id === product.id).length === 0
            ) {
              newCartItems.push({ id: product.id, quantity: 0 });
              newCartItems.sort((a, b) => a.id - b.id);
            }
            let currentItemIndex = newCartItems.findIndex(
              (item) => item.id === product.id
            );
            newCartItems[currentItemIndex].quantity += +inputElement.value;
            setCartItems(newCartItems);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

ProductCard.PropTypes = {
  product: PropTypes.object,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

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
