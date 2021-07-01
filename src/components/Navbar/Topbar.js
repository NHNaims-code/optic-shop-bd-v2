import { Link } from 'react-router-dom';
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
                <Link class="nav-link primary-color small" to="/login">Login/Register</Link>
            </li>
            </ul>
        </div>
    );
};

export default Topbar;