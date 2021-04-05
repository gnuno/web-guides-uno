import React from "react";
import styled from "styled-components";

import { P2 } from "../atoms/Paragraph";
import { BigH2 } from "../atoms/Title";
import Breakpoints from "../atoms/Breakpoints";

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.3em;
    @media ${Breakpoints.mobileS} {
        flex-direction: column;
        margin-bottom: 1.3em;
        p{
            padding: 10px;
        }
    }
    @media ${Breakpoints.desktop} {
        flex-direction: row;
        margin-bottom: 2.5em;
        p{
            padding: 0px 0px 0px 10px;
            max-width: 60%;
            flex: 1 0 60%;
        }
        h2{
            text-align: center;
        }
    }
`;

export default function ImageText({title, text}) {
    
    return (
        <FlexContainer>
            <BigH2> {title} </BigH2>
            <P2> {text} </P2>
        </FlexContainer>
    );
}
