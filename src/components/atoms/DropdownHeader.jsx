import styled from "styled-components";
import Theme from "./Theme";

const DropdownHeader = styled.header`
    display: flex;
    align-items: center;
    h2 {
        margin-left: 7px;
        font-weight: 700;
        font-size: 1.2em;
        color: ${Theme.text.primary};
    }
    cursor: pointer;
    :hover {
        h2 { 
            color: ${Theme.text.secondary};
            text-decoration: underline;
        }
        div{
            border-color: ${Theme.divider.normal};
        }
    }
    margin-bottom: ${(props) => props.open ? "0px" : "5px"};
`;

export default DropdownHeader;
