import styled from "styled-components";
import Theme from "./Theme";

const ListChild = styled.ul`
    display: ${props => props.open ? "block" : "none" };
    margin-left: 8px;
    border-left: 8px solid transparent;
    border-image: linear-gradient(
            to right,
            ${Theme.divider.soft}40 0%,
            ${Theme.color.secondary}dd 0.5%,
            ${Theme.divider.soft}40 1%
        )
        1% stretch;
`;

export default ListChild;