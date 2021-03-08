import styled from "styled-components"
import Colors from "./Colors";

const Ball = styled.div`
    border-radius: 50%;
    padding: 0.45em;
    display: inline-block;
    border: 0.3em solid;
    background: ${Colors.divider};
`

export const MainBall = styled(Ball)`
    border-color: ${Colors.backgroundPaper};
`;

export const ChildBall = styled(Ball)`
    border-color: ${Colors.color.primary};
`;