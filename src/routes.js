import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import "font-awesome/css/font-awesome.min.css";

import './fonts/poppins.css';
import './global.css';
import './bootstrap/bootstrap-v4.css';

import Sidebar from './components/menu'
import Header from './components/header'
import Dashboard from './components/dashboard'
import Client from './components/client'
export default function Routes(){
    return(
        <Router>
            <Sidebar />
            <div id="content-container">
                <div className="container">
                    <Header />
                    <div id="page-content">
                        <Route path="/" exact>
                            <Dashboard />
                        </Route>
                        <Route path="/clientes" >
                            <Client />
                        </Route>
                    </div>
                </div>
            </div>
        </Router>
    )
}