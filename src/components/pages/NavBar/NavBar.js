import { Search } from "@material-ui/icons";
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
  Input,
  Logo,
  MenuItem,
} from "./NavBar.style";
import astroLogo from "../../../assets/icone_astro.png";

export default class NavBar extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Icon>
              <img className="astro-logo" src={astroLogo} alt="astro-logo" />
            </Icon>
            <SerachContainer>
              <Search style={{ color: "gray", fontSize: 16 }} />
              <Input />
            </SerachContainer>
          </Left>
          <Center>
            <Logo>AstroComerce</Logo>
          </Center>
          <Right>
            <MenuItem>Produtos</MenuItem>
            <MenuItem>Sobre nós</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
  }
}
