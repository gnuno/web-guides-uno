import React from "react";
import styled from "styled-components";

import { Container } from "../atoms/Container";
import { Link } from "react-router-dom";
import Theme from "../atoms/Theme";

const Title = styled(Link)`
    font-weight: 700;
    text-align: left;
    color: ${Theme.text.secondary};
    :hover{
        color: ${Theme.text.secondary}df;
        text-decoration: none;
    }
    font-size: 24px;
`;

export default function Header(){
    const Header = styled.header`
        background: ${Theme.color.primary};
        display: flex;
        align-items: center;
        box-shadow: 0px 2px 8px 0px ${Theme.color.primary}BF;
        height: 50px;
    `;

    return(
        <Header>
            <Container>
                <Title to="/"> Guides UNO </Title>
            </Container>
        </Header>
    );
}