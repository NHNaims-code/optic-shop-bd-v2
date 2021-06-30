import React from 'react';
import './Carousel.css';
import EyeWear from '../../assets/slide2.jpg'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide mt-0" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={EyeWear} class="d-block w-100" alt="..."/>
                <div className="carousel-text">
                    <h2>WELCOME TO</h2>
                    <h1><span>O</span>PTIC SH<span>O</span>P</h1>
                    <p>Best glass shop in Bangladesh</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src={EyeWear} class="d-block w-100" alt="..."/>
                <div className="carousel-text">
                    <h2>WELCOME TO</h2>
                    <h1><span>O</span>PTIC SH<span>O</span>P</h1>
                    <p>Best glass shop in Bangladesh</p>
                </div>
            </div>
            <div class="carousel-item">
            <img src={EyeWear} class="d-block w-100" alt="..."/>
                <div className="carousel-text">
                    <h2>WELCOME TO</h2>
                    <h1><span>O</span>PTIC SH<span>O</span>P</h1>
                    <p>Best glass shop in Bangladesh</p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
    );
};

export default Carousel;