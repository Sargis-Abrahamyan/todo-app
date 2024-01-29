import React from 'react';
import { navBarTitle } from './../../../Constants/constant';
import { NavBarContainer, Title } from './navbar.styled';

const NavBar: React.FC = () => {
    return (
        <NavBarContainer>
            <Title>{navBarTitle}</Title>
        </NavBarContainer>
    );
};

export default NavBar;
