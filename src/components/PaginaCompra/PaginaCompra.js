import React from "react";
import styled from "styled-components";
import Filtro from "../Filtro/Filtro"
import ContainerProduto from "../PainelProdutos/ContainerProduto";
import Carrinho from "../Carrinho/Carrinho"
import imgAnuncio from "../../assets/atro.png"

const ContainerPaginaCompra = styled.div`
 display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`
const produtos = [{
  id: 1,
  nomeProduto: 'produto 1',
  preco: 100,
  img: imgAnuncio,
},
{
  id: 2,
  nomeProduto: 'produto 2',
  preco: 150,
  img:imgAnuncio,
},
{
  id: 3,
  nomeProduto: 'produto 3',
  preco: 120,
  img:imgAnuncio,
}
]

export default class PaginaCompra extends React.Component {

  render(){
    return(
      <ContainerPaginaCompra>
      <Filtro></Filtro>
      <ContainerProduto
       produtos={produtos}
      /> 
      <Carrinho></Carrinho>
      </ContainerPaginaCompra>
    )
  }
}