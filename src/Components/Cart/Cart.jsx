import React from 'react'
import './Cart.css'
import Modal from '../UI/Modal'
const Cart = () => {
    const CartItems =(<ul className='cart-items'> {[{id:'c1', name:'Sushi', amount:1, price:12 }].map((item)=> <li>{item.name}</li>)}</ul>)
  return (
    <Modal>
    {CartItems}
        <div className='total'>
            <span>Total Amount</span>
            <span>12</span>
        </div>
        <div className='actions'>
            <button className='close' >Close</button>
            <button className='order'>Order</button>
        </div>
    </Modal>
  )
}

export default Cart