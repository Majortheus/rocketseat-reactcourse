import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue"]};
  }

  body {
    background-color: ${(props) => props.theme["base-background"]};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
  }
`;
