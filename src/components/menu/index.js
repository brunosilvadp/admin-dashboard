import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';

import './style.css';

export default function Menu(){
    const [expandedSidenav, setExpandedSidenav] = useState(false);
    // function expandSidenav(){
    //     let aside = document.querySelector("#menu-dashboard");
    //     let content = document.querySelector("#content");

    //     if(!expandedSidenav){
    //         aside.className = "expand-sidenav";
    //         aside.style.width="200px";
    //         content.style.marginLeft = "200px";
    //     }else{
    //         aside.className = "";
    //         aside.style.width="75px";
    //         content.style.marginLeft = "85px";
    //     }
    //     setExpandedSidenav(!expandedSidenav);
    // }
    return (
        // <aside id="aside-dashboard" onMouseOver={expandSidenav} onMouseOut={expandSidenav}>
        <aside id="aside-dashboard">
            <div className="logo-aside">
                <img src="/logo.png" alt="Verticis" width="100px"/>
            </div>
            <nav id="menu-dashboard">
                <ul>    
                    <li>
                        <NavLink exact activeClassName="active" to="/" className="menu-item">
                            <div className="corner corner-top"></div>
                            <i class="material-icons-round">dashboard</i> <span className="item-title">Dashboard</span>
                            <div className="corner corner-bottom"></div>
                        </NavLink>
                    </li>
                    <li className="menu-title">
                        <span>Cadastro</span>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/clientes" className="menu-item">
                            <div className="corner corner-top"></div>
                            <i class="material-icons-round">person</i> <span className="item-title">Clientes</span>
                            <div className="corner corner-bottom"></div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/servicos" className="menu-item">
                            <div className="corner corner-top"></div>
                            <i class="material-icons-round">work</i> <span className="item-title">Serviços</span>
                            <div className="corner corner-bottom"></div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}