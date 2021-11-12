import React from "react";
import styled from "styled-components";

const ItemProduto = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;

  p {
    margin: 0;
  } 
`

export default class ProdutoCarrinho extends React.Component{

  render(){

    return(
      <ItemProduto>
        <a>{this.props.produto.quantidade}x</a>
        <a>{this.props.produto.nomeProduto}</a>
        <button>Remover</button>
      </ItemProduto>
    )
  }
}