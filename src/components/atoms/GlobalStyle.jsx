import { createGlobalStyle } from "styled-components";
import Colors from "./Colors";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${Colors.background};
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: ${Colors.text.primary};
        a{
            color: ${Colors.text.link};
            :hover{
                color: ${Colors.text.lightLink};
                text-decoration: underline;
            }
        }
    }
`;

export default GlobalStyle;
