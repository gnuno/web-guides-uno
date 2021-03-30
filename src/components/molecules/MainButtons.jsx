import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/Container"
import { P2 } from "../atoms/Paragraph";
import { Link } from "react-router-dom";
import { ContainedButton, BorderedButton } from "../atoms/Buttons";

const FlexContainer = styled(Container)`
    display: flex;
    justify-content: space-evenly;
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