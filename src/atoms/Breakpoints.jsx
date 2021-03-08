const size = {
    mobileS: "0px",
    mobileM: "321px",
    mobileL: "376px",
    tablet: "426px",
    laptop: "769px",
    desktop: "1025px",
    desktopL: "1441px"
  }
  
const breakpoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`
}

export default breakpoints;