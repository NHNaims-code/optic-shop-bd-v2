import React, { useContext } from 'react';
import { PublicContext } from '../../../App';


const ItemCard = ({Optic, Mockup}) => {

    const [setCurrentMenu, cart,setCart] = useContext(PublicContext)

    return (
        <>
            <div className="col-md-3 col-6 my-5 ot-card">
                <div className="ot-card-in">
                    <div className="img-section">
                        <img src={Optic} alt="img"/>
                        {/* <img className="mockup" src={Mockup} alt="img"/> */}

                        <div className="color-section">
                            <span style={{backgroundColor: '#EE962F'}}></span>
                            <span style={{backgroundColor: '#D95A54'}}></span>
                            <span style={{backgroundColor: '#EAEAEA'}}></span>
                        </div>
                    </div>
                    <div className="price-section">
                        <h4>Endless Sunglass</h4>
                        <h1>৳ 850</h1>
                        <button onClick={()=> setCart(cart+1)}><i class="fa fa-cart-plus mr-2" aria-hidden="true"></i> ADD TO CART</button>
                    </div>
                    <div className="badge">
                        <i class="fa fa-fire" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemCard;