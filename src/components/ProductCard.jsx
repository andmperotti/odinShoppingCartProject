import styled from "styled-components";
import PropTypes from "prop-types";

function ProductCard({ className, product, cartItems, setCartItems }) {
  let errorShown = false;

  return (
    <div className={className} data-testid="ProductCard">
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
        <label>
          Quantity:
          <input type="number" className="order-quantity-input" min="1"></input>
        </label>
        <button
          type="button"
          onClick={(e) => {
            let inputFieldValue = document.querySelector("input").value;
            if (inputFieldValue > 0) {
              let newCartItems = [...cartItems];
              let inputElement = e.target.parentNode.children[0].children[0];
              if (
                newCartItems.filter((item) => item.id === product.id).length ===
                0
              ) {
                newCartItems.push({ id: product.id, quantity: 0 });
                newCartItems.sort((a, b) => a.id - b.id);
              }
              let currentItemIndex = newCartItems.findIndex(
                (item) => item.id === product.id
              );
              newCartItems[currentItemIndex].quantity += +inputElement.value;
              setCartItems(newCartItems);
            } else {
              if (errorShown === false) {
                errorShown = true;
                let errorMessage = document.createElement("span");
                errorMessage.classList.add("error-message");
                errorMessage.innerText = "Must enter a quantity greater than 0";
                e.target.parentElement.after(errorMessage);
                setTimeout(() => {
                  document.querySelector(".error-message").remove();
                  errorShown = false;
                }, 3000);
              }
            }
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

  span {
    font-weight: bold;
  }
  .order-quantity-input {
    width: 10ch;
  }

  img {
    height: 25vh;
  }
  p {
    text-align: center;
  }
  .error-message {
    color: red;
  }
`;
export { ProductCard, StyledProductCard };
