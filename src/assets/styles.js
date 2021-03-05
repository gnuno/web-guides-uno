import styled from "styled-components"

export const fonts = {
  txtFamily1: "'Ubuntu', sans-serif",
  txtFamily2: "'Oswald', sans-serif"
}

export const colors = {
  bgOscuro: "#373737",
  bgGris1: "#474747",
  bgGris2: "#777777",
  bgGris3: "#bdbdbd",
  bgGris4: "#e0e0e0",
  bgClaro: "#eeeeee",
  bgExtraClaro: "#fafafa",
  detalle1: "#fb8c00",
  /*verde 43a047 
  verde agua 00acc1
  azul 039be5
  naranja fb8c00
   */
  detalle1Claro: "#ffa726",
  detalle1Oscuro: "#f57c00",
  txtBgOscuro: "#f5f5f5",
  txtBgOscuro2: "#e0e0e0",
  txtBgClaro: "#212121",
  txtBgClaro2: "#424242"
}

const size = {
  mobileS: "0px",
  mobileM: "321px",
  mobileL: "376px",
  tablet: "426px",
  laptop: "769px",
  desktop: "1025px",
  desktopL: "1441px"
}

export const breackpoints = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`
}