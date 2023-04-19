import React from 'react'
import './MealItemForm.css'
import Input from '../../UI/Input'
import { useContext, useState } from 'react'
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(1);
  const addItemToCart = (e) => {
    e.preventDefault();
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };


  const amountChangeHandler = (e) => {
    setAmount(+e.target.value);
  };
  return (
    <form className='form' onSubmit={addItemToCart}>
        <Input label = 'Amount' input={{
            id : 'amount',
            type : 'number',
            min: 1,
            max: 5,
            step: 1,
            defaultValue:1,
          onChange: amountChangeHandler
        }} />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm