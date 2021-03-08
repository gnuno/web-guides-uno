import styled from "styled-components"
import breakpoints from "./Breakpoints";

export const Container = styled.div`
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

export const CenteredContainer = styled(Container)`
  text-align: center;
`;