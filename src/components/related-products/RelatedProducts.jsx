import React from 'react'
import './RelatedProducts.css'
import data_product from '../assets/data'
import { Item } from '../items/Item'
export const RelatedProducts = () => {
  return (
    <div className='related_products' >
        <h1>Related Products</h1>
        <hr/>
        <div className="related_products_item">
            {data_product.map((item,index) => {
                return (<Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />)
            })}
        </div>
    </div>
  )
}
