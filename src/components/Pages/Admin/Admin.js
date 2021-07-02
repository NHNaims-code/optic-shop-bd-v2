import React, { useState } from 'react';

import Dashboard from './Dashboard/Dashboard';
import Navigation from './Navigation/Navigation';

const Admin = () => {

    const [currentState, setCurrentState] = useState('addProduct')

    return (
        <div className="d-flex bg-light admin-root">
           <Navigation setCurrentState={setCurrentState}></Navigation>
           <div className="dashboard-container">
               <Dashboard currentState={currentState}></Dashboard>
           </div>
        </div>
    );
};

export default Admin;