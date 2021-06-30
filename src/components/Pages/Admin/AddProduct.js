import React from 'react';
import './Admin.css';

const AddProduct = () => {
    return (
        <div>
            <form className="w-50 mx-auto p-4 border add-product">
                <h3 className="pb-4">New product</h3>
                <input type="text" placeholder="Product Name" className="form-control mb-3" required/>
                {/* <input type="text" placeholder="Brand Name" className="form-control mb-2" required/> */}
                <select class="custom-select custom-select-md mb-3">
                <option selected>Brand Name</option>
                <option>Cartier</option>
                <option>TomFord</option>
                <option>Rayban</option>
                <option>Gucci</option>
                <option>Boss</option>
                <option>Lacost</option>
                <option>Chanel</option>
                <option>Prada</option>
                <option>Dior</option>
                <option>Dunhill</option>
                <option>Fendi</option>
                <option>Silhouette</option>
                <option>Montblanc</option>
                <option>Danmac</option>
                <option>Rolex</option>
                <option>Omega</option>
                <option>Maybach</option>
                <option>BurBerry</option>
                <option>Police</option>
                </select>
                <textarea type="text" row="10" placeholder="Product Description . . ." className="form-control mb-2"/>
                <input type="file" placeholder="Brand Name" className="form-control-file my-3" required/>
                <button type="submit" className="btn btn-success w-100">Confirm</button>
            </form>
        </div>
    );
};

export default AddProduct;