import styled from "styled-components";
import Theme from "../atoms/Theme";
import { H2 } from "../atoms/Title";
import { P3 } from "../atoms/Paragraph";
import { Link } from "react-router-dom";

const Item = styled.li`
    border: 1px solid ${Theme.color.secondary};
    background: ${Theme.background.paper};
    border-radius: 30px;
    padding: 15px;
    box-shadow: 0px 2px 8px ${Theme.color.secondary}df;
    :hover{
        background: ${Theme.color.secondary}66;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    margin: auto;
    flex-direction: column;
    height: 100%;
    :hover{ text-decoration: none }
    ${P3}{ flex: 2 0 }
    ${H2}{
        flex: 1 1;
        margin-bottom: 5px;
    }
`;

export default function MainCard({ element }){
    return(
        <Item>
            <StyledLink to={element.url}>
                <H2>{element.name}</H2>
                <P3>{element.contents}</P3>
            </StyledLink>
        </Item>
    )
};