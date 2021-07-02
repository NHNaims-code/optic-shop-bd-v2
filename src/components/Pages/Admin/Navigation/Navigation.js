import './Navigation.css';
import Logo from '../../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navigation = ({setCurrentState}) => {
    return (
        <div class="nav-side-menu">
        <div class="brand"><Link to="/"><img width="80px" src={Logo} /></Link></div>
        <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
    
            <div class="menu-list">
    
                <ul id="menu-content" class="menu-content collapse out text-left">
                    <li>
                    <a href="#">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                    </a>
                    </li>

                    <li  data-toggle="collapse" data-target="#products" class="collapsed active">
                    <a href="#"><i class="fas fa-box-open"></i> Products <span class="arrow"></span></a>
                    </li>
                    <ul class="sub-menu collapse" id="products">
                        <li class="active" onClick={() => setCurrentState('addProduct')}><a href="#">Add Product</a></li>
                        <li onClick={() => setCurrentState('productList')}><a href="">Product List</a></li>
                    </ul>


                    <li data-toggle="collapse" data-target="#service" class="collapsed">
                    <a href="#"><i class="fas fa-truck"></i> Services <span class="arrow"></span></a>
                    </li>  
                    <ul class="sub-menu collapse" id="service">
                    <li>Product Order</li>
                    <li>In Progress</li>
                    <li>Delivery Completed</li>
                    </ul>




                    <li>
                    <a href="#">
                    <i class="fa fa-cog" aria-hidden="true"></i> Profile
                    </a>
                    </li>

                    <li>
                    <a href="#">
                    <i class="fa fa-users fa-lg"></i> Users
                    </a>
                    </li>
                </ul>
        </div>
    </div>
    );
};

export default Navigation;