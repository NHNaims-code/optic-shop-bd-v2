import React, { useState } from 'react';

import Dashboard from './Dashboard/Dashboard';
import Navigation from './Navigation/Navigation';

const Admin = () => {

    const [currentState, setCurrentState] = useState('dashboard')

    return (
        <div className="d-flex bg-light admin-root">
           <Navigation></Navigation>
           <div className="dashboard-container">
               <Dashboard/>
           </div>
        </div>
    );
};

export default Admin;