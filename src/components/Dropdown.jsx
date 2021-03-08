import React, { useState } from "react";
import styled from "styled-components";
import Theme from "./atoms/Theme";

import Card from "./Item";
import { Diagonal, InvertDiagonal} from "./atoms/Diagonal"
import { MainBall } from "./atoms/Ball";

const FlexBox = styled.div`
    display: flex;
    align-items: center;
    h2 {
        margin-left: 7px;
        font-weight: 700;
        font-size: 1.2em;
        color: ${Theme.txtBgClaro2};
        i {
            vertical-align: middle;
        }
        .fa-stack {
            font-size: 0.5em;
        }
        .circulo {
            color: ${Theme.bgGris1 + "ee"};
            &-active {
                color: ${Theme.detalle1 + "bb"};
            }
        }
        .flecha {
            color: ${Theme.detalle1};
            font-size: 1.5em;
            &-active {
                color: ${Theme.bgGris1 + "bb"};
                font-size: 1.5em;
            }
        }
    }
    cursor: pointer;
    :hover {
        h2 {
            color: ${Theme.txtBgClaro2 + "bb"};
        }
        div {
            background: ${Theme.bgGris1 + "bb"};
        }
        .circulo {
            color: ${Theme.bgGris1 + "bb"};
        }
    }
`;

/*
`*/

export default function Dropdown(props) {
    const { lista, open, titulo } = props;
    const [isOpen, setOpen] = useState(open);

    const handleClick = () => {
        setOpen(!isOpen);
    };

    return (
        <li style={{ display: "block", maxWidth: "700px", margin: "auto" }}>
            <FlexBox
                open={isOpen}
                onClick={handleClick}
                style={
                    isOpen ? { marginBottom: "0px" } : { marginBottom: "5px" }
                }
            >
                <MainBall />
                {titulo ? (
                    <h2>
                        {titulo}
                        {isOpen ? (
                            <span className='fa-stack'>
                                <i className='fas fa-circle fa-stack-2x circulo-active'></i>
                                <i className='fas fa-angle-down fa-stack-1x flecha-active'></i>
                            </span>
                        ) : (
                            <span className='fa-stack'>
                                <i className='fas fa-circle fa-stack-2x circulo'></i>
                                <i className='fas fa-angle-right fa-stack-1x flecha'></i>
                            </span>
                        )}
                    </h2>
                ) : (
                    ""
                )}
            </FlexBox>
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
