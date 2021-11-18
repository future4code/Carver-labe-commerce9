import React from "react";
import Products from "../Products/Products";
import { MainProductContainer } from "./MainProduct.styled";

const MainProduct = (props) => {
  return (
    <MainProductContainer>
      <Products data={props.products} handleAddToCart={props.handleAddToCart} />
    </MainProductContainer>
  );
};

export default MainProduct;
