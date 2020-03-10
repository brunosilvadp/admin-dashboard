import React from 'react';

import './style.css';

export default function Dashboard(){
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="dashboard-item observations row align-items-center">
                    <div className="col-md-9">
                        <div>
                            <span className="item-title">Opiniões</span>
                        </div>
                        <div>
                            <span className="item-value">200</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item-icon">
                            <i className="fa fa-comment"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="dashboard-item observations row align-items-center">
                    <div className="col-md-9">
                        <div className="item-title">
                            <span>Disparos</span>
                        </div>
                        <div className="item-value">
                            <span>250</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item-icon">
                            <i className="fa fa-send"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="dashboard-item observations row align-items-center">
                    <div className="col-md-9">
                        <div className="item-title">
                            <span>NPS</span>
                        </div>
                        <div className="item-value">
                            <span>33</span>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="item-icon">
                            <i className="fa fa-comment"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}