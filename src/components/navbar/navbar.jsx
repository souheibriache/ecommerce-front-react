import React, { useContext, useRef, useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cartIcon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/context'
import dronDownIcon from '../assets/dropdown_icon.png'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems}= useContext(ShopContext)
    const menuRef = useRef()
    const dropDowbToggle = (e) => {
        menuRef.current.classList.toggle('nav_menu_visible')
        e.target.classList.toggle('open')
    }

  return (
    <div className='navbar' >
        <div className="nav_logo">
            <img src={logo} alt="logo" />
            <p>Shopper</p>
        </div>
        <img className='nav_dropdown' onClick={(e)=>dropDowbToggle(e)} src={dronDownIcon} alt="" />
        <ul ref={menuRef} className="nav_menu">
            <li onClick={()=> setMenu("shop")}><Link style={{textDecoration: "none", color: "#626262"}} to='/'>Shop</Link> {menu === "shop"  && <hr/>}</li>
            <li onClick={()=> setMenu("men")}><Link style={{textDecoration: "none", color: "#626262"}} to='/men'>Men</Link> {menu === "men"  && <hr/>}</li>
            <li onClick={()=> setMenu("women")}><Link style={{textDecoration: "none", color: "#626262"}} to='/women'>Women</Link>  {menu === "women"  && <hr/>}</li>
            <li onClick={()=> setMenu("kids")}><Link style={{textDecoration: "none", color: "#626262"}} to='/kids'>Kids</Link>  {menu === "kids"  && <hr/>}</li>
        </ul>

        <div className="nav_login_cart">
            <button><Link style={{textDecoration: "none", color: "#626262"}} to='login'>Login</Link></button>
            <Link style={{textDecoration: "none", color: "#626262"}} to='cart'><img src={cartIcon} alt="cart" /></Link>
            <div className="nav_cart_counter">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
