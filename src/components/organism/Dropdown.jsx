import React, { useState } from "react";
import styled from "styled-components";

import ChildItem from "./ChildItem";
import { Diagonal, InvertDiagonal } from "../atoms/Diagonal";
import { MainBall } from "../atoms/Ball";
import DropdownHeader from "../atoms/DropdownHeader";
import ListChild from "../atoms/ListChild";
import { H2 } from "../atoms/Title";

const MainItem = styled.li`
    display: block;
    max-width: 700px;
    margin: auto;
`;

export default function Dropdown(props) {
    const { lista, open, titulo } = props;
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
                        <H2> {titulo} </H2>
                    </DropdownHeader>
                    <ListChild open={isOpen}>
                        <Diagonal />
                        {lista.map((element) => (
                            <ChildItem element={element} key={element.name}></ChildItem>
                        ))}
                        <InvertDiagonal />
                    </ListChild>
                </>
            ) : (
                <DropdownHeader>
                    <MainBall />
                </DropdownHeader>
            )}
        </MainItem>
    );
}
