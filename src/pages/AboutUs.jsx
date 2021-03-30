import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";

export default function Contribute() {
    const title = "GNUno";
    const description =
        "Somos una comunidad de la UNO Informatica";

    return (
        <Container>
            <TextContainer title={title} description={description} />
        </Container>
    );
}
