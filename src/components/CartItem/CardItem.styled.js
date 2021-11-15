import styled from "styled-components";

export const CardItemContainer = styled.div`
  & {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .cart-item-details {
    color: gray;
  }

  .cart-item-name {
    color: white;
  }

  .cart-price div,
  p {
    margin-bottom: 10px;
  }

  .cart-cross {
    position: absolute;
    top: 5px;
    font-size: 21px;
    right: 27px;
    color: black;
    font-weight: 800;
    cursor: pointer;
  }
  .cart-cross:hover {
    color: gray;
  }

  .price {
    color: #eabf00;
  }
`;
