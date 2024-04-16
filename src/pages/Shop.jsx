import React from 'react'
import { Hero } from '../components/hero/Hero'
import { Popular } from '../components/popular/Popular'
import { Offers } from '../components/offers/Offers'
import { NewCollections } from '../components/new-collections/NewCollections'
import { NewsLetter } from '../components/newsletter/NewsLetter'
import { Footer } from '../components/footer/Footer'

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>  
        <Offers/>
        <NewCollections/>
        <NewsLetter/> 
        <Footer/>
    </div>
  )
}
