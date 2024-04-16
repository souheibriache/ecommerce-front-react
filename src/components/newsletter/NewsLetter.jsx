import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter' >
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form>
            <input type="email" placeholder='example@email.com' />
            <button type="submit" >Subscribe</button>
        </form>

    </div>
  )
}
