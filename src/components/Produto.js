import React from "react";
import styled from "styled-components";

const ItemProduto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default class Produto extends React.Component{

  render(){

    return(
      <ItemProduto>
        <a>{this.props.produto.quantidade}</a>
        <a>{this.props.produto.nomeProduto}</a>
        <button>Remover</button>
      </ItemProduto>
    )
  }
}