import React from "react";
import { useParams } from "react-router";

export default function Map(props) {
    const { name } = useParams();
  return (
    <> Hola mundo {name}</>
  );
}

import React from "react"
import styled from "styled-components"
import { Flip } from "react-reveal"

import { Text, Parrafo, Titulo, Container, colors, fonts } from "../../../assets/styles"
import Dropdown from "./Dropdown"

import studies from "../../../data/studies.json"
import activities from "../../../data/otherActivities.json"
import jobs from "../../../data/jobs.json"

const Lista = styled.ul`
  padding: 1.5em 0em;
  font-family: ${fonts.txtFamily1};

  li ul {
    margin-left: 8px;
    border-left: 8px solid transparent;
    border-image: linear-gradient(
        to right,
        ${colors.bgGris3 + "40"} 0%,
        ${colors.bgGris3} 0.5%,
        ${colors.bgGris3 + "40"} 1%
      )
      1% stretch;
  }
`

const Background = styled.div`
  padding: 3em 0em;
`

export default function Trayectoria() {
  return (
    <Background>
      <Container>
        <Text>
          <Flip top duration={2000}>
            <Titulo> Mi Historia </Titulo>
            <Parrafo>
              Aquí podrás leer acerca de mi desarrollo profesional, académico y
              personal resumido en actividades concretadas, dando una breve descripción y si es una actividad en progreso o ya finalizada.
            </Parrafo>
          </Flip>
        </Text>
        <Flip bottom duration={2000}>
          <Lista>
            <Dropdown lista={jobs} open={true} titulo={"Experiencia Laboral"} />
            <Dropdown lista={studies} open={false} titulo={"Historia Académica"} />
            <Dropdown lista={activities} open={false} titulo={"Otras Actividades"} />
            <Dropdown />
          </Lista>
        </Flip>
      </Container>
    </Background>
  )
}
