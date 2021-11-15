import React from "react";
import { SortContainer } from "./OderBy.styled";

const OrderBy = (props) => {
  return (
    <SortContainer>
      Ordenar por
      <select value={props.selectedOrder} onChange={props.handleOrderBy}>
        <option value="">Select</option>
        <option value="lowest">Menor para o maior</option>
        <option value="highest">Maior para o menor</option>
      </select>
    </SortContainer>
  );
};

export default OrderBy;
