import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import '../Admin.css';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {

    const [uid, setUid] = useState("")

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    const history = useHistory();

    useEffect(()=>{
        const uid = makeid(10);

        setUid(uid.toUpperCase());
    },[])

    return (
        <div>
            <form className="w-50 mx-auto p-4 border add-product add-product-root">
            <i onClick={()=> history.push('/')} class="fas fa-times cross cursor-pointer"></i>
                <div className="d-flex justify-content-between align-items-center px-0">
                <h4 className="">New product</h4>
                <p id="uid" className="m-0">PID: <span style={{fontWeight: 'bold', color: 'dark'}}>{uid}</span></p>
                </div>
                <hr/>
                <input type="text" placeholder="Product Name" className="form-control mb-4" required/>
                {/* <input type="text" placeholder="Brand Name" className="form-control mb-2" required/> */}
                <select class="custom-select custom-select-md mb-4">
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
                <textarea type="text" row="10" placeholder="Product Description . . ." className="form-control mb-4"/>
                <div className="d-flex">
                <input type="number" className="form-control mt-2 mb-3 mr-1" placeholder="Price"/>
                <input type="number" className="form-control mt-2 mb-3 ml-1" placeholder="Discount"/>
                </div>
                <select class="custom-select custom-select-md mb-3">
                <option selected>Tag</option>
                <option>New</option>
                <option>Hot</option>
                <option>Best</option>
                </select>
                <input type="file" placeholder="Brand Name" className="form-control-file my-3" required/>
                <button type="submit" className="btn btn-success w-100">Confirm</button>
            </form>
        </div>
    );
};

export default AddProduct;