import React, { useContext, useEffect } from 'react'
import './CartItems.css'
import { ShopContext } from '../context/context'
import removeIcon from '../assets/cart_cross_icon.png'
export const CartItems = () => {
    const {allProducts, cartItems , removeFromCart,getTotalCartAmount} = useContext(ShopContext)
    useEffect(() => {console.log({cartItems})},[cartItems])
  return (
    <div className='cart_item' >
        <div className="cart_items_format_main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {
            allProducts.map((item,index) => {
                if(cartItems[item.id]>0){
                    return(
                        <div>
                            <div className="class_item_format cart_items_format_main">
                                <img src={item.image} className='cart_icon_product_icon'  alt="" />
                                <p>{item.name}</p>
                                <p>{item.new_price}</p>
                                <button className='cart_items_quantity' >{cartItems[item.id]}</button>
                                <p>${item.new_price*cartItems[item.id]}</p>
                                <img className='cart_item_remove_icon'  src={removeIcon} onClick={() => {removeFromCart(item.id)}} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null
            })
        }
        <div className="cart_items_down">
            <div className="cart_items_total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cart_items_total_item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart_items_total_item">
                        <p>Shipping Fee</p>
                        <p> Free</p>
                    </div>
                    <hr />
                    <div className="cart_items_total_item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart_items_promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cart_items_promobox">
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}
