import React from "react";
import styled from "styled-components";
import { H1 } from "../atoms/Title";
import { P1, P2 } from "../atoms/Paragraph";
import { HeaderContainer } from "../atoms/Container";
import { ReactComponent as TelegramIcon } from "../../assets/icons/TelegramIcon.svg"
import parse from 'html-react-parser';

const TelegramContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        margin-right: 7px;
        width: clamp(1.1rem, 0.9500rem + 0.6667vw, 1.3rem);
        height: clamp(1.1rem, 0.9500rem + 0.6667vw, 1.3rem);
    }
    p.quintiary:hover{ text-decoration: underline }
`

export default function TextContainer(props) {
    const { title, description, telegram, children } = props;

    return (
        <HeaderContainer>
            <H1> {title} </H1>
            <P1> {parse(`${description}`)} </P1>
            {telegram? 
                <TelegramContainer href={telegram}>
                    <TelegramIcon className="quintiary"/>
                    <P2 className="quintiary">Grupo de Telegram</P2>
                </TelegramContainer>
            : ""}
            {children}
            
        </HeaderContainer>
    );
}
