import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star.jpg'
import star_dull_icon from '../Assets/start_dull.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
    <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>

        </div>
        <div className='productdisplay-img'>
        <img classnAME='productdisplay-main-img' src={product.image} alt=""/>
        </div>

    </div>
    <div className='productdisplay-right'>
    <h1>
        {product.name}
    </h1>
    <div className="productdisplay-right-star">
    <img src={star_icon} alt=""/>
    <img src={star_icon} alt=""/>
    <img src={star_icon} alt=""/>
    <img src={star_icon} alt=""/>
    <img src={star_dull_icon} alt=""/>
    <p>(122)</p>
    </div>

    <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
        </div>
    </div>
    <button onClick={()=>{addToCart(product.id)}}>
        ADD TO CART
    </button>

    </div>
    </div>
  )
}

export default ProductDisplay