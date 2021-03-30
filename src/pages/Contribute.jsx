import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";

export default function Contribute() {
    const title = "Como Contribuir?";
    const description =
        "Los aportes de la comunidad son una parte fundamental de este proyecto, por eso en esta guia se detallaran los pasos a seguir para hacer una contribucion";

    return (
        <Container>
            <TextContainer title={title} description={description} />
        </Container>
    );
}
