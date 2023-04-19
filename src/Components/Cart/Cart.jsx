import React, { useContext } from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={() => cartCtx.removeItem(item.id)}
        />
      ))}
    </ul>
  );

  
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className="actions">
        <button onClick={props.onHideCart} className="close">
          Close
        </button>
        <button
          onClick={() => {
            alert("Order placed!");
            cartCtx.clearCart();
          }}
          className="order"
          disabled={cartCtx.items.length === 0}
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;