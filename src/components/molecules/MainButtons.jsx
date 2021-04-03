import React from "react";
import styled from "styled-components";
import { P2 } from "../atoms/Paragraph";
import { Link } from "react-router-dom";
import { ContainedButton, BorderedButton } from "../atoms/Buttons";

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: .5em;
    margin-bottom: 2em;
    > *{ flex: 1 1 auto }
`

export default function Footer(){
    return(
        <FlexContainer>
            <Link to="/contribute">
                <BorderedButton>
                    <P2> Contribuir </P2>
                </BorderedButton>
            </Link>
            <Link to="/aboutus">
                <ContainedButton>
                    <P2> Sobre Nosotros </P2>
                </ContainedButton>
            </Link>
        </FlexContainer>
    );
}