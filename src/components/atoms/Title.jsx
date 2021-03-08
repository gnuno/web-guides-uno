import styled from "styled-components";
import Theme from "./Theme";
import FontSizes from "./FontSizes";

export const H1 = styled.h1`
    font-weight: 700;
    color: ${Theme.text.secondary};
    ${FontSizes.h1};
`;

export const H2 = styled.h2`
    margin-left: 7px;
    font-weight: 600;
    color: ${Theme.text.primary};
    ${FontSizes.h2};
`;

export const H3 = styled.h3`
    margin-left: 6px;
    font-weight: 500;
    ${FontSizes.h3};
`;