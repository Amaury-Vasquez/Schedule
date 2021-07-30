import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    --blue: #DBE6FD;
    --gray-text:#536162;
    --white: #f4f9f9;
    --green: #c7ffd8;
    --shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    --light-shadow: 0px 8px 16px 0px rgba(256, 256, 256, 0.2);
    --gray-rgba: rgba(246, 249, 249, 0.8);
    --loading-red: #c64756;
    --fblue: #00308F;
    --gray: #E4EFE7;
    --white-rgba: rgba(256, 256, 256, 0.1);
    --content-width: 70vw;
    --content-height: 84vh;
    --top: 5vh;
    --gap: 10px;
    --padding: 10px;
    --large-padding: 25px;
    --radius: 3px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, h4, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  a {
    text-decoration: none;
  }
  
  body {
    height: 100vh;
    margin: 0 auto;
    max-width: 100vw;
    overscroll-behavior: none;
    background-color: var(--gray);
    overflow-x: hidden;
    width: 100%; 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
`;
