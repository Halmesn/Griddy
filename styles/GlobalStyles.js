import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  :root {
    font-size: 62.5%;
    box-sizing: border-box;

    @media only screen and (max-width: 33.75em) {
      font-size: 50%;
  }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    transition: background 150ms ease-in-out;
    font-family: ${({ theme }) => theme.fonts.secondary};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  ul {
    list-style: none;
  }
`;
