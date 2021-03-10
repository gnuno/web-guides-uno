import styled from "styled-components";
import Breakpoints from "../atoms/Breakpoints";

const GridContainer = styled.ul`
    display: grid;
    padding: 2em 0px;
    place-content: space-evenly;
    text-align: center;
    @media ${Breakpoints.mobileS} {
        grid-template-columns: repeat(1, 260px);
        grid-auto-rows: minmax(150px, auto);
        gap: 20px;
    }
    @media ${Breakpoints.laptop} {   
        grid-template-columns: repeat(2, 260px);
    }
    @media ${Breakpoints.desktop} {
        grid-template-columns: repeat(3, 275px);
    }
`;

export default GridContainer;