import styled from "styled-components"
import Theme from "./Theme";

export const DividerBar = styled.div`
    border-top: .1em solid ${Theme.background.paper};
    box-shadow: 0px -3px 12px ${Theme.background.paper};
    margin: 1.5em 0;
`;