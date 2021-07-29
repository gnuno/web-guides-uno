import React, { useState } from "react";
import styled from "styled-components";

import ChildItem from "./ChildItem";
import { Diagonal, InvertDiagonal } from "../atoms/Diagonal";
import { MainBall } from "../atoms/Ball";
import DropdownHeader from "../atoms/DropdownHeader";
import ListChild from "../atoms/ListChild";
import { H2 } from "../atoms/Title";
import { P3 } from "../atoms/Paragraph";
import Breakpoints from "../atoms/Breakpoints";

const MainItem = styled.li`
    display: block;
    max-width: 700px;
    margin: auto;
    @media ${Breakpoints.desktopL} {
        max-width: 800px;
    }
`;

const Detail = styled(P3)`
    flex: 1 0;
    text-align: right;
    .primary{
        font-weight: bold;
    }
`

export default function Dropdown(props) {
    const { lista, open, titulo, lastChild } = props;
    const [isOpen, setOpen] = useState(open);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <MainItem>
            {titulo ? (
                <>
                    <DropdownHeader open={isOpen} onClick={handleClick}>
                        <MainBall />
                        <H2> {titulo}</H2>
                        <Detail> <span className="primary">{lista.length}</span> Unidades </Detail>
                    </DropdownHeader>
                    <ListChild open={isOpen}>
                        <Diagonal />
                        {lista.map((element) => (
                            <ChildItem element={element} key={element.name}></ChildItem>
                        ))}
                        <InvertDiagonal />
                    </ListChild>
                    {(isOpen && lastChild) ?
                        <DropdownHeader>
                            <MainBall />
                        </DropdownHeader> : ""
                    }
                </>
            ) :  ""
            }
        </MainItem>
    );
}
