import React from 'react'
import './NewCollections.css'
import newCollection from '../assets/new_collections'
import { Item } from '../items/Item'
export const NewCollections = () => {
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {newCollection.map((collection, index) => {
                return <Item key={index} id={collection.id} name={collection.name} image={collection.image} newPrice={collection.new_price} oldPrice={collection.old_price} />
            })}
        </div>
    </div>
  )
}
