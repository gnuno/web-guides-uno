import styled from "styled-components"
import Theme from "./Theme";

const Ball = styled.div`
    border-radius: 50%;
    padding: 0.45em;
    display: inline-block;
    border: 0.3em solid;
    background: ${Theme.background.paper};
`

export const MainBall = styled(Ball)`
    border-color: ${Theme.divider.soft};
`;

export const ChildBall = styled(Ball)`
    border-color: ${Theme.color.primary};
`;