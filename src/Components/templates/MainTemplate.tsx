import React from 'react';
import {NavBar} from './../organismes';
import {MainTamplateProps } from './MainTemplateProps'
import { MainTemplateContainer } from './mainTemplate.styled';

const MainTemplate: React.FC<MainTamplateProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <MainTemplateContainer>{children}</MainTemplateContainer>
        </>
    );
};

export default MainTemplate;
