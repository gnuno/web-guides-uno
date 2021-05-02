import React from "react";
import styled from "styled-components";
import Theme from "../components/atoms/Theme";

import TextContainer from "../components/molecules/TextContainer";
import { Container } from "../components/atoms/Container";
import ImageText from "../components/molecules/ImageText";
import TitleText from "../components/molecules/TitleText";
import { BigH2 } from "../components/atoms/Title";

const H2 = styled(BigH2)`
    text-align: center;
    margin-bottom: 1rem;
`

export default function Contribute() {
    const title = "Contribuir";
    const description = "Los aportes de la comunidad son una parte fundamental de este proyecto, por eso en esta guia se detallaran los pasos a seguir para hacer una contribucion";

    const smallContributions = []
    smallContributions[0] = <span>Lo primero que tenes que hacer para hacer cualquier aporte es hacer un fork del <a href="https://github.com/gnuno/web-guides-uno">repositorio</a>, luego te descargas/clonas tu fork para empezar a trabajar. La metodologia es la de siempre, ir haciendo cambios y commits, para al final hacer un push a tu repo.</span>;
    smallContributions[1] = "Para finalizar con el aporte lo que tenes que hacer es crear un Pull Request, diriguiendote al repositorio en github en el que subiste los cambios y dandole al boton 'Pull Request' como muestra la imagen.";
    const smallContributionsPath = "img/basicContribute.gif"

    const issueContributions = []
    issueContributions[0] = <span>Otra manera de contribuir es proponiendo cambios o nuevas funcionalidades, o informando sobre fallos de la app, todo esto lo podes hacer creando un nuevo <a href="https://github.com/gnuno/web-guides-uno/issues">Isuse</a>.</span>
    const issueContributionsPath = "img/issueContribute.gif"

    const bigContributions = []
    bigContributions[0] = "Para esto se deben seguir los mismo pasos que para una pequena contribucion, pero te ahorramos de leer el codigo y entender que te esta faltando. Lo primero que tenes que hacer es crear en la carpeta data tu guia .json";
    bigContributions[1] = "Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest";
    bigContributions[2] = "Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest";
    const bicContributionsPath = "img/gnuno.jpg"

    const titleText = []
    titleText[0] = "Porque Contribuir?"
    titleText[1] = "Llasdlsaldalsdlasa adsadsa dsad adsa dsa adsas"

    return (
        <Container>
            <TextContainer title={title} description={description} />
            <TitleText title={titleText[0]} text={titleText[1]}/>
            <H2> Como Contribuir? </H2>
            <ImageText title="Pequenos aportes: " text={smallContributions} path={smallContributionsPath}/>

            <ImageText title="Sugiriendo cambios: " text={issueContributions} path={issueContributionsPath}/>
            
            <ImageText title="Crear nuevas Guias: " text={bigContributions} path={bicContributionsPath}/>
        </Container>
    );
}
