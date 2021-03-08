import styled from "styled-components";
import Theme from "./Theme";

const List = styled.ul`
    padding: 1.5em 0em;

    li ul {
        margin-left: 8px;
        border-left: 8px solid transparent;
        border-image: linear-gradient(
                to right,
                ${Theme.bgGris3 + "40"} 0%,
                ${Theme.bgGris3} 0.5%,
                ${Theme.bgGris3 + "40"} 1%
            )
            1% stretch;
    }
`;

export default List;
