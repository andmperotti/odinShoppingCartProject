import styled from "styled-components";
import PropTypes from "prop-types";

function CartCard({ className, cartItem, products, cartItems, setCartItems }) {
  return (
    <div className={className} key={cartItem.id}>
      <img src={products[cartItem.id - 1].image} alt="#"></img>
      <h2>{products[cartItem.id - 1].title}</h2>
      <div className="details">
        <label className="price-update">
          Quantity:{" "}
          <input
            className="update-quantity"
            type="number"
            value={cartItem.quantity}
            min="1"
            onChange={(event) => {
              let newCartItems = [...cartItems];
              let currentItemIndex = newCartItems.findIndex(
                (item) => item.id === cartItem.id
              );
              newCartItems[currentItemIndex].quantity = event.target.value;
              setCartItems(newCartItems);
            }}
          ></input>
        </label>
        <p>Price per: {products[cartItem.id - 1].price}</p>
        <p>
          <b>
            Total:{" "}
            {(products[cartItem.id - 1].price * cartItem.quantity).toFixed(2)}
          </b>
        </p>
        <button
          type="button"
          className="delete-button"
          onClick={() => {
            let newCartItems = [...cartItems];
            let currentProductIndex = newCartItems.findIndex(
              (item) => item.id === cartItem.id
            );
            newCartItems.splice(currentProductIndex, 1);
            setCartItems(newCartItems);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

CartCard.PropTypes = {
  cartItem: PropTypes.object,
  products: PropTypes.array,
  cartItems: PropTypes.array,
  setCartItems: PropTypes.func,
};

const StyledCartCard = styled(CartCard)`
  margin: 1vh 3vw;
  border: 1px solid black;
  padding: 1ch;
  height: 25vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;

  .delete-button {
    color: red;
    width: fit-content;
    text-wrap: nowrap;
  }

  img {
    max-height: 20vh;
    max-width: 80%;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
  }

  .price-update {
    width: fit-content;
    text-align: center;
  }

  .update-quantity {
    width: 30%;
  }
`;
export { StyledCartCard, CartCard };
