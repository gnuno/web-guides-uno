import React from "react";
import styled from "styled-components";

import { ChildBall } from "../atoms/Ball";
import { H3 } from "../atoms/Title";
import ChildItemContent from "../atoms/ChildItemContent";
import { P3 } from "../atoms/Paragraph";
import LinkList from "../molecules/LinkList";
import { ReactComponent as LinkIcon } from "../../assets/icons/LinkIcon.svg"
import { ReactComponent as TaskIcon } from "../../assets/icons/TaskIcon.svg"
import { ReactComponent as VideoIcon } from "../../assets/icons/VideoIcon.svg"

const ChildItem = styled.li`
    padding-left: 1.5em;
`;

const ChildItemHeader = styled.header`
    display: flex;
    align-items: center;
`;

const Details = styled.div`
    flex: 1 0;
    text-align: right;
    height: 20px;
    > *{
        margin-left: 5px;
        width: clamp(1rem, 0.8500rem + 0.6667vw, 1.2rem);
        height: clamp(1rem, 0.8500rem + 0.6667vw, 1.2rem);
    }
`

export default function Card(props) {
    let { element } = props;
    let reduced = {
        video: false,
        task: false,
        url: false
    }

    const reducer = (acc, curr, i, arr) => {
        if (acc.video && acc.task && acc.url) arr.splice(1)

        if(curr.class) {
            if(curr.class === "primary") acc.url = true
            else if(curr.class === "terciary") acc.video = true
            else acc.task = true
        }

        return acc
    };

    !element.void && element.links.slice(0).reduce(reducer, reduced)

    return (
        <ChildItem>
            <ChildItemHeader>
                <ChildBall />
                <H3> {element.name} </H3>
                <Details>
                    {reduced.url? <LinkIcon className="primary"/> : ""}
                    {reduced.video? <VideoIcon className="terciary"/> : ""}
                    {reduced.task? <TaskIcon className="cuartiary"/> : ""}
                </Details>
            </ChildItemHeader>
            {!element.void ? (
                <ChildItemContent>
                    <P3> {element.description} </P3>
                    <LinkList links={element.links}/>
                </ChildItemContent>
            ) : (
                <div style={{ paddingBottom: "12px" }}></div>
            )}
        </ChildItem>
    );
}
