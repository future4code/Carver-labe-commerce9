import styled from "styled-components";

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
`;
