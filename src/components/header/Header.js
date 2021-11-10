import React from "react";
import { HeaderStyled } from "./Header.style";
import astroLogo from "../../assets/astro_logo.jpg";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="nav-bar">
        <div className="logo">
          <img src={astroLogo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="http://www.google.com">Home</a>
            </li>
            <li>
              <a href="http://www.google.com">Produtos</a>
            </li>
            <li>
              <a href="http://www.google.com">Sobre</a>
            </li>
            <li>
              <a href="http://www.google.com">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export default Header;
