import React from "react";
import styled from "styled-components";

import Image from "../atoms/Image";
import { P2 } from "../atoms/Paragraph";
import Breakpoints from "../atoms/Breakpoints";

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    p{
        padding: 0px 10px;
        margin-top: 10px;
        div{
            margin-bottom: 5px;
        }
    }
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${Breakpoints.mobileS} {
        flex-direction: column;
        div{
            p{ padding: 0px; }
        }
    }
    @media ${Breakpoints.desktop} {
        flex-direction: row;
        p{
            max-width: 60%;
            flex: 1 0;
        }
    }
`;

export default function ImageText({title, text, path}) {
    const desc1 = text[0];
    const desc2 = text[1];
    const final = text[2];

    return (
        <ColumnContainer>
            <FlexContainer>
                <Image path={path}/>
                <P2> <div className="secondary bold"> {title} </div> {desc1} </P2>
            </FlexContainer>
            {desc2 || final?
                <div>
                    <P2> {desc2} </P2>
                    <P2 className="cuartiary bold center"> {final} </P2>
                </div>
            : ""}
        </ColumnContainer>
        
    );
}
