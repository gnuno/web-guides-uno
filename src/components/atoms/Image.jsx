import React from "react";
import styled from "styled-components";
import Theme from "./Theme";
import Breakpoints from "./Breakpoints";

const Imagen = styled.img`
    display: block;
    border-radius: 30px 0px 30px 0px;
    border: 1px solid ${Theme.color.secondary};
    box-shadow: 0px 2px 8px ${Theme.color.secondary}df;
    width: 100%;
    object-fit: contain;
    
`;

const ImageContainer = styled.a`
    display: block;
    margin: .5em 0em 0em;
    flex: 1 1;
    @media ${Breakpoints.tablet} {
        max-width: 400px;
    }
    @media ${Breakpoints.desktop} {
        max-width: 45%;
        margin: .5em 1em 0em 0em;
    }
    @media ${Breakpoints.desktopL} {
        max-width: 40%;
    }
`;

export default function Image({path}){
    return(
        <ImageContainer href={path} target="_blank">
            <Imagen src={path}></Imagen>
        </ImageContainer>
    );
}