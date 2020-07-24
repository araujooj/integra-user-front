import { createGlobalStyle } from "styled-components";
import "../Assets/SFProDisplay.ttf";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    src: local('SFProDisplay'), local('SFProDisplay'),
    url('../Assets/SFProDisplay.ttf') format('ttf'),
}

  body {
    background: #f5f5f5;
    color: #312e38;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
