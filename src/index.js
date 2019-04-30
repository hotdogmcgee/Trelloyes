import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import STORE from './store.js';


console.log('hi');

ReactDOM.render(
    <App>{STORE} 
    </App>, document.getElementById('root')
    );


