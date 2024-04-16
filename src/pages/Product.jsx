import React, { useContext, useEffect } from 'react'
import './styles/Product.css'
import { ShopContext } from '../components/context/context'
import {useParams} from 'react-router-dom'
import { BreadCrum } from '../components/breadcrum/BreadCrum'
import { ProductDisplay } from '../components/product-display/ProductDisplay'
import { DescriptionBox } from '../components/description-box/DescriptionBox'
import { RelatedProducts } from '../components/related-products/RelatedProducts'

export const Product = () => {

    const {allProducts} = useContext(ShopContext)
    const {productId} = useParams();
    const product = allProducts.find(product => product.id === Number.parseInt(productId))
    
  return (
    <div>
       <BreadCrum product={product}/> 
       <ProductDisplay product={product} />
       <DescriptionBox/>
       <RelatedProducts />
    </div>
  )
}
