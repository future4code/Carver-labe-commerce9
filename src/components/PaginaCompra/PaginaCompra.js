import React from "react";
import styled from "styled-components";
import Filtro from "../Filtro/Filtro"
import ContainerProduto from "../PainelProdutos/ContainerProduto";
import Carrinho from "../Carrinho/Carrinho"

const ContainerPaginaCompra = styled.div`
 display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`

export default class PaginaCompra extends React.Component {
  render(){
    return(
      <ContainerPaginaCompra>
      <Filtro></Filtro>
      <ContainerProduto></ContainerProduto>
      <Carrinho></Carrinho>
      </ContainerPaginaCompra>
    )
  }
}