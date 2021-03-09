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
                color: ${Theme.color.primary}df;
                text-decoration: underline;
            }
        }
    }
`;

export default GlobalStyle;
