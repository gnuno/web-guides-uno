import styled from "styled-components";
import Breakpoints from "./Breakpoints";

const Queries = `
    @media ${Breakpoints.mobileS} {
        max-width: "360px";
        width: 90%;
    }
    @media ${Breakpoints.mobileL} {
        max-width: "400px";
    }
    @media ${Breakpoints.tablet} {
        max-width: "720px";
        width: 80%;
    }
    @media ${Breakpoints.laptop} {
        max-width: "960px";
    }
    @media ${Breakpoints.desktop} {
        max-width: "1280px";
    }
`;

export const Container = styled.div`
    margin: 0em auto;
    ${Queries}
`;

export const HeaderContainer = styled.header`
    margin: 0em auto;
    text-align: center;
    ${Queries}
`;
