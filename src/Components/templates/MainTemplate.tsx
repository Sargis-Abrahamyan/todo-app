import React from 'react';
import NavBar from '../organismes/navBar/NavBar';
import { MainTemplateContainer } from './mainTemplate.styled';

interface MainTamplateProps {
    children?: React.ReactNode;
}

const MainTemplate: React.FC<MainTamplateProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <MainTemplateContainer>{children}</MainTemplateContainer>
        </>
    );
};

export default MainTemplate;
