import{createGlobalStyle}from 'styled-components';

const mainColor='#272727';
export const GlobalStyle=createGlobalStyle`
    *{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body {
  
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

   /* padding: 20px 40px;  */
 
  /* @media screen and (max-width:800px){
    padding:10px;
  } */
}

code {
  font-family:  source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
a{
  text-decoration: none;
  color:${mainColor};
}

.mobile__bar__icon{

color: white;
display: none;
font-size: 20px;
}

`