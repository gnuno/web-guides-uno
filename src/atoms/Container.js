import styled from "styled-components"

import { breackpoints } from "../assets/styles";

const Container = styled.div`
  margin: 0em auto;

  @media ${breackpoints.mobileS} {
    max-width: "360px";
    width: 90%;
  }
  @media ${breackpoints.mobileL} {
    max-width: "400px";
  }
  @media ${breackpoints.tablet} {
    max-width: "720px";
    width: 80%;
  }
  @media ${breackpoints.laptop} {
    max-width: "960px";
  }
  @media ${breackpoints.desktop} {
    max-width: "1280px";
  }
`;
export default Container;