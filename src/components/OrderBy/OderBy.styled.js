import styled from "styled-components";

export const SortContainer = styled.div`
  & select {
    background-color: #fff;
    outline: none;
    border: 1px solid #ececec;
    border-radius: 2px;
    margin-left: 10px;
    width: auto;
    height: 35px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    & {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
    }
  }
`;
