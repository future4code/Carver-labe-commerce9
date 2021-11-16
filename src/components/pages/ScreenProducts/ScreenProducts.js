import React, { Component } from "react";
import Cart from "../../Cart/Cart";
import MainProduct from "../../../components/MainProduct/MainProduct";
import { products } from "../../../data.json";
import { ScreenProductContainer } from "./ScreenProductsStyled";

class ScreenProduct extends Component {
  state = {
    cartItems: [],
  };

  /*   componentDidUpdate() {
    this.handleUpdateLocalStorage();
  } */

  componentDidMount() {
    window.addEventListener("beforeunload", this.handleUpdateLocalStorage);
  }

  handleUpdateLocalStorage = () => {
    localStorage.setItem("carts", JSON.stringify(this.state.cartItems));
  };

  handleAddToCart = (product) => {
    let isPresent =
      this.state.cartItems.findIndex(
        (prod) => prod.idProduct === product.idProduct
      ) !== -1;

    if (isPresent) {
      this.incrementQuantity(product.idProduct);
    } else {
      this.setState((prevState) => ({
        cartItems: prevState.cartItems.concat({ ...product, quantity: 1 }),
      }));
    }
  };

  incrementQuantity = (idProduct) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((product) => {
        if (product.idProduct === idProduct) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  decrementQuantity = (idProduct) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((product) => {
        if (product.idProduct === idProduct && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  removeProductCart = (idProduct) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((product) => {
        return product.idProduct !== idProduct;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
  };

  render() {
    return (
      <ScreenProductContainer>
        <MainProduct
          products={products}
          handleAddToCart={this.handleAddToCart}
        />
        <Cart
          cartItems={this.state.cartItems}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          removeProductCart={this.removeProductCart}
        />
      </ScreenProductContainer>
    );
  }
}

export default ScreenProduct;
