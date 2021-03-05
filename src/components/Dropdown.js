import React, {useState} from "react"
import styled from "styled-components"

import {colors} from "../../../assets/styles"
import Card from "./Card"

const Ball = styled.div`
  border-radius: 50%;
  padding: 0.45em;
  display: inline-block;
  background: ${colors.bgGris1};
  border: 0.3em solid ${colors.bgGris3};
`

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin-left: 7px;
    font-weight: 700;
    font-size: 1.2em;
    color: ${colors.txtBgClaro2};
    i {
      vertical-align: middle;
    }
    .fa-stack {
      font-size: 0.5em;
    }
    .circulo {
      color: ${colors.bgGris1 + "ee"};
      &-active {
        color: ${colors.detalle1 + "bb"};
      }
    }
    .flecha {
      color: ${colors.detalle1};
      font-size: 1.5em;
      &-active {
        color: ${colors.bgGris1 + "bb"};
        font-size: 1.5em;
      }
    }
  }
  cursor: pointer;
  :hover {
    h2 {
      color: ${colors.txtBgClaro2 + "bb"};
    }
    div {
      background: ${colors.bgGris1 + "bb"};
    }
    .circulo {
      color: ${colors.bgGris1 + "bb"};
    }
  }
`

const Diagonal = styled.div`
  border-left: 35px solid red;
  border-top: 38px solid #4c4c4c;
  border-image: linear-gradient(
      to bottom left,
      ${colors.bgGris4 + "20"} 40%,
      ${colors.detalle1 + "aa"},
      ${colors.bgGris4 + "20"} 60%
    )
    100% stretch;
  position: relative;
  z-index: -10;
  left: 0px;
  bottom: 7px;
  margin-bottom: -18px;
`

/*const InvertDiagonal = styled(Diagonal)`
  border-left: 32px solid red;
  border-top: 38px solid #4c4c4c;
  border-image: linear-gradient(
    to bottom right,
    ${colors.bgGris4 + "15"} 40%,
    ${colors.detalle1 + "aa"},
    ${colors.bgGris4 + "15"} 60%
  )
  100% stretch;
  margin-top: -10px;
  margin-bottom: -15px;
`*/

export default function Trayectoria(props) {
  const [open, setOpen] = useState(props.open)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <li style={{display: "block", maxWidth: "700px", margin: "auto"}}>
      <FlexBox
        open={open}
        onClick={handleClick}
        style={open ? {marginBottom: "0px"} : {marginBottom: "5px"}}>
        <Ball />
        {props.titulo ? (
          <h2>
            {props.titulo}
            {open ? (
              <span className="fa-stack">
                <i className="fas fa-circle fa-stack-2x circulo-active"></i>
                <i className="fas fa-angle-down fa-stack-1x flecha-active"></i>
              </span>
            ) : (
              <span className="fa-stack">
                <i className="fas fa-circle fa-stack-2x circulo"></i>
                <i className="fas fa-angle-right fa-stack-1x flecha"></i>
              </span>
            )}
          </h2>
        ) : (
          ""
        )}
      </FlexBox>
      {props.lista ? (
        <ul style={open ? {display: "block"} : {display: "none"}}>
          <Diagonal />
          {props.lista.map((x) => (
            <Card element={x} key={x.title}></Card>
          ))}
          {/*<InvertDiagonal />*/}
        </ul>
      ) : (
        ""
      )}
    </li>
  )
}
