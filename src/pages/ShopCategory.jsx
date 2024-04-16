import React, { useContext } from 'react'
import './styles/ShopCategory.css'
import { ShopContext } from '../components/context/context'
import dropDownIcon from '../components/assets/dropdown_icon.png'
import { Item } from '../components/items/Item'

export const ShopCategory = (props) => {
    const {allProducts} = useContext(ShopContext)

  return (
    <div className='shop_category' >
        <img className='shop_category_banner' src={props.banner} alt="" />
        <div className="shop_category_index_sort">
            <p>
                <span>Showing 1-12</span> out of 36 products
            </p>
            <div className="subcategory_sort">
                sort by <img src={dropDownIcon} alt="" />
            </div>
        </div>
        <div className="shopcategory_products">
            {allProducts.map((item, index) => {
                if(props.category === item.category){
                    return (<Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />)
                }
            })}
        </div>
        <div className="shop_category_loadmore">
            Explore more
        </div>
    </div>
  )
}
