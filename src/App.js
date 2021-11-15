import React from "react";
import { AppContainer } from "./App.styled";
// import Carrinho from "./components/carrinho/Carrinho";
// import Header from "./components/header/Header";
/* import imgAstro from "./assets/astro_laranja.png";
import navespacial from "./assets/navespacial.jpg";
import nave2 from "./assets/astronauta1.jpg";
import satelite2 from "./assets/satelite2.jpg";
import produto1 from "./assets/nave-toy2.jpg";
*/
import ScreenProduct from "./pages/ScreenProducts/ScreenProduct";
import NavBar from "./components/NavBar/NavBar";
import Annouc from "./components/Annouc/Annouc";

function App() {
  return (
    <AppContainer>
      <Annouc />
      <NavBar />
      <ScreenProduct />
    </AppContainer>
  );
}

export default App;
