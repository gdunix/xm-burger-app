import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: #f5f5f5;
  }

  h1{
    font-size: 36px; 
    text-align: center; 
    text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
