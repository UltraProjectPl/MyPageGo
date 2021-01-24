import React from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../Authentication/Login';

export const App: React.FC = () => {
    return (
        <>
            <Route path="/login" component={Login} />
        </>
    )
}