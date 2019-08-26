import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap&subset=latin-ext');

*,*::before,*::after{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    user-select: none;
}

html {
    font-size: 62.5%; 
  }

body{
    font-size: 1.6rem;
    height: 100vh;
    background-color: #341442;
    color: white;
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyle;
