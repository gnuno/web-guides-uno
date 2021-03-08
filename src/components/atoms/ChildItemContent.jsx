import styled from "styled-components";
import Theme from "./Theme";

const ChildItemContent = styled.article`
    margin-left: 6px;
    padding: 0px 8px 15px 15px;
    border-left: 6px solid transparent;
    border-image: linear-gradient(
            to right,
            ${Theme.divider.soft}40 0%,
            ${Theme.color.primary}dd 0.5%,
            ${Theme.divider.soft}40 1%
        )
        1% stretch;
`;

export default ChildItemContent;