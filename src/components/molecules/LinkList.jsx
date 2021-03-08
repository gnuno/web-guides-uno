import styled from "styled-components";
import FontSizes from "../atoms/FontSizes";

const List = styled.ul`
    margin-top: 5px;
    font-weight: lighter;
    ${FontSizes.p2}

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
