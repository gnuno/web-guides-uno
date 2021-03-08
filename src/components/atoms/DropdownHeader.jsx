import styled from "styled-components";
import Theme from "./Theme";

const DropdownHeader = styled.header`
    display: flex;
    align-items: center;
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
