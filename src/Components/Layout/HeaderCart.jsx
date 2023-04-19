import React from 'react'
import './HeaderCart.css'
import CartIcon from '../Cart/CartIcon'
const HeaderCart = (props) => {
  return (
    <button className='button' onClick={props.onClick} >
        <span className='icon'><CartIcon/></span>
        <span>Your Cart</span>
        <span className='badge'>0</span>
    </button>
  )
}

export default HeaderCart