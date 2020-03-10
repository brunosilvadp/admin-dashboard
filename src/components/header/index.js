import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default function Header() {
  return (
    <div id="dashboard-header">
        <div className="h-100 d-flex align-items-center justify-content-end">
            <Link href="#">
                <span>
                    Bruno Silva
                    <i className="fa fa-caret-down ml-3"></i>
                </span>
            </Link>
        </div>
    </div>
  );
}
