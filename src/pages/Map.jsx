import React from "react";
import { useParams } from "react-router";

import Dropdown from "../components/Dropdown";
import List from "../components/atoms/List";
import TextContainer from "../components/molecules/TextContainer";

import getData from "../data/dataProvider";

export default function Map() {
    const { name } = useParams();
    const { data, title, description } = getData(name);

    return (
        <>
            <TextContainer title={title} description={description} />
            <List>
                {data.map((element, index) => (
                    <Dropdown
                        lista={element.content}
                        open={index === 0}
                        titulo={element.title}
                    />
                ))}
                <Dropdown />
            </List>
        </>
    );
}
