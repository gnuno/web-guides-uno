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
    const description =
        "Los aportes de la comunidad son una parte fundamental de este proyecto, por eso en esta guia se detallaran los pasos a seguir para hacer una contribucion";

    const smallContributions = []
    smallContributions[0] = "Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest";
    smallContributions[1] = "Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest";
    smallContributions[2] = "Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest";
    const smallContributionsPath = "img/gnuno.jpg"

    const bigContributions = []
    bigContributions[0] = "Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest Fork - Cambios + Commits - PullRequest";
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
            
            <ImageText title="Crear nuevas Guias: " text={bigContributions} path={bicContributionsPath}/>
        </Container>
    );
}
