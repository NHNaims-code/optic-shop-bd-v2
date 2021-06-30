import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <div className="border-top footer-root pt-3 mt-5">
            <div className="d-flex form-section justify-content-between align-items-center">
                <span><i class="fa fa-envelope" aria-hidden="true"></i> SIGN UP FOR OUR NEWSLETTER & PROMOTIONS</span>
                <form className="nl-form">
                    <input type="email" placeholder="Your email address here"/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>

            {/* Menu section */}
            <div className=" menu-section d-flex justify-content-between mt-0 pt-5">
                <div className="d-flex flex-column justify-content-start align-items-start col-md-4">
                    <img height="100px" className="" src={Logo} alt="logo"/>
                    <div className="fa-section"><i class="fa fa-map" aria-hidden="true"></i> Shop #A1, House #56, Road #11, Block #F, Banani, Dhaka-1213</div>
                    <div className="fa-section"><i class="fa fa-phone" aria-hidden="true"></i>(+88) 01889-176649</div>
                    <div className="fa-section"><i class="fa fa-envelope" aria-hidden="true"></i>opticshopbd@gmail.com</div>
                </div>
                <div className=" fi-section">
                        <h5>HOW CAN WE HELP</h5>
                        <ul>
                            <li>Returns</li>
                            <li>Delivery</li>
                            <li>My Account</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="fi-section">
                        <h5>INFORMATION</h5>
                        <ul>
                            <li>Careers</li>
                            <li>Investor Relation</li>
                            <li>Press Releases</li>
                            <li>Shop with points</li>
                        </ul>
                    </div>
                    <div className="fi-section">
                        <h5>CUSTOMAR CARE</h5>
                        <ul>
                            <li>Returns</li>
                            <li>Shipping Info</li>
                            <li>Gift Cards</li>
                            <li>Size Guid</li>
                        </ul>
                    </div>
            </div>
            <div className="copyrigh-section d-flex justify-content-between align-items-center border-top border-bottom mt-5 pb-0 pt-3">
                <div className="d-flex align-items-center">
                    <p><i class="fa fa-copyright" aria-hidden="true"></i> 2021 Optic Shop BD. All Right reserved</p>
                </div>
                <p>www.opticshopbd.com</p>
            </div>
            
        </div>
    );
};

export default Footer;