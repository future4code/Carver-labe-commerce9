import React from "react";
import styled from "styled-components";
import CardProduto from "./CardProduto";
import imgAnuncio from "../../assets/atro.png"

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
  state={
    produtos:[{
      id: 1,
      nomeProduto: 'produto 1',
      preco: 100,
      img: imgAnuncio,
      quantidade: 1,
    },
    {
      id: 2,
      nomeProduto: 'produto 2',
      preco: 150,
      img:imgAnuncio,
      quantidade: 3,
    },
    {
      id: 3,
      nomeProduto: 'produto 3',
      preco: 120,
      img:imgAnuncio,
      quantidade: 2,
    },
  ]
  }
  render(){
    
    return(
      <ContainerPagina>
        <ContainerAnuncio>
          {this.state.produtos.map((produto) => {
            return <CardProduto
                  produto={produto}
                  />
          })}
        </ContainerAnuncio>
      </ContainerPagina>
    )
  }
}