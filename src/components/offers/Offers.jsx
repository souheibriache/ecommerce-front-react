import React from 'react'
import './Offers.css'
import exclusiveImage from '../assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers' >
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className="offers_right">
            <img src={exclusiveImage} ></img>
        </div>
    </div>
  )
}
