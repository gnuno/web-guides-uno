import styled from "styled-components";
import Breakpoints from "./Breakpoints";

export const Container = styled.div`
    margin: 0em auto;
    @media ${Breakpoints.mobileS} {
        max-width: 360px;
        width: 90%;
    }
    @media ${Breakpoints.mobileL} {
        max-width: 400px;
    }
    @media ${Breakpoints.tablet} {
        max-width: 720px;
        width: 80%;
    }
    @media ${Breakpoints.laptop} {
        max-width: 960px;
    }
    @media ${Breakpoints.desktop} {
        max-width: 1100px;
    }    
    @media ${Breakpoints.desktopL} {
        max-width: 1440px;
        width: 70%;
    }
`;

export const HeaderContainer = styled.header`
    margin: 2em auto 1.5em;
    text-align: center;
    max-width: 700px;
    @media ${Breakpoints.mobileS} {
        width: 90%;
    }
    @media ${Breakpoints.tablet} {
        width: 80%;
    }
    @media ${Breakpoints.laptop} {
        width: 70%;
    }
    @media ${Breakpoints.desktop} {
        width: 60%;
    }
    @media ${Breakpoints.desktopL} {
        width: 70%;
        max-width: 800px;
    }
`;
