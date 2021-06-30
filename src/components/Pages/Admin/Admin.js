import React, { useState } from 'react';
import AddProduct from './AddProduct';

const Admin = () => {

    const [currentState, setCurrentState] = useState('dashboard')

    return (
        <div className="bg-light p-5">
           {/* <h1>Welcom to Admin</h1>
           <div>
               <button className="btn btn-primary mb-5">Add New Product</button>
           </div> */}
           <AddProduct/>
        </div>
    );
};

export default Admin;