import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

export default function Cart(props) {
  const cartItems = (
    <ul className={classes['cart-item']}>
      {[{ id: 'c1', name: 'Sushi', amount: 3, price: 12.99 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$33.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}