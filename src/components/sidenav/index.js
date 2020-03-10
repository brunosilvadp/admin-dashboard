import React, {useEffect, useContext} from 'react';

import './style.css';

export default function Sidenav({title, children, action}) {
    const [actionSidenav, setActionSidenav] = useContext(action);
    useEffect(() => {
        let sidenav = document.querySelector('#sidenav');
        let opacity = document.querySelector('.opacity');
        if(actionSidenav){
            opacity.style.display = 'block';
            sidenav.style.right="0";
        }else{
            opacity.style.display = 'none';
            sidenav.style.right="-100%";
        }
    }, [actionSidenav])
  return (
    <>
        <div className="opacity"></div>
        <div id="sidenav">
            <div className="sidenav-content">
                <div className="sidenav-header">
                    <div className="sidenav-title">
                        <span>{title}</span>
                    </div>
                    <div className="close-sidenav">
                        <i className="material-icons-round" onClick={() => setActionSidenav(false)}>close</i>
                    </div>
                </div>
                <div className="sidenav-body">
                    {children}
                </div>
            </div>
        </div>
    </>
  );
}
