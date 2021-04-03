import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";
import ImageText from "../components/molecules/ImageText";
import ContactList from "../components/molecules/ContactList";

export default function Contribute() {
    const title = "GNUno";
    const description =
        "Somos un grupo de compañerxs de la carrera de Informática de la Universidad Nacional del Oeste que compartimos la misma pasion por esta ciencia y el entusiasmo para trabajar en proyectos, compartir un buen rato, enseñar y aprender juntxs";

    return (
        <Container>
            <TextContainer title={title} description={description} telegram={"https://t.me/gnuno_merlo"}/>
            <ImageText/>
            <ContactList/>
        </Container>
    );
}
