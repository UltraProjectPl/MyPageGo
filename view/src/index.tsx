import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom'
import {App} from './components/App/App';
import {createBrowserHistory} from 'history';
import { Header } from './components/App/Header';

const history = createBrowserHistory();
const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <App/>
            <Header/>
        </Router>
    </React.StrictMode>,
    rootElement
);

