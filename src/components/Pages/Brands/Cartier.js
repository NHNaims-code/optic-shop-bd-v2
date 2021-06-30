import React, { useContext, useEffect } from 'react';
import ItemCard from '../../utility/ItemCard/ItemCard';
import cartier1 from '../../../assets/Brands/cartier/cartier1.webp';
import cartier2 from '../../../assets/Brands/cartier/cartier2.webp';
import cartier3 from '../../../assets/Brands/cartier/cartier3.webp';
import cartier4 from '../../../assets/Brands/cartier/cartier4.webp';
import cartier5 from '../../../assets/Brands/cartier/cartier5.webp';
import cartier6 from '../../../assets/Brands/cartier/cartier6.webp';
import cartier7 from '../../../assets/Brands/cartier/cartier7.webp';
import cartier8 from '../../../assets/Brands/cartier/cartier8.webp';
import cartier9 from '../../../assets/Brands/cartier/cartier9.webp';
import { PublicContext } from '../../../App';

const Cartier = () => {

    const [setCurrentMenu] = useContext(PublicContext);    

    useEffect(()=>{
        setCurrentMenu("shop");
    }, [])

    return (
        <div className="d-flex flex-column align-items-center">
            <h1 className="mt-4">Cartier Eyeware</h1>
            <div className="bottom-line"></div>
            <div className="row card-root">
                <ItemCard Optic={cartier1}></ItemCard>
                <ItemCard Optic={cartier2}></ItemCard>
                <ItemCard Optic={cartier3}></ItemCard>
                <ItemCard Optic={cartier4}></ItemCard>
                {/* <ItemCard Optic={cartier5}></ItemCard>
                <ItemCard Optic={cartier6}></ItemCard> */}
                <ItemCard Optic={cartier7}></ItemCard>
                <ItemCard Optic={cartier8}></ItemCard>
                <ItemCard Optic={cartier9}></ItemCard>
            </div>
        </div>
    );
};

export default Cartier;