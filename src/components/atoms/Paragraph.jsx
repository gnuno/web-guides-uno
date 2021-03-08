import styled from "styled-components";
import Breakpoints from "./Breakpoints";

export const Paragraph = styled.p`
    @media ${Breakpoints.mobileS} { font-size: 0.9em }
    @media ${Breakpoints.tablet} { font-size: 1em }
`;

export const SubParagraph = styled.p`
    font-weight: lighter;
    @media ${Breakpoints.mobileS} { font-size: 0.8em }
    @media ${Breakpoints.tablet} { font-size: 0.9em }
`;
