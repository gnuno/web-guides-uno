import React from "react";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";
import MainCard from "../components/molecules/MainCard";
import GridContainer from "../components/molecules/GridContainer";
import { H2 } from "../components/atoms/Title";
import MainButtons from "../components/molecules/MainButtons";
import { DividerBar } from "../components/atoms/DividerBar";

import Courses from "../data/courses.json";
import Careers from "../data/careers.json";

export default function Index() {
    const title = "AutodidactaUNO";
    const careers = Object.values(Careers)
    const courses = Object.values(Courses)
    const description =
        "Bienvenidxs a esta pagina creada por la comunidad IT de la UNO, aquí podrás encontrarte con varias guías a seguir para aprender una tecnología de punta a punta, con links de bibliografía, ejercicios para hacer, videos de apoyo y grupo de telegram para consultar.";

    return (
        <Container>
            <TextContainer title={title} description={description}> <MainButtons/> </TextContainer>
            
            <DividerBar/>

            <H2 style={{textAlign: 'center'}} className='quintiary'> Nuestras Carreras </H2>
            <GridContainer>
                {careers.map((element) => (
                    <MainCard key={element.name} element={element} career={true}/>
                ))}
            </GridContainer>

            <H2 style={{textAlign: 'center'}}> Nuestras Guías </H2>
            <GridContainer>
                {courses.map((element) => element.visible ? <MainCard key={element.name} element={element} /> : ""
                )}
            </GridContainer>
        </Container>
    );
}
