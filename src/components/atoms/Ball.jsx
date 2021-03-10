import styled from "styled-components"
import Theme from "./Theme";

const Ball = styled.div`
    border-radius: 50%;
    display: inline-block;
    background: ${Theme.background.paper};
`

export const MainBall = styled(Ball)`
    padding: 0.45em;
    border: 0.3em solid;
    border-color: ${Theme.color.secondary}dd;
`;

export const ChildBall = styled(Ball)`
    padding: 0.38em;
    border: 0.25em solid;
    border-color: ${Theme.color.primary}dd;
`;