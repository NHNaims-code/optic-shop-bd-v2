import React, { useContext } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.jpg';
import { PublicContext } from '../../App';
import { Link } from 'react-router-dom';

const Navbar = ({currentMenu, cart}) => {

    const [setCurrentMenu] = useContext(PublicContext);

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white m-0 p-0 shadow-sm">
            
        <Link to="/">
        <a class="navbar-brand m-0 p-0" href="/">            
            <img className="logo" src={Logo} alt="logo"/>
        </a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

            {
                currentMenu == "home" ? 
            <li class="nav-item mx-3">
                <Link class="nav-link primary-color weight-700 active-menu" path="/">HOME <span class="sr-only"></span></Link>
            </li>:
            <li class="nav-item mx-3">
                <a class="nav-link primary-color weight-700" href="/">HOME <span class="sr-only"></span></a>
            </li>
            }

            <li class="nav-item dropdown mx-3">
                {
                    currentMenu == "sunglass" ?
                    <a class="nav-link primary-color weight-700 dropdown-toggle active-menu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SUNGLASS</a>
                    :
                    <a class="nav-link primary-color weight-700 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SUNGLASS</a>
                }
                <div className="dd">
                    <ul class="row" aria-labelledby="navbarDropdown">
                        <li className="col-md-6"><Link className="text-dark" to="">POLARIZED</Link></li>
                        <li className="col-md-6"><Link className="text-dark" to="">NON_POLARIZED</Link></li>
                    </ul>
              
                </div>
            </li>
            <li class="nav-item dropdown mx-3">
                {
                    currentMenu == "eyeglass" ?
                    <a class="nav-link primary-color weight-700 dropdown-toggle active-menu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EYEGLASS</a>
                    :
                    <a class="nav-link primary-color weight-700 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EYEGLASS</a>
                }
                <div className="dd">
                    <ul class="row" aria-labelledby="navbarDropdown">
                        <li className="col-md-6"><Link className="text-dark" to="">FRAME</Link></li>
                        <li className="col-md-6"><Link className="text-dark" to="">LENCE</Link></li>
                    </ul>
                </div>
            </li>
            <li class="nav-item dropdown mx-3">
                {
                    currentMenu == "lens" ?
                    <a class="nav-link primary-color weight-700 dropdown-toggle active-menu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LENS</a>
                    :
                    <a class="nav-link primary-color weight-700 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LENS</a>
                }
                <div className="dd">
                    <ul class="row" aria-labelledby="navbarDropdown">
                        <li className="col-md-6"><Link className="text-dark" to="">BLUE</Link></li>
                        <li className="col-md-6"><Link className="text-dark" to="">BROWN</Link></li>
                    </ul>
                </div>
            </li>
            <li class="nav-item dropdown mx-3">
                {
                    currentMenu == "kids" ?
                    <a class="nav-link primary-color weight-700 dropdown-toggle active-menu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">KIDS</a>
                    :
                    <a class="nav-link primary-color weight-700 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">KIDS</a>
                }
                    <div className="dd">
                    <ul class="row" aria-labelledby="navbarDropdown">
                    <li className="col-md-6"><Link className="text-dark" to="">SUNGLASS</Link></li>
                    <li className="col-md-6"><Link className="text-dark" to="">EYEGLASS</Link></li>
                    </ul>
                    </div>
            </li>

            
            <li class="nav-item dropdown">
                {
                    currentMenu == "shop" ?
                    <a class="nav-link dropdown-toggle primary-color weight-700 active-menu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BRANDS</a>
                    :
                    <a class="nav-link dropdown-toggle primary-color weight-700 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BRANDS</a>
                }
                <div className="dd">
                <ul class="row" aria-labelledby="navbarDropdown">
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Cartier</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">TomFord</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Rayban</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Gucci</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Boss</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Lacost</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Chanel</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Prada</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Dior</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Dunhill</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Fendi</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Silhouette</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Montblanc</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Danmac</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Rolex</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Omega</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Maybach</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">BurBerry</Link></li>
                <li className="col-md-3"><Link className="text-dark text-uppercase" to="">Police</Link></li>
                </ul>
                {/* <div class="dropdown-divider"></div>
                <a class="" href="#">Something else here</a>
                </div> */}
                </div>
            </li>
            
            <li class="nav-item mx-3" onClick={()=>setCurrentMenu("contact")}>
                {
                    currentMenu == "contact" ?
                    <Link to="/contact">
                    <span class="nav-link primary-color weight-700 active-menu" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CONTACT</span>
                    </Link>
                    :
                    <Link to="/contact">
                    <span class="nav-link primary-color weight-700 "  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CONTACT</span>
                    </Link>
                }
            </li>
            <li class="nav-item mx-3">
                {
                    currentMenu == "about" ?
                    <a class="nav-link primary-color weight-700 active-menu" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                    :
                    <a class="nav-link primary-color weight-700 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                }
            </li>
            <li class="nav-item mx-3">
                <a class="nav-link border-none primary-color weight-700" href="#"><i class="fa fa-shopping-basket cart" aria-hidden="true"></i><span className="cart-count">{cart}</span></a>
            </li>
            
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;