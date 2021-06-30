import './NewCard.css';

const NewCard = ({img}) => {
    return (
        <div>
             <div class="col-md-3 col-sm-6">
                <div class="product-grid3">
                    <div class="product-image3">
                        <a href="#">
                            <img class="pic-1" src={img}/>
                            <img class="pic-2" src={img}/>
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
        </div>
    );
};

export default NewCard;