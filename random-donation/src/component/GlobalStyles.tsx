import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";  // style-reset 패키지

const GlobalStyles = createGlobalStyle` 
    ${reset}
    body {
        margin: 0;
        padding: 0;
        border: 0;
    }
`;

export default GlobalStyles;