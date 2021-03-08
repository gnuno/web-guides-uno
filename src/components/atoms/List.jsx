import styled from "styled-components";
import colors from "./Colors";

const List = styled.ul`
  padding: 1.5em 0em;

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
`;

export default List;