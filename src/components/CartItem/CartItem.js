import React from "react";
import { CardItemContainer } from "./CardItem.styled";

function CartItem(props) {
  return (
    <CardItemContainer>
      <img src={`assets/${props.idImg}.jpg`} alt={props.idImg} width="80" />
      <div className="cart-item-details">
        <p className="cart-item-name">{props.title}</p>
        <p>{props.description}</p>
        <p>Quantidade: {props.quantity}</p>
      </div>
      <div className="cart-price">
        <p
          className="cart-cross"
          onClick={() => props.removeProductCart(props.idProduct)}
        >
          x
        </p>
        <p className="price">{`${props.currencyFormat + props.price}`}</p>
        <div>
          <Increment
            incrementQuantity={() => props.incrementQuantity(props.idProduct)}
          />
          <Decrement
            decrementQuantity={() => props.decrementQuantity(props.idProduct)}
          />
        </div>
      </div>
    </CardItemContainer>
  );
}

function Increment(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
      onClick={props.incrementQuantity}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}

function Decrement(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
      onClick={props.decrementQuantity}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </svg>
  );
}

export default CartItem;
