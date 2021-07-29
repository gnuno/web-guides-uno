import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import Dropdown from "../components/organism/Dropdown";
import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";

import { getData } from "../data/dataProvider";

const MainList = styled.ul`
    padding: 1.5em 0em;
`;

export default function Guide() {
    const { name } = useParams();
    const { data, title, description, telegram } = getData(name);

    return (
        <>
            <TextContainer title={title} description={description} telegram={telegram}/>
            <Container>
                <MainList>
                    {data.map((element, index) => (
                        <Dropdown
                            lista={element.content}
                            key={element.title}
                            open={index === 0}
                            titulo={element.title}
                            lastChild={index === data.length - 1}
                        />
                    ))
                    }
                    <Dropdown />
                </MainList>
            </Container>
        </>
    );
}
