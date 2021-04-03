import React from "react";
import styled from "styled-components";

import Image from "../atoms/Image";
import { P2 } from "../atoms/Paragraph";
import Breakpoints from "../atoms/Breakpoints";
import { Container } from "../atoms/Container";

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${Breakpoints.mobileS} {
        flex-direction: column;
        p{
            padding: 0px 10px;
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

const ColumnContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        padding: 0px 10px;
        margin-top: 10px;
    }
    .terciary{
        text-align: center;
        font-weight: 600;
    }
`;

export default function ImageText() {
    const desc1 =
        "Hoy nuestro objetivo va más allá de dar a conocer y promover el uso del software libre y GNU/Linux, sino también capacitar, dar talleres, seminarios, charlas, traer invitados, realizar hackatones y mas.";
    const desc2 = 
        "La idea es complementar el contenido de la carrera con diversas actividades sobre el campo de la informática, yendo de tópicos de nivel introductorio hasta avanzados si se da la chance.";
    const final = "¡Siempre que haya alguien que quiera compartir su conocimiento, siempre va a haber compañeros dispuestos a aprender!";

    return (
        <ColumnContainer>
            <FlexContainer>
                <Image/>
                <P2> {desc1} </P2>
            </FlexContainer>
            <div>
                <P2> {desc2} </P2>
                <P2 className="terciary"> {final} </P2>
            </div>
        </ColumnContainer>
        
    );
}