import React from "react";
import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";

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
            <ul>
                {roadmaps.map((element) => (
                    <li key={element.name}>
                        <a href={element.url}>{element.name}</a>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
