import styled from "styled-components";
import Theme from "./Theme";
import FontSizes from "./FontSizes";

export const H1 = styled.h1`
    font-weight: 700;
    color: ${Theme.color.primary};
    ${FontSizes.h1};
`;

export const BigH2 = styled.h2`
    font-weight: 700;
    color: ${Theme.color.primary};
    ${FontSizes.h1medio};
`;

export const H2 = styled.h2`
    font-weight: 600;
    color: ${Theme.color.secondary};
    ${FontSizes.h2};
`;

export const H3 = styled.h3`
    margin-left: 6px;
    font-weight: 500;
    color: ${Theme.color.secondary};
    ${FontSizes.h3};
`;