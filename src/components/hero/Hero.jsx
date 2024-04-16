import React from 'react'
import './Hero.css'
import handIcon from '../assets/hand_icon.png'
import arrocIcon from '../assets/arrow.png'
import heroImage from '../assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero' >
        <div className="hero_left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero_hand_icon">
                    <p>New</p>
                    <img src={handIcon} alt='hand'></img>
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero_latest_button">
                <div>Latest collection</div>
                <img src={arrocIcon} alt=''></img>
            </div>
        </div>
        <div className="hero_right">
            <img src={heroImage} alt='hero'></img>
        </div>
    </div>
  )
}
