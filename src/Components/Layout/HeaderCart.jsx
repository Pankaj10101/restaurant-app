import React from 'react'
import './HeaderCart.css'
import CartIcon from '../Cart/CartIcon'
const HeaderCart = () => {
  return (
    <button className='button'>
        <span className='icon'><CartIcon/></span>
        <span>Your Cart</span>
        <span className='badge'>0</span>
    </button>
  )
}

export default HeaderCart