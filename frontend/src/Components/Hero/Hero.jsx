import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import model from '../Assets/model.jpeg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>
                NEEW ARRIVALS ONLY
            </h2>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=""/>

            </div>
            <p>collection</p>
            <p>for everybody</p>


        </div>
        <div className='hero-latest-btn'>
            <div>Latest Collection</div>
            <img src={arrow} alt=""/>

        </div>
        <div className='hero-right'>
        <img src={model} alt=""/>

        </div>

    </div>
  )
}

export default Hero