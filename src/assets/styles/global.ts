import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  :root {
      font-size: 16px;
    }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.bg};
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 768px) {
    :root {
      font-size: 14px;
    }
  }

  @media (max-width: 425px) {
    :root {
      font-size: 12px;
    }
  }
`;
