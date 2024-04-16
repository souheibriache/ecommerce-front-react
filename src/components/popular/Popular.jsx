import React from 'react'
import './Popular.css'
import productData from '../assets/data'
import { Item } from '../items/Item'

export const Popular = () => {
  return (
    <div className='popular' >
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular_item">
            {productData.map((item, index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            })}
        </div>
    </div>
  )
}
