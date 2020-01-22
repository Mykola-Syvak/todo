import React from 'react';

import './app-header.css';

const AppHeader = () => {
    return (
        <div className="appHeader">
            <h1 className="appHeader-h1">My Todo list</h1>
            <h5 className="appHeader-h5">1 more todo, 3 done</h5>
        </div>
        );
};

export default AppHeader;