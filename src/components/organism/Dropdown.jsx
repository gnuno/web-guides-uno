import React, { useState } from "react";

import Card from "../Item";
import { Diagonal, InvertDiagonal } from "../atoms/Diagonal";
import { MainBall } from "../atoms/Ball";
import DropdownHeader from "../atoms/DropdownHeader";
import { ListChild } from "../atoms/List";
import MainItem from "../atoms/MainItem";

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
                        <h2> {titulo} </h2>
                    </DropdownHeader>
                    <ListChild open={isOpen}>
                        <Diagonal />
                        {lista.map((element) => (
                            <Card element={element} key={element.name}></Card>
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
