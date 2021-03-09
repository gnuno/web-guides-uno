import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";
import MainCard from "../components/molecules/MainCard";
import GridContainer from "../components/molecules/GridContainer";

export default function Index() {
    const roadmaps = [
        { name: "Web Fullstack", url: "/web" },
        { name: "GIT", url: "/git" },
        { name: "Bases de Datos", url: "/db" },
    ];

    const title = "Roads Maps UNO";
    const description =
        "Bienvenidxs a esta pagina creada por la comunidad IT de la UNO, aqui podras encontrarte con varios mapas a seguir para aprender una tecnologia de punta a punta";

    return (
        <Container>
            <TextContainer title={title} description={description} />
            <GridContainer>
                {roadmaps.map((element) => (
                    <MainCard key={element.name} element={element}/>
                ))}
            </GridContainer>
        </Container>
    );
}
