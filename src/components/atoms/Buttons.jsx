import styled from "styled-components";
import Theme from "./Theme";

export const BorderedButton = styled.button`
    border-radius: 13px;
    padding: .75em .5em;
    min-width: 135px;
    width: 60%;
    max-width: 180px;
    border: 2px solid ${Theme.color.primary};
    background: transparent;
    outline: none;
    p{ color: ${Theme.color.primary}; }
    :hover{
        cursor: pointer;
        background: ${Theme.color.primary}44;
    }
`;

export const ContainedButton = styled(BorderedButton)`
    background: ${Theme.color.primary};
    p{ color: ${Theme.text.primary}; }
    :hover{
        background: ${Theme.color.primary}d5;
        border: 2px solid ${Theme.color.primary}d5;
    }
`;