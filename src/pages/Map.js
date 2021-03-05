import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { fonts, colors } from "../assets/styles";

import Dropdown from "../components/Dropdown";

import getData from "../data/dataProvider";

const Lista = styled.ul`
  padding: 1.5em 0em;
  font-family: ${fonts.txtFamily1};

  li ul {
    margin-left: 8px;
    border-left: 8px solid transparent;
    border-image: black;linear-gradient(
        to right,
        ${colors.bgGris3 + "40"} 0%,
        ${colors.bgGris3} 0.5%,
        ${colors.bgGris3 + "40"} 1%
      )
      1% stretch;
  }
`

export default function Map(props) {
    const { name } = useParams();
    const data = getData(name);
    return (
        <Lista>
            <Dropdown lista={data} open={true} titulo={data[0].title} />
            <Dropdown lista={data} open={false} titulo={"Historia Académica"} />
            <Dropdown lista={data} open={false} titulo={"Otras Actividades"} />
            <Dropdown />
        </Lista>
    );
}