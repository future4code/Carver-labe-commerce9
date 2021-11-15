import styled from "styled-components";

export const ContainerAnc = styled.div`
  & {
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const AppContainer = styled.div`
  & {
    background: radial-gradient(#fff, #ffd6d6);
  }

  .top-page {
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

  .btn-explore {
    display: inline-block;
    background: #ff523b;
    color: #fff;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
    text-decoration: none;
    transition: background 0.5s;
  }

  .btn-explore:hover {
    background: #563434;
  }

  .icon-img {
    margin-left: 20%;
  }

  .col-2 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }

  .category {
    margin: 70px 0;
  }

  .col-3 {
    flex: 30%;
    min-width: 250px;
    margin-bottom: 30px;
    margin-left: 20px;
  }
  .col-3 img {
    max-width: 100%;
    width: 490px;
    height: 490px;
    object-fit: cover;
  }

  .small-container {
    max-width: 1080px;
    margin: auto;
    padding-left: 25px;
    padding-right: 25px;
  }

  .col-4 {
    flex-basis: 25%;
    padding: 10px;
    min-width: 200px;
    margin-bottom: 50px;
  }

  .col-4 img {
    width: 100%;
  }
`

export const ContainerHeader = styled.div`
  & {
    height: 60px;
  }

  .astro-logo {
    height: 100px;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Icon = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SerachContainer = styled.div`
  & {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .input-search {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all 0.5s ease-in-out;
    background-color: orange;
    padding-right: 40px;
    color: #fff;
  }
  .input-search::placeholder {
    color: rgba(0, 0, 0, 0.9);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  .btn-search {
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: #ffffff;
    background-color: transparent;
    pointer-events: painted;
  }
  .btn-search:focus ~ .input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.9);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
  .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;

export const Input = styled.input`
  border: none;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
