import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../assets/star_icon.png'
import starDullIcon from '../assets/star_dull_icon.png'
import { ShopContext } from '../context/context'
export const ProductDisplay = (props) => {
  const {product} = props
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='product_display' >
      <div className="product_display_left">
        <div className="product_display_img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_display_img">
          <img className='product_display_main_img'  src={product.image} alt="" />
        </div>
      </div>
      <div className="product_display_right">
        <h1>{product.name}</h1>
        <div className="product_display_right_star">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>122</p>
        </div>
        <div className="product_display_right_prices">
          <div className="product_display_right_price_old">{product.old_price}</div>
          <div className="product_display_right_price_new">{product.new_price}</div>
        </div>
        <div className="product_display_right_description">
          lorem ipsum
        </div>
        <div className="product_display_right_size">
          <h1>Select size</h1>
          <div className="product_display_right_sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={()=> {addToCart(product.id)}} >ADD TO CART</button>
        <p className='product_display_right_category' ><span>Category :</span>Women, T-shirt, Crop Top </p>
        <p className='product_display_right_category' ><span>Tags :</span>Modern, Latests </p>
      </div>
    </div>
  )
}
