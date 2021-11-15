import styled from "styled-components";

export const ScreenProductContainer = styled.div`
  & {
    max-width: 1300px;
    margin: 0 auto;
    padding: 32px;
  }
  & {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;