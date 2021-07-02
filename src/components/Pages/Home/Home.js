import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Home.css';
import './NewCard.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Carousel from '../../Carousel/Carousel';
import Optic from "../../../assets/glasses/glass.jpg"
import Optic2 from "../../../assets/glasses/glass2.jpg" 
import Optic3 from "../../../assets/glasses/41Kp7Xc7StL._AC_UL320_.jpg" 
import BrandCarousel from '../../Carousel/BrandCarousel';
import Spin from './Spin/Spin';
import Banner2 from '../../../assets/banner2.jpg';
import Loading from '../../utility/Loading/Loading';
import "aos/dist/aos.css";
import Aos from "aos";

const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    const containerStyle = {
    width: '100%',
    height: '600px'
    };

    const position = {
        // lat:23.7709168, lng:90.422718
        lat:23.791299867452377, lng:90.4031332828447
    };
    
    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    const arr = [0,0,0,0,0,0,0,0]
  

    return (
        <div className="home-root">
            {/* <Loading/> */}
            <Carousel/>

    
            {/* Exclosive section */}
            <hr/>
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
            <hr/>

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
            {/* <Spin/> */}
            </div>

            {/* Weekly Featured*/}
            <div class="">
        <hr/>
        <h3 class="h3">Brand new</h3>
        <hr/>
        <div class="row px-3">

            {
                arr.map(p=>
                    
                    <div data-aos="zoom-in-left" class="col-md-3 col-6 card-padding">
                    <div class="product-grid3">
                        <div class="product-image3 d-flex p-3 align-items-center justify-content-center" style={{height: '150px'}}>
                            <Link to="/product">
                                <img class="pic-1" src={Optic}/>
                                <img class="pic-2" src={Optic}/>
                            </Link>
                            <ul class="social">
                                <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                            <span class="product-new-label">New</span>
                        </div>
                        <div class="product-content">
                            <h3 class="title"><a href="#">Retro Sunglass</a></h3>
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
        <img width="100%" className="mb-5" src="https://www.politix.com.au/on/demandware.static/-/Sites/default/dwd0eca585/images/slot/campaign/20181019-Sunglass-Collections/img/banner-01.png" alt="ads"/>
        

    {/* Best Seller */}
    <hr/>
    <h3 class="h3 ">Best Saving Eyeware </h3>
    <hr/>
    <div class="row px-3">

        {
            arr.map(p=>
                <div data-aos="zoom-in-left" class="col-md-3 col-6 card-padding">
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
    <img width="100%" className="mb-5" src={Banner2} alt="ads"/>
    
    <hr/>
    <h3 class="h3">Customars choice's</h3>
    <hr/>
    <div class="row mb-5 pb-5 px-2">

        {
            arr.map(p=>
                
                <div data-aos="zoom-in-left" class="col-md-3 col-6 card-padding" >
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
            <hr/>

            {/* Map integrate */}
            <LoadScript
                googleMapsApiKey="AIzaSyDzZswvUwr1zPjAVbIyo3R-KGVQpOUJQPA"
            >
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={17}
                >
                   <Marker
                    onLoad={onLoad}
                    position={position}
                    />
                </GoogleMap>
            </LoadScript>


        </div>
    );
};

export default Home;