import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
export const Item = (props) => {
  return (
    <div className='item' >
        <Link to={`/product/${props.id}`} > <img onClick={window.scrollTo(0,0  )} src={props.image} alt='' ></img></Link>
        <p>{props.name}</p>
        <div className="item_prices">
            <div className="item_price_new">
                <p>${props.newPrice}</p>
            </div>
            <div className="item_price_old">
                <p>${props.oldPrice}</p>
            </div>
        </div>
    </div>
  )
}
