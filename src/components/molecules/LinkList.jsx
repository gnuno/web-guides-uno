import styled from "styled-components";
import FontSizes from "../atoms/FontSizes";
import Theme from "../atoms/Theme";

const List = styled.ul`
    margin-top: 5px;
    ${FontSizes.p3}

    li:not(:last-child){
        ::after {
            content: " - ";
        }
    }
`;

const Item = styled.li`
    display: inline;
    a.video{
        color: ${Theme.color.terciary};
    }
    a.ejercicio{
        color: ${Theme.color.cuartiary};
    }
`;

export default function LinkList({ links }) {
    return (
        <List> {links? `Links: ` : ""}
            {links.map((item, index) =>
                item.key ? (
                    <Item key={index+item.key}>
                        <a href={item.value} className={item.class}>
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
