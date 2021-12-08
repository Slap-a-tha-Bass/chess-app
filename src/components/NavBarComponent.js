import React from 'react'
import { NavBarButton, NavDiv } from '../styles/Nav'
const NavBarComponent = () => {
    return (
        <NavDiv>
            <NavBarButton to="/">home</NavBarButton>
            <NavBarButton to="/notepad">notepad</NavBarButton>
        </NavDiv>
    )
}

export default NavBarComponent
