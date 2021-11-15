import React from "react";

import MainHome from "./components/pages/MainHome/MainHome";
import {
  AppContainer,
  ContainerHeader,
  Wrapper,
  Left,
  Center,
  Right,
  Icon,
  SerachContainer,
  Input,
  Logo,
  MenuItem,
  ContainerAnc
} from "./App.styled"
import ScreenProduct from "./components/pages/ScreenProducts/ScreenProducts"



export default class App extends React.Component {
  state = {
    display: MainHome
  }

  mostraProdutos = () => {
    this.setState({ display: ScreenProduct})
  }

  mostraHome = () => {
    this.setState({ display: MainHome })
  }

  render() {


    return (
      <AppContainer>
        <ContainerAnc>
          Super Oferta!! Uma viagem gratuita para a Lua em compras acima de
          R$105000!
        </ContainerAnc>
        <ContainerHeader>
          <Wrapper>
            <Left>
              <Icon>
                <img
                  className="astro-logo"
                  src={"assets/astro-logo.png"}
                  alt="astro-logo"
                  onClick={this.mostraHome}
                />
              </Icon>
              <SerachContainer>
                <button class="btn-search">
                  <i class="fas fa-search"></i>
                </button>
                <input
                  type="text"
                  class="input-search"
                  placeholder="Escreva algo..."
                />
              </SerachContainer>
            </Left>
            <Center>
              <Logo>AstroComerce</Logo>
            </Center>
            <Right>
              <MenuItem
              onClick={this.mostraProdutos}
              >Produtos</MenuItem>
              <MenuItem>Sobre nós</MenuItem>
            </Right>
          </Wrapper>
        </ContainerHeader>

        <this.state.display/>

      </AppContainer>
    )
  }

}

