import React from "react";
import styled from "styled-components";

import { Container } from "../atoms/Container";
import { H2 } from "../atoms/Title";
import { BorderedButton } from "../atoms/Buttons";
import { P2 } from "../atoms/Paragraph";

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
`;

export default function ContactList(){
    const links = [ 
        { name: "Web GNUno", url: "" },
        { name: "ComunidadesIT", url: "" },
        { name: "Instagram GNUno", url: "" },
        { name: "Facebook GNUno", url: "" },
        { name: "Discord", url: "" }
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