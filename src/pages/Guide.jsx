import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";

import Dropdown from "../components/organism/Dropdown";
import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";

import Courses from "../data/courses.json";
import Careers from "../data/careers.json";

const MainList = styled.ul`
    padding: 1.5em 0em;
`;

const getData = (id, isCareer) => {
    return isCareer ? Careers[id] : Courses[id]
}

export default function Guide({ career }) {
    const { name } = useParams();
    const { title, description, telegram, content } = getData(name, career);
    
    return (
        <>
            <TextContainer title={title} description={description} telegram={telegram}/>
            <Container>
                <MainList>
                    {career ? 
                        content.map((element, index) => {
                            let topics = typeof element.content === 'string' ?  getData(element.content, false) : element
                            
                            return <Dropdown
                                    lista={topics.content}
                                    key={topics.title}
                                    open={index === 0}
                                    titulo={topics.title}
                                    lastChild={index === content.length - 1}
                                />
                        })
                    :
                        content.length > 0 ?
                            <Dropdown
                                lista={content}
                                key={title}
                                open={true}
                                titulo={title}
                                lastChild={-1}
                            /> 
                        : ""
                    }
                    <Dropdown />
                </MainList>
            </Container>
        </>
    );
}
