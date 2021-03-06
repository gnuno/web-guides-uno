import styled from "styled-components"

import { breakpoints as breakpoints } from "../assets/styles";

const Container = styled.div`
  margin: 0em auto;

  @media ${breakpoints.mobileS} {
    max-width: "360px";
    width: 90%;
  }
  @media ${breakpoints.mobileL} {
    max-width: "400px";
  }
  @media ${breakpoints.tablet} {
    max-width: "720px";
    width: 80%;
  }
  @media ${breakpoints.laptop} {
    max-width: "960px";
  }
  @media ${breakpoints.desktop} {
    max-width: "1280px";
  }
`;
export default Container;