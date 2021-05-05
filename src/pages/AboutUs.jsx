import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";
import ImageText from "../components/molecules/ImageText";
import ContactList from "../components/molecules/ContactList";
import MembersList from "../components/molecules/MembersList";

export default function Contribute() {
    const title = "Sobre GNUno";
    const description = "Somos un grupo de compañerxs de la carrera de Informática de la Universidad Nacional del Oeste que compartimos la misma pasión por esta ciencia y el entusiasmo para trabajar en proyectos, compartir un buen rato, enseñar y aprender juntxs";
    
    const imageText = []
    imageText[0] = "Hoy nuestro objetivo va más allá de dar a conocer y promover el uso del software libre y GNU/Linux, sino también capacitar, dar talleres, seminarios, charlas, traer invitados, realizar hackatones y más.";
    imageText[1] = "La idea es complementar el contenido de la carrera con diversas actividades sobre el campo de la informática, yendo de tópicos de nivel introductorio hasta avanzados si se da la chance.";
    imageText[2] = "¡Siempre que haya alguien que quiera compartir su conocimiento, siempre va a haber compañeros dispuestos a aprender!";
    const imagePath = "img/gnuno.jpg"

    return (
        <Container>
            <TextContainer title={title} description={description} telegram={"https://t.me/gnuno_merlo"}/>
            <ImageText text={imageText} path={imagePath}/>
            <ContactList/>
            <MembersList/>
        </Container>
    );
}
