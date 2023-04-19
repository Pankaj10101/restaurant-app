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

  const updateItemFromCart = (id, newAmount) => {
    setItems((prevState) => {
      const updatedItems = [...prevState];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === id
      );
      const updatedItem = { ...updatedItems[updatedItemIndex] };
      updatedItem.amount = newAmount;
      const prevAmount = updatedItems[updatedItemIndex].amount;
      updatedItems[updatedItemIndex] = updatedItem;
      setTotalAmount((prevState) =>
      prevState + (newAmount - prevAmount) * updatedItem.price
    );
      return updatedItems;
      
    });
  };
  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    updateItem : updateItemFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
