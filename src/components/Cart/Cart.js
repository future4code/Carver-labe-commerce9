import React from "react";
import CartItem from "../CartItem/CartItem";
import { CartContainer, ClosedCartContainer } from "./Cart.styled";

class Cart extends React.Component {
  state = { isOpen: false };

  close = () => {
    this.setState({ isOpen: false });
  };

  open = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;
    let totalQuantity = this.props.cartItems.reduce((acc, currentValue) => {
      acc = acc + currentValue.quantity;
      return acc;
    }, 0);

    let totalAmount = this.props.cartItems.reduce((acc, currentValue) => {
      acc = acc + currentValue.price * currentValue.quantity;
      return acc;
    }, 0);
    if (!isOpen) {
      return <ClosedCart open={this.open} totalQuantity={totalQuantity} />;
    }

    return (
      <CartContainer>
        <div onClick={this.close} className="close-btn">
          X
        </div>
        <div className="cart-body">
          <div className="cart-heading">
            <div className="cart-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="item-count">{totalQuantity}</span>
            </div>
            <h2>Carrinho</h2>
          </div>
          {this.props.cartItems.map((item) => (
            <CartItem
              {...item}
              incrementQuantity={this.props.incrementQuantity}
              decrementQuantity={this.props.decrementQuantity}
              removeProductCart={this.props.removeProductCart}
            />
          ))}

          <div className="cart-checkout">
            <div>
              <p>SUBTOTAL</p>
              <p>R$ {totalAmount}</p>
            </div>
            <button
              onClick={() => alert(`O total da compra é: R$${totalAmount}`)}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </CartContainer>
    );
  }
}

function ClosedCart(props) {
  return (
    <ClosedCartContainer>
      <span onClick={props.open} className="open-btn">
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="item-count">{props.totalQuantity}</span>
        </div>
      </span>
    </ClosedCartContainer>
  );
}

export default Cart;
