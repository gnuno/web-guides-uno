import React from "react";
import Title from "../atoms/Title";
import { Paragraph } from "../atoms/Paragraph";
import { HeaderContainer } from "../atoms/Container";

export default function TextContainer(props) {
    const { title, description } = props;

    return (
        <HeaderContainer>
            <Title> {title} </Title>
            <Paragraph> {description} </Paragraph>
        </HeaderContainer>
    );
}
