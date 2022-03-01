import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import "../fonts/font.css";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    body {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
`;

export default GlobalStyles;
