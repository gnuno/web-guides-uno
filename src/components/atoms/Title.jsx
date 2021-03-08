import styled from "styled-components";
import Theme from "./Theme";
import Breakpoints from "./Breakpoints";

export const H1 = styled.h1`
    font-weight: 700;
    color: ${Theme.text.secondary};
    @media ${Breakpoints.mobileS} { font-size: 1.9em }
    @media ${Breakpoints.tablet} { font-size: 2.1em }
`;

export const H2 = styled.h2`
    margin-left: 7px;
    font-weight: 600;
    color: ${Theme.text.primary};
    @media ${Breakpoints.mobileS} { font-size: 1.1em }
    @media ${Breakpoints.tablet} { font-size: 1.2em }
`;

export const H3 = styled.h3`
    margin-left: 6px;
    font-weight: 500;
    @media ${Breakpoints.mobileS} { font-size: 1em }
    @media ${Breakpoints.tablet} { font-size: 1.1em }
`;