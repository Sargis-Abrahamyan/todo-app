import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './Store';
import { GlobalStyles } from './GlobalStyles/globalStyles';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
                <GlobalStyles />
                <App />
        </Provider>
    </React.StrictMode>
);
