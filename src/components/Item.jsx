import React from "react";
import styled from "styled-components";

import { ChildBall } from "./atoms/Ball";
import ChildItemTitle from "./atoms/ChildItemTitle";
import ChildItemContent from "./atoms/ChildItemContent";
import { SubParagraph } from "./atoms/Paragraph";

const ChildItem = styled.li`
    padding-left: 1.5em;
`;

const ChildItemHeader = styled.header`
    display: flex;
    align-items: flex-start;
`;

export default function Card(props) {
    let { element } = props;
    return (
        <ChildItem>
            <ChildItemHeader>
                <ChildBall />
                <ChildItemTitle> {element.name} </ChildItemTitle>
            </ChildItemHeader>
            {!element.void ? (
                <ChildItemContent>
                    <SubParagraph> {element.description} </SubParagraph>
                </ChildItemContent>
            ) : (
                <div style={{ paddingBottom: "12px" }}></div>
            )}
        </ChildItem>
    );
}
