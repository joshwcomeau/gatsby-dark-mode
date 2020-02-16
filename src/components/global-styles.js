import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: sans-serif;
  }
  body {
    background: ${p => p.theme.backgroundColor};
    color: ${p => p.theme.textColor};
  }

  a {
    color: ${p => p.theme.primaryColor};
  }
`;
