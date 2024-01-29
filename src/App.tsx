import React from 'react';
import MainTemplate from './Components/templates/MainTemplate';
import Home from './Pages/home/Home';

const App: React.FC = () => {
    return (
        <MainTemplate>
            <Home />
        </MainTemplate>
    );
};

export default App;
