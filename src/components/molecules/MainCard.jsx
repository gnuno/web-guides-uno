import React from "react"
import styled from "styled-components";
import Theme from "../atoms/Theme";
import { H2 } from "../atoms/Title";
import { P3 } from "../atoms/Paragraph";
import { Link } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../assets/icons/StarIcon.svg"

const Item = styled.li`
    border: 1px solid ${Theme.color.secondary};
    background: ${Theme.background.paper};
    border-radius: 30px;
    padding: 15px;
    box-shadow: 0px 2px 8px ${Theme.color.secondary}df;
    :hover{
        background: ${Theme.color.secondary}66;
    }
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

export default function MainCard({ element }){
    return(
        <Item>
            <StyledLink to={element.url}>
                <Title>
                    <H2>{element.name}</H2>
                    {element.proGuide? <Icon/> : ""}
                </Title>
                <P3>{element.contents}</P3>
            </StyledLink>
        </Item>
    )
};