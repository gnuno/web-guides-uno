import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import Dropdown from "../components/organism/Dropdown";
import TextContainer from "../components/molecules/TextContainer";

import getData from "../data/dataProvider";

const MainList = styled.ul`
    padding: 1.5em 0em;
`;

export default function Map() {
    const { name } = useParams();
    const { data, title, description } = getData(name);

    return (
        <>
            <TextContainer title={title} description={description} />
            <MainList>
                {data.map((element, index) => (
                    <Dropdown
                        lista={element.content}
                        open={index === 0}
                        titulo={element.title}
                    />
                ))}
                <Dropdown />
            </MainList>
        </>
    );
}
