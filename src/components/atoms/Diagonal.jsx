import styled from "styled-components";
import Theme from "./Theme";

export const Diagonal = styled.div`
    border-left: 35px solid;
    border-top: 38px solid ${Theme.background};
    border-image: linear-gradient(
            to bottom left,
            ${Theme.backgroundPaper + "1a"} 40%,
            ${Theme.color.primary + "cc"},
            ${Theme.backgroundPaper + "1a"} 60%
        )
        100% stretch;
    position: relative;
    z-index: -10;
    left: 0px;
    bottom: 7px;
    margin-bottom: -18px;
`;

export const InvertDiagonal = styled(Diagonal)`
    border-image: linear-gradient(
        to bottom right,
        ${Theme.backgroundPaper + "1a"} 40%,
        ${Theme.color.primary + "cc"},
        ${Theme.backgroundPaper + "1a"} 60%
    );
    margin-top: -10px;
    margin-bottom: -15px;
`;
