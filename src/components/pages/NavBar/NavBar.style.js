import styled from "styled-components";
// import { mobile } from "../responsive";

export const Container = styled.div`
  height: 60px;

  .astro-logo {
    height: 100px;
    margin-top: 20px;
  }
`;

export const Wrapper = styled.div`
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
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
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
