import React from "react";
import PaginaCompra from "./components/PaginaCompra/PaginaCompra";
import MainHome from "./components/MainHome/MainHome";
import styled from "styled-components";
import astroLogo from "./assets/astro_logo.jpg"


export const AppContainer = styled.div`
 & {
    max-width: 1300px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
  }

  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .col-2 {
    flex-basis: 50%;
    min-width: 300px;
  }
  .col-2 img {
    max-width: 100%;
    padding: 50px 0;
  }

  .col-2 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }
`;
export const HeaderStyled = styled.div`
  .logo {
    width: 125px;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  img {
    height: 100px;
  }

  nav {
    flex: 1;
    text-align: right;
  }

  nav ul {
    display: inline-block;
    list-style-type: none;
  }

  nav ul li {
    display: inline-block;
    margin-right: 20px;
  }

  p {
    text-decoration: none;
    color: #555;
  }

`;


export default class App extends React.Component {
    state = {
      display: PaginaCompra
    }

    mostraProdutos = () => {
      this.setState({display:PaginaCompra})
    }

    mostraHome = () => {
      this.setState({display:MainHome})
    }

  render() {
    

    return (
        <AppContainer>
          <HeaderStyled>
            <div className="nav-bar">
              <div className="logo">
                <img src={astroLogo} alt="logo" />
              </div>
              <nav>
                <ul>
                  <li>
                    <p onClick={this.mostraHome}>Home</p>
                  </li>
                  <li>
                    <p onClick={this.mostraProdutos}>Produtos</p>
                  </li>
                  <li>
                    <p>Sobre</p>
                  </li>
                  <li>
                    <p>Contato</p>
                  </li>
                </ul>
              </nav>
            </div>
          </HeaderStyled>

          <this.state.display></this.state.display>

        </AppContainer>
    )
  }
}

