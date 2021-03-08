import React from "react";
import styled from "styled-components";
import breakpoints from "./atoms/Breakpoints";
import Theme from "./atoms/Theme";

import { ChildBall } from "./atoms/Ball";

const Item = styled.li`
    padding: 0em 0em 0em 1.5em;
`;

const HeadElement = styled.div`
    display: flex;
    align-items: flex-start;
    h3 {
        flex: 2 0;
        margin-left: 6px;
        font-weight: 500;
        color: ${Theme.txtBgClaro2};
    }
    span {
        color: ${Theme.txtBgClaro2 + "99"};
        white-space: nowrap;
        font-size: 0.8em;
        border-radius: 30px;
        align-self: flex-end;
        display: inline-block;
        padding: 0.15em 0.4em;
    }
    @media ${breakpoints.mobileS} {
        h3 {
            font-size: 1em;
        }
        span {
            display: none;
        }
    }
    @media ${breakpoints.tablet} {
        h3 {
            font-size: 1.1em;
        }
        span {
            display: block;
        }
    }
`;

const ContentElement = styled.div`
    margin-left: 6px;
    padding: 0px 8px 15px 15px;
    border-left: 6px solid transparent;
    border-image: linear-gradient(
            to right,
            ${Theme.bgGris3 + "40"} 0%,
            ${Theme.detalle1 + "aa"} 0.5%,
            ${Theme.bgGris3 + "40"} 1%
        )
        1% stretch;
    h4 {
        font-weight: lighter;
        color: ${Theme.bgGris1};
        margin-bottom: 7px;
    }
    p {
        color: ${Theme.txtBgClaro2};
        margin-top: 5px;
    }
    span {
        color: ${Theme.detalle1Oscuro};
    }
    @media ${breakpoints.mobileS} {
        h4 {
            font-size: 0.92em;
        }
        p,
        span {
            font-size: 0.85em;
        }
    }
    @media ${breakpoints.tablet} {
        h4 {
            font-size: 1.05em;
        }
        p,
        span {
            font-size: 0.95em;
        }
    }
`;

export default function Card(props) {
    let { element } = props;
    return (
        <Item>
            <HeadElement>
                <ChildBall />
                <h3> {element.name} </h3>
            </HeadElement>
            {!element.void ? (
                <ContentElement>
                    {" "}
                    <p> {element.description} </p>{" "}
                </ContentElement>
            ) : (
                <div style={{ paddingBottom: "12px" }}></div>
            )}
        </Item>
    );
}
