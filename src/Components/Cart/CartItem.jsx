import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price}`;
  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="cart-item__summary">
          <span className="cart-item__price">{price}</span>
          <span className="cart-item__amount">x {props.amount}</span>
        </div>
      </div>
      <div className="cart-item__actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
