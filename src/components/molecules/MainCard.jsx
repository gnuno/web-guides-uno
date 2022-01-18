import React from "react"
import styled from "styled-components";
import Theme from "../atoms/Theme";
import { H2 } from "../atoms/Title";
import { P3 } from "../atoms/Paragraph";
import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../assets/icons/StarIcon.svg"

import Courses from "../../data/courses.json";

const Item = styled.li`
    border: 1px solid ${props => props.color};
    background: ${Theme.background.paper};
    border-radius: 30px;
    padding: 15px;
    box-shadow: 0px 2px 8px ${props => props.color}df;
    :hover{
        background: ${props => props.color}66;
    }
    ${H2} { color: ${props => props.color}}
`;

const StyledLink = styled(Link)`
    display: flex;
    margin: auto;
    flex-direction: column;
    height: 100%;
    :hover{ text-decoration: none }
    ${P3}{ flex: 2 0 }
`;

const Title = styled.div`
    flex: 1 1;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Icon = styled(StarIcon)`
    display: inline;
    fill: ${Theme.color.cuartiary};
`

export default function MainCard({ element, career }){
    const getCourse = (id) => Courses[id]
    

    const getContents = () => {
        var contents = " - ";

        career ? 
            (
                element.content.forEach(guide => {
                    if(typeof guide.content === "string")
                        contents += getCourse(guide.content).title + " - "
                    else contents += guide.title + " - "
                })
            ) 
            : 
            (
                element.content.forEach(modules =>
                    modules.void ? "" : contents += modules.name + " - "
                )
            )

        return contents;
    }

    let color = career ? Theme.color.quintiary : Theme.color.secondary

    return(
        <Item color={color}>
            <StyledLink to={(career ? "/carrera" : "/guia") + element.url}>
                <Title>
                    <H2>{element.title}</H2>
                </Title>
                <P3>{getContents()}</P3>
            </StyledLink>
        </Item>
    )
};