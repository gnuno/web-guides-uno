import React from "react";
import styled from "styled-components";

import { Container } from "../atoms/Container";
import { H2 } from "../atoms/Title";
import { BorderedButton } from "../atoms/Buttons";
import { P2 } from "../atoms/Paragraph";
import Breakpoints from "../atoms/Breakpoints";

const MainContainer = styled(Container)`
    margin: 2em auto 1em;
    h2{
        text-align: center;
        margin-bottom: .7em;
    }
`;

const FlexContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: strench;
    flex-wrap: wrap;
    a{
        margin: 5px 7px;
    }
    button{
        width: 100%;
        height: 100%;
    }
    @media ${Breakpoints.desktop} {
        a{
            width: 145px;
        }
    }
`;

export default function ContactList(){
    const links = [ 
        { name: "Web GNUno", url: "https://www.gnuno.com.ar" },
        { name: "ComunidadesIT", url: "https://gea-uno.github.io/info/comunidades/" },
        { name: "Instagram", url: "https://www.instagram.com/gnuno.merlo/" },
        { name: "Facebook", url: "https://www.facebook.com/GNUno.Merlo" },
        { name: "Discord", url: "https://discord.gg/CY552NV" },
        { name: "Github", url: "https://github.com/gnuno" }
    ]
    return(
        <MainContainer> 
            <H2> Enterate de nuestros Eventos y Sumate a participar! </H2>
            <FlexContainer>
            {links.map(item =>
                <a key={item.url} href={item.url}>
                    <BorderedButton>
                        <P2> {item.name} </P2>
                    </BorderedButton> 
                </a>
            )}
            </FlexContainer>
        </MainContainer>
    )
}