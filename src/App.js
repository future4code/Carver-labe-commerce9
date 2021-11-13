import React from "react";
import { AppContainer } from "./App.styled";
// import Carrinho from "./components/carrinho/Carrinho";
// import Header from "./components/header/Header";
import imgAstro from "./assets/astro_laranja.png";
import navespacial from "./assets/navespacial.jpg";
import nave2 from "./assets/astronauta1.jpg";
import satelite2 from "./assets/satelite2.jpg";
import produto1 from "./assets/nave-toy2.jpg";
import NavBar from "./components/pages/NavBar/NavBar";
import Annouc from "./components/pages/Annouc/Annouc";

function App() {
  return (
    <AppContainer>
      <Annouc />
      <NavBar />
      <div className="top-page">
        <div className="row">
          <div className="col-2">
            <h1>AstroComerce</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              varius molestie nulla a molestie. Morbi ac lacus fringilla,
              scelerisque magna vel, molestie turpis. Etiam sed dictum lacus, eu
              hendrerit mauris. Duis efficitur scelerisque orci nec blandit. Sed
              dolor magna, condimentum in dolor ac, porttitor facilisis diam.
            </p>
            <a href="http://www.google.com" className="btn-explore">
              Explore agora!
            </a>
          </div>

          <div className="col-2">
            <img className="icon-img" src={imgAstro} alt="astro-dev" />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img id="img-1" src={navespacial} alt="categoria1" />
            </div>
            <div className="col-3">
              <img src={nave2} alt="categoria2" />
            </div>
            <div className="col-3">
              <img src={satelite2} alt="categoria3" />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2>Produtos</h2>
        <div className="row">
          <div className="col-4">
            <img src={produto1} alt="produto" />
            <h4>Nave Espacial</h4>
            <p>R$1500.00</p>
          </div>
          <div className="col-4">
            <img src={produto1} alt="produto" />
            <h4>Nave Espacial</h4>
            <p>R$1500.00</p>
          </div>
          <div className="col-4">
            <img src={produto1} alt="produto" />
            <h4>Nave Espacial</h4>
            <p>R$1500.00</p>
          </div>
          <div className="col-4">
            <img src={produto1} alt="produto" />
            <h4>Nave Espacial</h4>
            <p>R$1500.00</p>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
