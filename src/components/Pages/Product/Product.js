import './Product.css';
import Optic from '../../../assets/glasses/51-8TnB8-yL._AC_UL320_.jpg'
import Optic2 from '../../../assets/glasses/51sC7IsMw-L._AC_UL320_.jpg'
import { useEffect } from 'react';


const Product = () => {
    const arr = [0,0,0,0,0,0,0,0]

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <>
        <div className="product-container">
            <div className="product-img border">
                <img className="" src={Optic}/>
            </div>
            <div className="product-description text-left p-5">
                <h1>Colorize Eyeware Sunglass</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h2 className="mt-5">Price: 850 BDT</h2>
                <div className="mt-5">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-danger ml-5">Buy Now</button>
                </div>
            </div>
        </div>
        <h2 className="mt-4">Suggest for you</h2>
        <hr/>
        <div class="row">
                {
                    arr.map(p => 
                        
                        <div class="col-md-3 col-sm-6 p-5">
                <div class="product-grid3">
                    <div class="product-image3">
                        <a href="#">
                            <img class="pic-1" src={Optic2}/>
                            <img class="pic-2" src={Optic2}/>
                        </a>
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
        </>
    );
};

export default Product;