import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";
import MainCard from "../components/molecules/MainCard";
import GridContainer from "../components/molecules/GridContainer";
import  { getCourses }  from "../data/dataProvider";
import { H2 } from "../components/atoms/Title";

export default function Index() {
    const courses = getCourses();
    const title = "Roads Maps UNO";
    const description =
        "Bienvenidxs a esta pagina creada por la comunidad IT de la UNO, aquí podrás encontrarte con varios mapas a seguir para aprender una tecnología de punta a punta";

    return (
        <Container>
            <TextContainer title={title} description={description} />
            
            <H2 style={{textAlign: 'center'}}> Guias </H2>
            <GridContainer>
                {courses.map((element) => (
                    <MainCard key={element.name} element={element}/>
                ))}
            </GridContainer>
        </Container>
    );
}
