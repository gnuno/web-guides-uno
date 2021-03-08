import styled from "styled-components";
import Theme from "./Theme";

export const MainList = styled.ul`
    padding: 1.5em 0em;

    li ul {
        margin-left: 8px;
        border-left: 8px solid transparent;
        border-image: linear-gradient(
                to right,
                ${Theme.divider.soft}40 0%,
                ${Theme.divider.normal}dd 0.5%,
                ${Theme.divider.soft}40 1%
            )
            1% stretch;
    }
`;

export const ListChild = styled.ul`
    display: ${props => props.open ? "block" : "none" }
`;
