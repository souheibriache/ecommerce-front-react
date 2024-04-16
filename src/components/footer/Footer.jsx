import React from 'react'
import './Footer.css'
import footerLogo from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pinterest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer' >
        <div className="footer_logo">
            <img src={footerLogo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer_social_icons">
            <div className="footer_icons_container">
                <img src={instagram} ></img>
            </div>

            <div className="footer_icons_container">
                <img src={pinterest} ></img>
            </div>

            <div className="footer_icons_container">
                <img src={whatsapp} ></img>
            </div>
        </div>
        <div className="footer_copyright">
            <hr/>

            <p>Copyright @2024 all rights reserved</p>
        </div>
    </div>
  )
}
