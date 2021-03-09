import React from "react";
import { H1 } from "../atoms/Title";
import { P1 } from "../atoms/Paragraph";
import { HeaderContainer } from "../atoms/Container";

export default function TextContainer(props) {
    const { title, description } = props;

    return (
        <HeaderContainer>
            <H1> {title} </H1>
            <P1> {description} </P1>
        </HeaderContainer>
    );
}
