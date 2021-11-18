import styled from "styled-components";

export const SortContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

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

export const ProductContainer = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ProductItem = styled.div`
  & {
    width: 25%;
    position: relative;
    margin-bottom: 2rem;
    padding-left: 20px;
    padding-right: 20px;
  }
  .product-label {
    position: absolute;
    color: #ececec;
    top: 10px;
    right: 10px;
    padding: 5px;
    font-size: 0.6em;
    background-color: #1b1a20;
    cursor: default;
  }

  & button {
    background: #272727;
    border: none;
    padding: 10px 30px;
    color: #ececec;
    margin-top: 10px;
    cursor: pointer;
  }
  .product-item-img {
    width: 100%;
    justify-content: space-between;
  }
  .product-item-details {
    text-align: center;
    padding: 24px 0;
  }
  .line {
    display: inline-block;
    width: 24px;
    border-bottom: 2px solid #eabf00;
    margin: 16px 0;
  }
  .product-item-title {
    font-size: 14px;
    color: #272727;
  }

  @media screen and (max-width: 768px) {
    & {
      width: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    .product-item-img {
      width: 75%;
    }
    .product-item {
      text-align: center;
    }
  }
`;

export const Wrap = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    & {
      display: flex;
      justify-content: center;
    }
  }
`;
