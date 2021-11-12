import React from "react";
import { HeaderStyled } from "./Header.style";
import astroLogo from "../../assets/icone_astro.png";
import cart from "../../assets/cart.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="nav-bar">
        <div className="logo">
          <img className="astro-logo" src={astroLogo} alt="logo" />
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
        <img className="icon-cart" src={cart} alt="carrinho" />
      </div>
    </HeaderStyled>
  );
};

export default Header;
