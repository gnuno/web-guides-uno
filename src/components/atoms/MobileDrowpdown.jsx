import React, {useState} from 'react';
import styled from "styled-components";

import { ReactComponent as MenuIcon } from "../../assets/icons/Menu.svg"
import { ReactComponent as CloseIcon } from "../../assets/icons/CloseMenu.svg"

import { Link } from "react-router-dom";
import Theme from "./Theme";

const Button = styled.button`
    background-color: ${Theme.text.secondary};
    fill: ${Theme.color.primary};
    width: 38px;
    height: 38px;
    margin: .3em;
    margin-left: 7px;
    border: 1px solid rgba(0,0,0,.4);
    border-radius: 100px;
    white-space: nowrap;
    text-align: center;
    box-shadow: 0px 0px 4px rgba(0,0,0,.4);
    :hover{
        cursor: pointer;
    }
    padding: 5.5px 5px 7px 5.5px;
`;

const Label = styled.label`
    display: inline-block;
    position: relative;
`

const Menu = styled.ul(({ show }) => ({
    position: 'absolute',
    top: '100%',
    right: '0px',
    backgroundColor: Theme.text.secondary,
    color: Theme.color.primary,
    border: '1px solid ' + Theme.color.primary,
    display: 'block',
    borderRadius: '8px',
    marginTop: '8px',
    boxShadow: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
    overflowX: 'hidden',
    display: show ? "block" : "none",
    zIndex: '4'
}))

const Item = styled.li`
    font-weight: 500;
    font-size:  14px;
    text-align: right;
    color: ${Theme.color.primary};
    white-space: nowrap;
    margin: 8px 15px 8px 20px;
`;

const Overlay = styled.button(({ show }) => ({
    display: show ? "block" : "none" ,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'transparent',
    zIndex: '-1'
}))

export default function MobileDropdown ({ links }) {
    const [showMenu, setShowMenu] = useState(false);

    return (
    <Label>
        <Overlay show={showMenu}> </Overlay>
        <Button onClick={() => setShowMenu(!showMenu)}>
            {showMenu? <CloseIcon/> : <MenuIcon/>}
        </Button>
        <Menu show={showMenu} >
            {links.map(el => <Item key={el.ref}><Link to={el.ref} >{el.value}</Link></Item>)}
        </Menu>
    </Label>
)
}