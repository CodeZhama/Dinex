import { createGlobalStyle } from "styled-components";

import "./font.css";
import "./icon.css";
import "./color.css";
const GlobalStyles = createGlobalStyle`
     *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, p, ul, ol {
        margin: 0;
    }
     
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .container{
        max-width: 1230px;
        margin: 0 auto;
    }
    @media (max-width: 1400px) {
        .container{
            padding: 0 15px;
        }
    }
   
    
`;

export default GlobalStyles;
