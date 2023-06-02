import React from "react";
import { useCart } from "../CartContext";
import styles from "./CartDropdown.module.css";

function CartDropdown() {
  const { cart } = useCart();

  return (
    <div className={styles.cartDropdown}>
      {cart.length === 0 ? (
            <span className={styles.emptyMessage}>Your cart is empty</span>
      ) : (
        cart.map((product) => (
          <div key={product.id} className={styles.cartItem}>

            <div className={styles.productInfo}>
              <img className={styles.rectangle} src="./src/images/rectangle.png" alt="" />
              <span className={styles.productName}>{product.name}</span>
              <span>
                ${product.price} x {product.quantity}
              </span>
              <span className={styles.totalPrice}>{product.price * product.quantity}</span>
            </div> 

            <img className={styles.checkout} src="./src/images/checkout.png" alt="" />
          </div>
        ))
      )}
    </div>
  );
}

export default CartDropdown;