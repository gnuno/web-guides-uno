const size = {
    mobileS: "0px",
    mobileM: "320px",
    mobileL: "375px",
    tablet: "425px",
    laptop: "768px",
    desktop: "1024px",
    desktopL: "1440px"
}
  
const Breakpoints = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktopL})`
}

export default Breakpoints;