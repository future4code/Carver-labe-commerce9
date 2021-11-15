import styled from "styled-components";
// import { mobile } from "../responsive";

export const Container = styled.div`
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
