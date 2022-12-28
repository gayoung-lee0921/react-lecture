import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Open+Sans:ital,wght@0,300;0,700;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*,*:before ,*:after {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }
  body {
    font-family: "Poppins", "Noto Sans KR", "sans-serif";    
    background-color: #333;
  }
  input,textarea,button, select {
    font-family: inherit;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  li {
    list-style: none;
  }
  button{
    border: none;
    outline: none;
    background: none;
  }
  input[type="text"], textarea{
    outline: none;
    border: none;
    background-color: #fff;
    color: #111;
    border-radius: 5px;
    min-height: 50px;
    padding: 0 15px;
  }
  select{
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
  }
  img{
    vertical-align: top;

  }
`;
export default GlobalStyle;
