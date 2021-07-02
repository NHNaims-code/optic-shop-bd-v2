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

    const handleAddProduct = (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;
        const gender = document.getElementById('gender').value;
        const brand = document.getElementById('brand').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const discount = document.getElementById('discount').value;
        const tag = document.getElementById('tag').value;
        const img = document.getElementById('img').files[0];
        console.log(name, type, gender, brand, description, price, discount, tag, img);

        const extensionArr = img.name.split('.').length;
        const extension = img.name.split('.')[extensionArr - 1];

        const formData = new FormData();
        formData.append('file', img);
        formData.append('pid', uid);
        formData.append('name', name);
        formData.append('type', type);
        formData.append('brand', brand);
        formData.append('gender', gender);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('tag', tag);
        formData.append('extension', extension);

        console.log(img.name, 'extension: ', extension);

        fetch('http://216.137.185.146:5000/addProduct/', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .then(result => {
            if(result){
                const name = document.getElementById('name').value = "";
                const type = document.getElementById('type').value = "";
                const gender = document.getElementById('gender').value ="";
                const brand = document.getElementById('brand').value;
                const description = document.getElementById('description').value = "";
                const price = document.getElementById('price').value = "";
                const discount = document.getElementById('discount').value = "";
                const tag = document.getElementById('tag').value = "";
                const img = document.getElementById('img').files[0];
                const uid = makeid(10);
                setUid(uid.toUpperCase());
                alert('success');

            }else{
                alert('failed');
            }
        })
    }

    



    return (
        <div>
            <form className="mx-auto p-4 border add-product add-product-root" onSubmit={handleAddProduct}>
            <i onClick={()=> history.push('/')} class="fas fa-times cross cursor-pointer"></i>
                <div className="d-flex justify-content-between align-items-center px-0">
                <h4 className="">New product</h4>
                <p id="uid" className="m-0">PID: <span style={{fontWeight: 'bold', color: 'dark'}}>{uid}</span></p>
                </div>
                <hr/>
                <input id="name" type="text" placeholder="Product Name" className="form-control mb-4" required/>
                <div className="d-flex">
                <select id="type" class="custom-select custom-select-md mb-3 w-50 mr-1">
                <option selected>Sunglass</option>
                <option>Lens</option>
                </select>
                <select id="gender" class="custom-select custom-select-md mb-3 w-50 mr-1">
                <option selected>Male</option>
                <option>Female</option>
                <option>Kids</option>
                </select>
                </div>
                <select id="brand" class="custom-select custom-select-md mb-4">
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
                <textarea id="description" type="text" row="10" placeholder="Product Description . . ." className="form-control mb-4"/>
                <div className="d-flex">
                <input id="price" type="number" className="form-control mt-2 mb-3 mr-1" placeholder="Price"/>
                <input id="discount" type="number" className="form-control mt-2 mb-3 ml-1" placeholder="Discount"/>
                </div>
                <select id="tag" class="custom-select custom-select-md mb-3">
                <option selected>Tag</option>
                <option>New</option>
                <option>Hot</option>
                <option>Best</option>
                </select>
                <input id="img" type="file" placeholder="Brand Name" className="form-control-file my-3" required/>
                <button type="submit" className="btn btn-success w-100">Confirm</button>
            </form>
        </div>
    );
};

export default AddProduct;