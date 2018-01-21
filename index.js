import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import WebApp from './reducers/reducer';
import App from './components/App';
const store = createStore(WebApp)
render ( 
    <Provider store = { store } >
        <App / >
    </Provider>,
    document.getElementById('root')
)