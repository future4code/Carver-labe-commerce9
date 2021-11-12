import React from "react";
import styled from "styled-components";
import Filtro from "../Filtro/Filtro"
import CardProduto from "../PainelProdutos/CardProduto";
import Carrinho from "../Carrinho/Carrinho"
import imgAnuncio from "../../assets/atro.png"

const ContainerPaginaCompra = styled.div`
 display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`

const ContainerPagina = styled.div`
display: flex;
flex-direction: column;

`

const ContainerAnuncio = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px;
  gap: 8px;
`

const FuncoesPagina = styled.div`
display: flex;
justify-content: space-around;
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
  img: imgAnuncio,
},
{
  id: 3,
  nomeProduto: 'produto 3',
  preco: 140,
  img: imgAnuncio,
},
{
  id: 4,
  nomeProduto: 'produto 4',
  preco: 300,
  img: imgAnuncio,
},
{
  id: 5,
  nomeProduto: 'produto 5',
  preco: 450,
  img: imgAnuncio,
},
{
  id: 6,
  nomeProduto: 'produto 6',
  preco: 520,
  img: imgAnuncio,
},
{
  id: 7,
  nomeProduto: 'produto 7',
  preco: 400,
  img: imgAnuncio,
},
{
  id: 8,
  nomeProduto: 'produto 8',
  preco: 15000,
  img: imgAnuncio,
},
{
  id: 9,
  nomeProduto: 'produto 9',
  preco: 70,
  img: imgAnuncio,
},
{
  id: 10,
  nomeProduto: 'produto 10',
  preco: 10,
  img: imgAnuncio,
},
{
  id: 11,
  nomeProduto: 'produto 11',
  preco: 150,
  img: imgAnuncio,
},
{
  id: 12,
  nomeProduto: 'produto 12',
  preco: 5220,
  img: imgAnuncio,
},
{
  id: 13,
  nomeProduto: 'produto 13',
  preco: 7120,
  img: imgAnuncio,
}
]

export default class PaginaCompra extends React.Component {
  state = {
    produtos: produtos,
    sortingParamenter: "Name",
    orderParamenter: 1
  }

  updateSortingParamenter = (ev) => {
    this.setState({
      sortingParamenter: ev.target.value
    })
  }

  updateOrderParamenter = (ev) => {
    this.setState({
      orderParamenter: ev.target.value
    })
  }

  render() {
    return (
      <ContainerPaginaCompra>
        <Filtro></Filtro>

        <ContainerPagina>
          <FuncoesPagina>
            <p>Quanatidade de Produtos:{this.state.produtos.length}</p>
            <span>
              <label for="sort">Ordenar por:</label>
              <select
                name="sort"
                value={this.state.sortingParamenter}
                onChange={this.updateSortingParamenter}
              >
                <option value="name">Nome</option>
                <option value="price">Preço</option>
              </select>
              </span>
            <span>
              <label for="order">Ordem:</label>
              <select
              name="order"
              value={this.state.orderParamenter}
              onChange={this.updateOrderParamenter}
              >
                <option value="1">Crescente</option>
                <option value="-1">Decrescente</option>
              </select>
            </span>
          </FuncoesPagina>
          <ContainerAnuncio>
            {this.state.produtos
              .sort((currentProduct, nextProduct) => {
                switch (this.state.sortingParamenter) {
                  case "name":
                    return this.state.orderParamenter*(currentProduct.nomeProduto.localeCompare(nextProduct.nomeProduto))
                  default:
                    return this.state.orderParamenter*(currentProduct.preco - nextProduct.preco)
                }
              })
              .map((produto) => {
                return <CardProduto
                  produto={produto}
                />
              })}
          </ContainerAnuncio>
        </ContainerPagina>

        <Carrinho></Carrinho>

      </ContainerPaginaCompra>
    )
  }
}