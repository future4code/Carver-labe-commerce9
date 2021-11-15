//import { Search } from "@material-ui/icons";
import React, { Component } from "react";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Container,
  Wrapper,
  Left,
  Right,
  Center,
  Icon,
  SerachContainer,
  Logo,
  MenuItem,
} from "./NavBar.style";

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Icon>
              <img
                className="astro-logo"
                src={"assets/astro-logo.png"}
                alt="astro-logo"
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
            <MenuItem>Produtos</MenuItem>
            <MenuItem>Sobre nós</MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  }
}
