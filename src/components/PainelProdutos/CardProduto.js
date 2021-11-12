import React from "react";
import styled from "styled-components";


const ContainerAnuncio = styled.div`
  border: 1px solid black;
  padding: 8px;
`
const ContainerDescrição = styled.div`
    display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`
const BotaoCompra = styled.button`
    align-self: center;
    margin-top: 4px;
`
export default class CardProduto extends React.Component {

  render(){
    
    return(
      <ContainerAnuncio>
        <img src={this.props.produto.img}></img>
        <ContainerDescrição>
        <p>{this.props.produto.nomeProduto}</p>
        <p>R${this.props.produto.preco}</p>
        <BotaoCompra>Comprar</BotaoCompra>
        </ContainerDescrição>
      </ContainerAnuncio>
    )
  }
}