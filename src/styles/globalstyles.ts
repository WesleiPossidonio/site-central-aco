import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: "Inter", sans-serif;

    scroll-behavior: smooth;
    scroll-margin: 3rem;
    text-decoration: none;
  }

 html {
  @media (max-width: 1260px){
      font-size: 87.5%;
    }

    @media (max-width: 900px){
      font-size: 75%;
    }
 }

 body {
   background: ${({ theme }) => theme.colors['base-white']};
 }
`
