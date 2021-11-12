import React from "react";
import styled from "styled-components";
import ContainerProduto from "../PainelProdutos/ContainerProduto";
import Carrinho from "../carrinho/Carrinho";
import imgAnuncio from "../../assets/atro.png"

const ContainerPaginaCompra = styled.div`
 display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`
const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
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
  state = {
   valorMinimo:" ",
   valorMaximo:" ",
   buscaNome: " "
  }
  
  onChangeMinimo = (event) => {
    this.setState({valorMinimo:event.target.value})
  }

  onChangeMaximo = (event) => {
    this.setState({valorMaximo:event.target.value})
  }
  
  onChangeNome = (event) => {
    this.setState({buscaNome:event.target.value})
  }
  
  render(){
    return(
      <ContainerPaginaCompra>
              <Container>
                <h3>Filtros</h3>
                <label className="BotoesFiltros">
                 <p>Valor Mínimo:</p>
                 <input onChange={this.onChangeMinimo} type="number" placeholder=""></input>
                </label>
                <label className="BotoesFiltros">
                 <p>Valor Máximo:</p>
                 <input onChange={this.onChangeMaximo}type="number" placeholder=""></input>
                </label>
                <label className="BotoesFiltros">
                <p>Busca por nome:</p>
                 <input onChange={this.onChangeNome} type="text" placeholder=""></input>
                </label>
              </Container>
      <ContainerProduto
       produtos={produtos}
      /> 
      <Carrinho/>
      </ContainerPaginaCompra>
    )
  }
}