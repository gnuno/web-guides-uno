import React from "react";
import styled from "styled-components";

import ImageSlider from "../atoms/ImageSlider";
import Imagen from "../atoms/Imagen";
import { P2 } from "../atoms/Paragraph";
import Breakpoints from "../atoms/Breakpoints";

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.2rem;
    margin-bottom: 2rem;
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

export default function ImageText({title, text, paths}) {
    const desc1 = text[0];
    const desc2 = text[1];
    const final = text[2];
    console.log(paths)
    return (
        <ColumnContainer>
            <FlexContainer>
                {paths.length > 1? <ImageSlider paths={paths}/> : <Imagen path={paths[0]}/> }
                <P2> <div className="secondary bold underline"> {title} </div> {desc1} </P2>
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
