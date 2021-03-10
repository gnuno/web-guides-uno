import styled from "styled-components";
import FontSizes from "./FontSizes";
import Theme from "./Theme";

export const P1 = styled.p`
    padding: 16px 0px;
    color: ${Theme.text.primary};
    ${FontSizes.p1};
`;

export const P2 = styled.p`
    color: ${Theme.text.primary};
    ${FontSizes.p2};
`;

export const P3 = styled.p`
    color: ${Theme.text.primary};
    ${FontSizes.p3};
`;