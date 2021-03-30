import React from "react";
import styled from "styled-components";
import { H1 } from "../atoms/Title";
import { P1, P2 } from "../atoms/Paragraph";
import Breakpoints from "../atoms/Breakpoints";
import { HeaderContainer } from "../atoms/Container";
import { ReactComponent as TelegramIcon } from "../../assets/icons/TelegramIcon.svg"

const TelegramContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        margin-right: 7px;
        width: clamp(1.1rem, 0.9500rem + 0.6667vw, 1.3rem);
        height: clamp(1.1rem, 0.9500rem + 0.6667vw, 1.3rem);
        /*@media ${Breakpoints.mobileS} {
            width: 19px;
            height: 19px;
        }
        @media ${Breakpoints.tablet} {
            width: 21px;
            height: 21px;
        }
        @media ${Breakpoints.desktop} {
            width: 24px;
            height: 24px;
        }*/
    }
`

export default function TextContainer(props) {
    const { title, description, telegram } = props;

    return (
        <HeaderContainer>
            <H1> {title} </H1>
            <P1> {description} </P1>
            {telegram? 
                <TelegramContainer href={telegram}>
                    <TelegramIcon className="quintiary"/>
                    <P2 className="quintiary">Grupo de Telegram</P2>
                </TelegramContainer>
            : ""}
        </HeaderContainer>
    );
}
