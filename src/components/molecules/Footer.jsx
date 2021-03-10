import styled from "styled-components";
import React from "react"
import { P3 } from "../atoms/Paragraph";

const Foot = styled.footer`
    font-weight: 600;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    position: absolute;
    width: 100%;
    span{ margin-left: 3px }
`;

export default function Footer(){
    return(
        <Foot>
            <a href="">
                <P3><i>Desarrollado por <span className="primary">GEA/GNUno/Igna Garcia</span></i></P3>
            </a>
        </Foot>
    );
}