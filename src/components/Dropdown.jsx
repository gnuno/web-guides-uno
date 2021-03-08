import React, { useState } from "react";

import Card from "./Item";
import { Diagonal, InvertDiagonal } from "./atoms/Diagonal";
import { MainBall } from "./atoms/Ball";
import DropdownHeader from "./atoms/DropdownHeader";

export default function Dropdown(props) {
    const { lista, open, titulo } = props;
    const [isOpen, setOpen] = useState(open);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <li style={{ display: "block", maxWidth: "700px", margin: "auto" }}>
            <DropdownHeader open={isOpen} onClick={handleClick}>
                <MainBall />
                {titulo ? <h2> {titulo} </h2> : ""}
            </DropdownHeader>
            {lista ? (
                <ul style={isOpen ? { display: "block" } : { display: "none" }}>
                    <Diagonal />
                    {lista.map((element) => (
                        <Card element={element} key={element.name}></Card>
                    ))}
                    <InvertDiagonal />
                </ul>
            ) : (
                ""
            )}
        </li>
    );
}
