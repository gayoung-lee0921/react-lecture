import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "MonoplexKR-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_Monoplex-kr@1.0/MonoplexKR-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    }
    *, *::before, *:after{
        box-sizing: border-box;
        padding: 0;
    }
    body{
        font-family: "MonoplexKR-Regular";
    
    }
    input,textarea{
        font-family: inherit;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    li{
        list-style: none;
    }
`;
export default GlobalStyle;
