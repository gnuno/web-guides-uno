import React from "react";
import { H1 } from "../atoms/Title";
import { Paragraph } from "../atoms/Paragraph";
import { HeaderContainer } from "../atoms/Container";

export default function TextContainer(props) {
    const { title, description } = props;

    return (
        <HeaderContainer>
            <H1> {title} </H1>
            <Paragraph> {description} </Paragraph>
        </HeaderContainer>
    );
}
