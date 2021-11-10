import React from "react";
import styled from "styled-components";
import Produto from "../Produto";

const ContainerCarrinho = styled.div`
  display: flex;
  border: 1px #000000 solid;
  flex-direction: column;
`
const ContainerProdutos= styled.div`
  display: flex;
  flex-direction: column;
`


export default class Carrinho extends React.Component {
  state = {
      produtos:[{
      id: 1,
      nomeProduto: 'produto 1',
      preco: 100,
      img:'',
      quantidade: 1,
    },
    {
      id: 2,
      nomeProduto: 'produto 2',
      preco: 150,
      img:'',
      quantidade: 3,
    },
    {
      id: 3,
      nomeProduto: 'produto 3',
      preco: 120,
      img:'',
      quantidade: 2,
    },
  ],
    total: 100
  };
  render(){

    return(
      <ContainerCarrinho>
        <h3>Carrinho:</h3>
        <ContainerProdutos>
        {this.state.produtos.map((produto) => {
          return <Produto 
                    produto={produto}
                  />
          })
        }
        </ContainerProdutos>
        <p>Valor Total: R${this.state.total},00</p>
      </ContainerCarrinho>
    )
  }
}