import React from "react"
import styled from "styled-components";
import FontSizes from "../atoms/FontSizes";

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
`;

export default function LinkList({ links }) {
    return (
        <List> {links? `Links: ` : ""}
            {links.map((item, index) =>
                item.key ? (
                    <Item key={index+item.key}>
                        <a href={item.href} className={item.class}>
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
