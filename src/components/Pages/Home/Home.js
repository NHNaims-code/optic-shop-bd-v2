import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css';
import './NewCard.css';
import Carousel from '../../Carousel/Carousel';
import Optic from "../../../assets/glasses/glass.jpg"
import Optic2 from "../../../assets/glasses/glass2.jpg" 
import Optic3 from "../../../assets/glasses/41Kp7Xc7StL._AC_UL320_.jpg" 
import Glass from '../../../assets/glass.webp';
import ItemCard from '../../utility/ItemCard/ItemCard';
import BrandCarousel from '../../Carousel/BrandCarousel';
import Spin from './Spin/Spin';
import Banner2 from '../../../assets/banner2.jpg';
import Loading from '../../utility/Loading/Loading';

const Home = () => {

   
    const arr = [0,0,0,0,0,0,0,0]
  

    return (
        <div className="home-root">
            {/* <Loading/> */}
            <Carousel/>

    
            {/* Exclosive section */}
            <div className="d-flex justify-content-between my-3 ex-section">
                <div className="d-flex align-items-center ex-content py-2 my-2">
                    <i class="fa fa-rocket ex-icon mr-4" aria-hidden="true"></i>
                    <div>
                        <h4>FREE DELIVERY</h4>
                        <p>Free on all order over ৳5000</p>
                    </div>
                </div>
                <div className="d-flex align-items-center ex-content py-2 my-2">
                    <i class="fa fa-lock ex-icon mr-4" aria-hidden="true"></i>
                    <div>
                        <h4>STPRE SECURED</h4>
                        <p>Secure all your payments</p>
                    </div>
                </div>
                <div className="d-flex align-items-center ex-content py-2 my-2">
                    <i class="fa fa-history ex-icon mr-4" aria-hidden="true"></i>
                    <div>
                        <h4>MONEY SAFE</h4>
                        <p>30 Days money gurantee</p>
                    </div>
                </div>
            </div>

            {/* Major Items */}
            <div className=" mi-section d-flex w-100 my-3">
                <div className="mi-card mi-card-1 primary-background w-50 mr-3 p-5">
                    <h3>RETRO CRYSTAL</h3>
                    <p>Sunglasses with Polarized Lens</p>
                    <button className="red-button">MORE DETAIL</button>
                </div>
                <div className="mi-card mi-card-2 primary-background w-50 ml-3 p-5">
                    <h3>STAY COOL WITH SHADES</h3>
                    <p>Find your perfect pair</p>
                    <button className="red-button">MORE DETAIL</button>
                </div>
            </div>

            <div className="spin">
            <Spin/>
            </div>

            {/* Weekly Featured*/}
            <div class="">
        <h3 class="h3">Brand new</h3>
        <div class="row">

            {
                arr.map(p=>
                    
                    <div class="col-md-3 col-6 card-padding">
                    <div class="product-grid3">
                        <div class="product-image3">
                            <Link to="/product">
                                <img class="pic-1" src={Optic2}/>
                                <img class="pic-2" src={Optic2}/>
                            </Link>
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">New</span>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="#">Men's Blazer</a></h3>
                            <div class="price">
                                $63.50
                                <span>$75.00</span>
                            </div>
                            <ul class="rating">
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star"></li>
                                <li class="fa fa-star disable"></li>
                                <li class="fa fa-star disable"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                    
                    )
            }
           
           
            
        </div>
    </div>

            {/* Advertisement */}
                <hr/>
                <img width="100%" src="https://do6sydhp1s299.cloudfront.net/assets/images/slider/EZ-banner-Spectacle-Lens-1440x525-111920%20(1).webp" alt="ads"/>
                <hr/>

    {/* Best Seller */}
    <h3 class="h3 mt-5 pt-5">Best Saving Eyeware </h3>
    <div class="row">

        {
            arr.map(p=>
                <div class="col-md-3 col-6 card-padding">
                <div class="product-grid8">
                    <div class="product-image8 d-flex align-items-center justify-content-center p-3" style={{height: '240px'}}>
                        <Link to="/product">
                            <img class="pic-1" src={Optic}/>
                            <img class="pic-2" src={Optic}/>
                        </Link>
                        <ul class="social">
                            <li><a href="" class="fa fa-search"></a></li>
                            <li><a href="" class="fa fa-shopping-bag"></a></li>
                            <li><a href="" class="fa fa-shopping-cart"></a></li>
                        </ul>
                        <span class="product-discount-label">-20%</span>
                    </div>
                    <div class="product-content">
                        <div class="price">£ 8.00
                            <span>£ 10.00</span>
                        </div>
                        <span class="product-shipping">Free Shipping</span>
                        <h3 class="title"><a href="#">Women's Plain Top</a></h3>
                        <a class="all-deals" href="">See all deals <i class="fa fa-angle-right icon"></i></a>
                    </div>
                </div>
            </div>
            )
        }
        
    </div>

    {/* Advertisement */}
    <hr/>
    <img width="100%" src={Banner2} alt="ads"/>
    <hr/>


    <h3 class="h3 mt-5 pt-5">Customars choice's</h3>
    <div class="row mb-5 pb-5">

        {
            arr.map(p=>
                
                <div class="col-md-3 col-6 card-padding" >
                <div class="product-grid" style={{height:'300px'}}>
                    <div class="product-image d-flex align-items-center justify-content-center p-4" style={{height:'190px'}}>
                        <Link to="/product" className="mt-5">
                            <img class="pic-1" src={Optic3}/>
                            {/* <img class="pic-2" src={Optic3}/> */}
                        </Link>
                        <ul class="social">
                            <li><a href="" data-tip="Quick View"><i class="fa fa-search"></i></a></li>
                            <li><a href="" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
                            <li><a href="" data-tip="Add to Cart"><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                        <span class="product-new-label">Sale</span>
                        <span class="product-discount-label">20%</span>
                    </div>
                    <ul class="rating">
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star"></li>
                        <li class="fa fa-star disable"></li>
                    </ul>
                    <div class="product-content">
                        <h3 class="title"><a href="#">Women's Blouse</a></h3>
                        <div class="price">$16.00
                            <span>$20.00</span>
                        </div>
                        <a class="add-to-cart" href="">+ Add To Cart</a>
                    </div>
                </div>
            </div>
                
                )
        }
    </div>
        
            <h3>Our brands</h3>
            <hr/>
            <BrandCarousel/>


        </div>
    );
};

export default Home;