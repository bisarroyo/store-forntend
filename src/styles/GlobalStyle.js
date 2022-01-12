import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: 'Ubuntu', sans-serif;
  }
  /* body {
    background: linear-gradient(#ffffff, #2a9d8f66);
  } */
`;

export default GlobalStyle;