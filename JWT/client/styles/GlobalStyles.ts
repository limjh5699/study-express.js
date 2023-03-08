import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyles;
