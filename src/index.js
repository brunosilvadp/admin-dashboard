import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import Login from './components/login';

ReactDOM.render((localStorage.getItem('authToken')) ? <Routes /> : <Login />, document.getElementById('root'));