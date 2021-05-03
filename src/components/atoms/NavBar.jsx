import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Theme from "./Theme";  
import MobileDropdown from "./MobileDrowpdown";

const Title = styled(Link)`
    font-weight: 500;
    text-align: right;
    color: ${Theme.text.secondary};
    :hover{
        color: ${Theme.text.secondary}df;
        text-decoration: none;
    }
    font-size:  clamp(0.8rem, 0.6500rem + 0.6667vw, 1rem);
    margin: 0px 5px;
`;

const Container = styled.div`
    margin: 0px 5px;
`

export default function NavBar(){
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 768px)");

        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => {
            setMatches(media.matches);
        };
        media.addEventListener('change', listener)
        return () => media.removeEventListener('change',listener);
    }, [matches, "(max-width: 768px)"]);

    const links = [
        {
            ref: "/contribuir",
            value: "Contribuir"
        },
        {
            ref: "/gnuno",
            value: "Sobre GNUno"
        }
    ]

    return(
        <Container>
            {!matches?
                <>
                    {links.map(el => <Title to={el.ref}> {el.value} </Title>)}
                </>
                :
                <MobileDropdown links={links}/>
            }
        </Container>
    );
}