const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  body, input, textarea, button {
    font-family: Roboto;
    font-weight: 400;
  }
`;

export default GlobalStyle;
