import React from 'react';
import ReactDOM from 'react-dom/client';
import ActionRoutes from './routes'
import GlobalStyle from './globalStyle/globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <ActionRoutes />
        <GlobalStyle/>
    </>
);

