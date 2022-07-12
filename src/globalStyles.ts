import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: "BebasNeue Bold";
    color: white;
    background: #14132d;
  }

  .flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fullpage-wrapper {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a, p {
    font-family: ${theme.fonts.dinCondM};
    font-size: calc(${theme.fontSize} + 1px);

    @media (max-width: ${theme.media.mob}) {
      font-size: 15px;
    }
  }

  li {
    list-style-type: none;
  }

  input, button {
    outline: none;
    font-family: ${theme.fonts.bebasB};
  }

  #fp-nav ul li a span {
    background: #FFFFFF;
  }

  \:root {
    --unit: calc((100vw - 1650px) / 2);
    @media (max-width: ${theme.media.desktop}) {
      --unit: 85px;
    }
    @media (max-width: ${theme.media.desktopMd}) {
      --unit: 64px;
    }
    @media (max-width: ${theme.media.tab}) {
      --unit: 64px;
    }
    @media (max-width: ${theme.media.tabMd}) {
      --unit: 32px;
    }
    @media (max-width: ${theme.media.mob}) {
      --unit: 24px;
    }
  }
  
  h1, h2, h3, h4 {
    font-weight: normal;
  }
`;

export default GlobalStyles;
