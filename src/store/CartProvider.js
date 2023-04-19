import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCart = (item) => {
    setItems((prevState) => [...prevState, item]);
    setTotalAmount((prevState) => prevState + item.price * item.amount);
  };

  const removeItemFromCart = (id) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
