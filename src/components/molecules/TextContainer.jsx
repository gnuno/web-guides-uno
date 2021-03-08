import React from "react";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import { CenteredContainer } from "../atoms/Container";

export default function TextContainer(props) {
    const { title, description } = props;

    return (
        <CenteredContainer>
            <Title> {title} </Title>
            <Paragraph> {description} </Paragraph>
        </CenteredContainer>
    );
}
