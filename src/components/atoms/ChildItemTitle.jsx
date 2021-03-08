import styled from "styled-components";
import Theme from "./Theme";
import Breakpoints from "./Breakpoints";

const ChildItemTitle = styled.h3`
    margin-left: 6px;
    font-weight: 500;
    @media ${Breakpoints.mobileS} {
        font-size: 1em;
    }
    @media ${Breakpoints.tablet} {
        font-size: 1.1em;
    }
`;

export default ChildItemTitle;
