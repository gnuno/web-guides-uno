import React from "react";
import styled from "styled-components";

import Theme from "./Theme";
import { H2 } from "./Title"
import { P3 } from "./Paragraph";
import Breakpoints from "./Breakpoints"
import { ReactComponent as GithubIcon } from "../../assets/icons/GithubIcon.svg"
import { ReactComponent as TelegramIcon } from "../../assets/icons/TelegramIcon.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/LinkedinIcon.svg"
import { ReactComponent as WebIcon } from "../../assets/icons/WebIcon.svg"


const HeaderContainer = styled.div`
    background: ${props => Theme.color[props.color]}dd;
    border-radius: 30px 30px 0px 0px;
    padding: 20px 10px 15px;
    display: flex;
    flex-direction: column;
`;

const Name = styled(H2)`
    color: ${Theme.text.primary};
    font-weight: 700;
    margin: 5px auto;
`;

const SubTitle = styled(P3)`
    font-weight: 200;
`;

const Icon = styled.a`
    svg{
        width: 26px;
        height: 26px;
        fill: ${props => Theme.color[props.color]}
    }
    :hover { transform:scale(1.2) }
`;

const FooterContainer = styled.div`
    margin: 60px auto 10px; 
    @media ${Breakpoints.laptop}{
        margin: 75px auto 15px; 
    }
`;

const LinksContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    margin: 7px auto;
    @media ${Breakpoints.laptop}{
        margin: 15px auto;
    }
`;

const ImageContainer = styled.div`
    border-radius: 100px;
    border: 3px solid ${Theme.text.primary};
    padding: 3px;
    background: ${Theme.background.paper};
    box-shadow: 0px 3px 8px ${Theme.background.normal};
    transition: .5s;
    width: 100px;
    height: 100px;
    margin: 5px auto -65px;
    img{
        width: 100px;
        height: 100px;
        border-radius: 100px;
        object-fit: cover;
    }
    
    @media ${Breakpoints.laptop}{
        width: 130px;
        height: 130px;
        margin: 5px auto -75px;
        img{
            width: 130px;
            height: 130px;
        }
    }
`;

const CardContainer = styled.li`
    background: ${Theme.background.paper};
    border-radius: 30px;
    box-shadow: 0px 2px 8px ${props => Theme.color[props.color]}65;
    :hover { 
        ${ImageContainer}{transform:scale(1.07);}
    }
`;

export default function MemberCard({ member, color }){
    return(
        <CardContainer color={color}>
            <HeaderContainer color={color}>
                <Name>{member.name}</Name>
                <SubTitle>{member.rol}</SubTitle>
                <ImageContainer> <img src={member.image? member.image : "img/DefaultProfile.png"} alt={`imagen de perfil de ${member.name}`}/> </ImageContainer>
            </HeaderContainer>
            <FooterContainer>
                <SubTitle className='bold'>{member.nick}</SubTitle>
                <LinksContainer>
                    {member.github? <Icon href={member.github} color={color}><GithubIcon/></Icon> : ""}
                    {member.web? <Icon href={member.web} color={color}><WebIcon/></Icon> : ""}
                    {member.telegram? <Icon href={member.telegram} color={color}><TelegramIcon/></Icon> : ""}
                    {member.linkedin? <Icon href={member.linkedin} color={color}><LinkedinIcon/></Icon> : ""}
                </LinksContainer>
            </FooterContainer>
        </CardContainer>
    )
}