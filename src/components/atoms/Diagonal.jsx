import styled from "styled-components";
import Theme from "./Theme";

export const Diagonal = styled.div`
    border-left: 35px solid;
    border-top: 38px solid ${Theme.background.normal};
    border-image: linear-gradient(
            to bottom left,
            ${Theme.background.paper + "1a"} 40%,
            ${Theme.color.primary + "cc"},
            ${Theme.background.paper + "1a"} 60%
        )
        100% stretch;
    position: relative;
    z-index: -10;
    left: 0px;
    bottom: 7px;
    margin-bottom: -18px;
`;

export const InvertDiagonal = styled(Diagonal)`
    border-left: 30px solid;
    border-top: 38px solid ${Theme.background.normal}; 
    border-image: linear-gradient(
        to bottom right,
        ${Theme.background.paper + "1a"} 40%,
        ${Theme.color.primary + "cc"},
        ${Theme.background.paper + "1a"} 60%
    );
    margin-top: -10px;
    margin-bottom: -15px;
`;
