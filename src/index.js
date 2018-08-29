
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './app/App.jsx';

import configurateReducers from './configurate-reducers';
import getData from './request/getData';

const appPromise = getData('http://localhost:3000/data');

appPromise.then(
    (appData) => {

        const reducer = configurateReducers(appData);
        const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('container')
        );
    }
);
