import styled from "styled-components";
import Breakpoints from "./Breakpoints";

export const Container = styled.div`
    margin: 0em auto;

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

export const CenteredContainer = styled(Container)`
    text-align: center;
`;
