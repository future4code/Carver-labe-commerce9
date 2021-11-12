import styled from "styled-components";

export const HeaderStyled = styled.div`
  .logo {
    width: 125px;
  }

  .nav-bar {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .astro-logo {
    height: 100px;
  }

  .icon-cart {
    width: 30px;
    height: 30px;
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

  a {
    text-decoration: none;
    color: #555;
  }

  p {
    color: #555;
  }
`;
