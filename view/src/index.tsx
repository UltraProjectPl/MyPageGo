import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { App } from './components/App/App';
import { createBrowserHistory } from 'history';
import { Header } from './components/App/Header';
import createStore from './store/createStore';

const history = createBrowserHistory();
const store = createStore()
const rootElement = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App/>
                <Header/>
            </Router>
        </Provider>
    </React.StrictMode>,
    rootElement
);

