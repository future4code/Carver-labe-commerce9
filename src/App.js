import React from "react";
import { AppContainer } from "./App.styled";
import Carrinho from "./components/carrinho/Carrinho";
import Header from "./components/header/Header";
import imgAstro from "./assets/atro.png";

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <div className="row">
        <div className="col-1">
          <h1>AstroComerce</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            varius molestie nulla a molestie. Morbi ac lacus fringilla,
            scelerisque magna vel, molestie turpis. Etiam sed dictum lacus, eu
            hendrerit mauris. Duis efficitur scelerisque orci nec blandit. Sed
            dolor magna, condimentum in dolor ac, porttitor facilisis diam.
          </p>
        </div>

        <div className="col-2">
          <img src={imgAstro} alt="astro-dev" />
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
