import styled from "styled-components";
import { lighten, darken } from "polished";
import { Link } from "react-router-dom";

export const Container = styled.section`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 560px) {
    min-height: 400px;
  }
  img {
    width: 300px;
    height: 300px;
  }
  div {
    z-index: 1;
    text-align: center;
    h2 {
      font-size: 56px;
    }
    p {
      margin: 12px 0 28px;
      font-size: 16px;
    }
  }
`;

export const StartShopping = styled(Link)`
    color: #ff4d29;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: 180ms ease-in-out;
    text-decoration: none;
    display: inline-block;
    &:hover {
      color: ${lighten(0.04, "#ff4d29")};
    }
    &:active {
      color: ${darken(0.04, "#ff4d29")};
    }
  }
`;
