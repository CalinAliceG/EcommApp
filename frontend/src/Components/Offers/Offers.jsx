import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <hi>Exclusive</hi>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>

        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt=""/>

        </div>
    </div>
  )
}

export default Offers