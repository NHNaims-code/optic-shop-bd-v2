import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Cartier from '../../assets/Brands/Cartier.jpeg'
import Lacoste from '../../assets/Brands/Lacoste.jpeg'
import RayBan from '../../assets/Brands/RayBan.jpeg'
import TomFord from '../../assets/Brands/TomFord.jpeg'

const BrandCarousel = () => {


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        // cssEase: "linear",

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


    return (
      <div>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          <div className="d-flex justify-content-center">
            <img height="60px" src={Cartier} alt="brand"/>
          </div>
          <div className="d-flex justify-content-center">
            <img height="60px" src={Lacoste} alt="brand"/>
          </div>
          <div className="d-flex justify-content-center">
            <img height="60px" src={RayBan} alt="brand"/>
          </div>
          <div className="d-flex justify-content-center">
            <img height="60px" src={TomFord} alt="brand"/>
          </div>
          <div className="d-flex justify-content-center">
            <img height="60px" src={Cartier} alt="brand"/>
          </div>

        </Slider>
      </div>
    );
};

export default BrandCarousel;