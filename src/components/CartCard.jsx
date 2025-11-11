import styled from "styled-components";

function CartCard({ className, cartItem, products, cartItems, setCartItems }) {
  return (
    <div className={className} key={cartItem.id}>
      <img src={products[cartItem.id - 1].image} alt="#"></img>
      <div>
        <h2>{products[cartItem.id - 1].title}</h2>
      </div>
      <div>
        <div className="price-update">
          <label>
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
        </div>
        <button type="button" className="delete-button">
          Delete Item
        </button>
        <p>Price per: {products[cartItem.id - 1].price}</p>
        <p>
          <b>
            Total:{" "}
            {(products[cartItem.id - 1].price * cartItem.quantity).toFixed(2)}
          </b>
        </p>
      </div>
    </div>
  );
}

const StyledCartCard = styled(CartCard)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1vh 3vw;
  border: 1px solid black;
  padding: 1ch;

  .delete-button {
    color: red;
  }

  img {
    max-width: 20vw;
  }

  .price-update {
    // display: flex;
    margin-bottom: 1ch;
  }
  .update-quantity {
    width: 8ch;
  }
`;
export { StyledCartCard, CartCard };
