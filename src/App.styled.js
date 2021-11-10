import styled from "styled-components";

export const AppContainer = styled.div`
  & {
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

  .col-2 h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }
`;
