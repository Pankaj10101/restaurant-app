import React, { useContext } from 'react'
import './HeaderCart.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
const HeaderCart = (props) => {
 const ctx=  useContext(CartContext)
 const numberOfItems = ctx.items.reduce((cur, item)=>{
  return cur +item.amount;
 },0)
  return (
    <button className='button' onClick={props.onClick} >
        <span className='icon'><CartIcon/></span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfItems}</span>
    </button>
  )
}

export default HeaderCart