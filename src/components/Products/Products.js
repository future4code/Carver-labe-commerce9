import React from "react";
import OrderBy from "../OrderBy/OrderBy";
import { ProductContainer, ProductItem, Wrap } from "./Products.style";

class Products extends React.Component {
  state = { selectedOrder: "" };

  handleOrderBy = (event) => {
    this.setState({ selectedOrder: event.target.value });
  };

  handleOrderProducts = (order, products) => {
    let sortedProducts = [...products];
    if (order === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    return sortedProducts;
  };

  render() {
    let { selectedOrder } = this.state;
    let products = this.handleOrderProducts(selectedOrder, this.props.data);

    return (
      <div>
        <ProductContainer>
          <p>
            {`${this.props.data.length} Produtos${
              this.props.data.length > 1 ? "s" : ""
            } encontrados.`}{" "}
          </p>
          <OrderBy
            selectedOrder={selectedOrder}
            handleOrderBy={this.handleOrderBy}
          />
        </ProductContainer>

        <Wrap>
          {products.map((product) => (
            <Product
              {...product}
              handleAddToCart={this.props.handleAddToCart}
            />
          ))}
        </Wrap>
      </div>
    );
  }
}

function Product(props) {
  return (
    <ProductItem>
      <div className="product-label">Frete Grátis</div>
      <img
        className="product-item-img"
        src={`assets/${props.idImg}.jpg`}
        alt={props.title}
      />
      <div className="product-item-details">
        <p className="product-item-title">{props.title}</p>
        <div className="line"></div>
        <h3 className="product-item-price">
          {props.currencyFormat + props.price}
        </h3>
        <button onClick={() => props.handleAddToCart(props)}>
          Adiconar ao carrinho
        </button>
      </div>
    </ProductItem>
  );
}

export default Products;
