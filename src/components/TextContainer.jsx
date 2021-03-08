import styled from "styled-components"

import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Container from "../atoms/Container";

export default function TextContainer(props) {
    const { title, description } = props;

    return (
        <Container style={{textAlign: "center"}}>
            <Title> { title } </Title>
            <Paragraph> { description } </Paragraph>
        </Container>
    );
}