import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className="topbar-root d-flex align-items-center border-bottom pb-2 pt-2">
            <span>(+88) 01889-176649</span>
            <ul class="nav ml-auto">
            <li class="nav-item">
                <a class="nav-link primary-color small" href="#">Account</a>
            </li>
            <li class="nav-item">
                <a class="nav-link primary-color small" href="#">Checkout</a>
            </li>
            <li class="nav-item">
                <a class="nav-link primary-color small" href="#">Login/Register</a>
            </li>
            </ul>
        </div>
    );
};

export default Topbar;