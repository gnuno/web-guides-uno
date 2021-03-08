import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${Theme.background.normal};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${Theme.text.primary};
        a{
            color: ${Theme.text.link};
            :hover{
                color: ${Theme.text.lightLink};
                text-decoration: underline;
            }
        }
    }
`;

export default GlobalStyle;
