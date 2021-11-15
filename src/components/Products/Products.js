import React from "react";
import { ProductContainer, ProductItem, Wrap, SortContainer } from "./Products.style";

class Products extends React.Component {
  state = { selectedOrder: "price", order:1 };

  handleOrderBy = (event) => {
    this.setState({ selectedOrder: event.target.value});
  };

  handleOrderProducts = (order, products) => {
    let sortedProducts = [...products];
    switch (this.state.selectedOrder) {
      case "name":
        return sortedProducts = sortedProducts.sort((a, b) => this.state.order *(a.title.localeCompare(b.title)));
      default:
        sortedProducts = sortedProducts.sort((a, b) =>  this.state.order *(a.price - b.price))
    }
    return sortedProducts;
  };

  handleOrder = (event) => {
    this.setState({order:event.target.value})
  }

  render() {
    let { selectedOrder } = this.state;
    let products = this.handleOrderProducts(selectedOrder, this.props.data);

    return (
      <div>
        <ProductContainer>
          <p>
            {`${this.props.data.length} Produtos${this.props.data.length > 1 ? "s" : ""
              } encontrados.`}{" "}
          </p>
          <SortContainer>
            Ordenar por:
            <select
              value={this.state.selectedOrder}
              onChange={this.handleOrderBy}>

              <option value="price">Preço</option>
              <option value="name">Nome</option>
            </select>
          </SortContainer>

          <SortContainer>
            Ordem:
            <select
            value={this.state.order}
            onChange={this.handleOrder}
            >
              <option value={-1}>Decrescente</option>
              <option value={1}>Crescente</option>
            </select>
          </SortContainer>
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
