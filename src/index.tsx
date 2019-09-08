import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import {BrowserRouter } from 'react-router-dom';
/* own imports */
import { StoreManager } from './store/store';
import './assets/sass/__main.scss';
// import './assets/js/script.js'
const Root = document.getElementById('root');
ReactDOM.render(
    <Provider store={StoreManager} >
        <BrowserRouter >
            <App/>
        </BrowserRouter>
    </Provider>,
    Root);