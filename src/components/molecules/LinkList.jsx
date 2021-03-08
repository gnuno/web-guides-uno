import styled from "styled-components";
import Breakpoints from "../atoms/Breakpoints";

const List = styled.ul`
    margin-top: 5px;
    font-weight: lighter;
    @media ${Breakpoints.mobileS} { font-size: 0.8em }
    @media ${Breakpoints.tablet} { font-size: 0.9em }

    li:not(:last-child){
        ::after {
            content: " - ";
        }
    }
`;

const Item = styled.li`
    display: inline;
`;

export default function LinkList({ links }) {
    return (
        <List>
            {links.map((item) =>
                item.key ? (
                    <Item>
                        <a href={item.value} key={item.key}>
                            {item.key}
                        </a>
                    </Item>
                ) : (
                    ""
                )
            )}
        </List>
    );
}
