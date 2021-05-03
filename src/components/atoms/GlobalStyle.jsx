import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${Theme.background.normal};
        font-family:  'Encode Sans', sans-serif;
        color: ${Theme.text.primary};
        a{
            color: ${Theme.color.primary};
            :hover{
                color: ${Theme.color.quintiary}df;
                text-decoration: underline;
            }
        }
        .primary{ 
            color: ${Theme.color.primary};
            fill: ${Theme.color.primary};
        }
        .secondary{ 
            color: ${Theme.color.secondary};
            fill: ${Theme.color.secondary}; 
        }
        .terciary{ 
            color: ${Theme.color.terciary};
            fill: ${Theme.color.terciary}; 
        }
        .cuartiary{ 
            color: ${Theme.color.cuartiary};
            fill: ${Theme.color.cuartiary};
        }
        .quintiary{ 
            color: ${Theme.color.quintiary};
            fill: ${Theme.color.quintiary};
        }
        .bold{
            font-weight: 600;
        }
        .underline{
            text-decoration: underline;
        }
        .center{
            text-align: center;
        }
    }
`;

export default GlobalStyle;
