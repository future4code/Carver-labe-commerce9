import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";

const ContainerPagina = styled.div`
display: flex;
flex-direction: row;

`

const ContainerAnuncio = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
`
export default class ContainerProduto extends React.Component {

  render(){
    
    return(
      <ContainerPagina>
        <ContainerAnuncio>
          {this.props.produtos.map((produto) => {
            return <CardProduto
                  produto={produto}
                  />
          })}
        </ContainerAnuncio>
      </ContainerPagina>
    )
  }
}