import React from "react";

import GridContainer from "./GridContainer";
import MemberCard from "../atoms/MemberCard";
import { DividerBar } from "../atoms/DividerBar";
import { H2 } from "../atoms/Title";
import MEMBERS from "../../data/members.json";

export default function MembersList(){ 
    const colors = ["primary", "secondary", "quintiary"]   
    return(
        <>
            <DividerBar/>
            <H2 className="center"> Nuestros Miembros </H2>
            <GridContainer>
                {MEMBERS.map(el => <MemberCard member={el} key={el.name} color={colors[Math.floor(Math.random() * colors.length)]}/>)}
            </GridContainer>            
        </>
    )
}