import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    min-width: 500px;
    min-height: 400px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyles;
