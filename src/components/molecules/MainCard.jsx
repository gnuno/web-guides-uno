import styled from "styled-components";
import Theme from "../atoms/Theme";
import { H2 } from "../atoms/Title";
import { P3 } from "../atoms/Paragraph";

const Item = styled.li`
    border: 1px solid ${Theme.color.secondary};
    background: ${Theme.background.paper};
    border-radius: 30px;
    padding: 15px 5px;
    box-shadow: 0px 2px 8px ${Theme.color.secondary}df;
    :hover{
        background: ${Theme.color.secondary}66;
    }
`;

export default function MainCard({ element }){

    return(
        <Item>
            <a>
                <H2>{element.name}</H2>
                <P3>{element.name}</P3>
            </a>
        </Item>
    )
};