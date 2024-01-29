import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: none;
}

html{
    width: 100%;
    height: 100%;
    margin: 0;
}
body{
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, sans-serif;
}

:root{
    --primary-color: #6c63ff;
    --secondary-color: #fff;
    --black-color: #252525;
    --error-message:red;
}
`;
