import React from "react";
import styled from "styled-components";

import { colors, breackpoints } from "../../../assets/styles";

const Item = styled.li`
  padding: 0em 0em 0em 1.5em;
`;

const Ball = styled.div`
  border-radius: 50%;
  padding: 0.3em;
  display: inline-block;
  background: ${colors.bgGris1};
  border: 0.25em solid ${colors.detalle1};
`;

const HeadElement = styled.div`
  display: flex;
  align-items: flex-start;
  h3 {
    flex: 2 0;
    margin-left: 6px;
    font-weight: 500;
    color: ${colors.txtBgClaro2};
  }
  span {
    color: ${colors.txtBgClaro2 + "99"};
    white-space: nowrap;
    font-size: 0.8em;
    border-radius: 30px;
    align-self: flex-end;
    display: inline-block;
    padding: 0.15em 0.4em;
  }
  @media ${breackpoints.mobileS} {
    h3 {
      font-size: 1em;
    }
    span {
      display: none;
    }
  }
  @media ${breackpoints.tablet} {
    h3 {
      font-size: 1.1em;
    }
    span {
      display: block;
    }
  }
`;

const ContentElement = styled.div`
  margin-left: 6px;
  padding: 0px 8px 15px 15px;
  border-left: 6px solid transparent;
  border-image: linear-gradient(
      to right,
      ${colors.bgGris3 + "40"} 0%,
      ${colors.detalle1 + "aa"} 0.5%,
      ${colors.bgGris3 + "40"} 1%
    )
    1% stretch;
  h4 {
    font-weight: lighter;
    color: ${colors.bgGris1};
    margin-bottom: 7px;
  }
  p {
    color: ${colors.txtBgClaro2};
    margin-top: 5px;
  }
  span {
    color: ${colors.detalle1Oscuro};
  }
  @media ${breackpoints.mobileS} {
    h4 {
      font-size: 0.92em;
    }
    p,
    span {
      font-size: 0.85em;
    }
  }
  @media ${breackpoints.tablet} {
    h4 {
      font-size: 1.05em;
    }
    p,
    span {
      font-size: 0.95em;
    }
  }
`;

export default function Card(props) {
  let element = props.element;
  return (
    <Item>
      <HeadElement>
        <Ball />
        <h3> {element.title} </h3>
        {element.start ? (
          <span
            style={{
              background: element.isActive ? colors.detalle1 : colors.bgGris3,
            }}
          >
            {" "}
            {element.start}
            {element.isActive ? "Actualidad" : element.end}{" "}
          </span>
        ) : (
          ""
        )}
      </HeadElement>
      {element.start ? (
        <ContentElement>
          <h4> {element.subtitle} </h4>
          {element.progress ? <span> {element.progress} Completo </span> : ""}
          <p> {element.description} </p>
        </ContentElement>
      ) : (
        <div style={{ paddingBottom: "12px" }}></div>
      )}
    </Item>
  );
}
