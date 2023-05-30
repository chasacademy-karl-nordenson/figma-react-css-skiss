import React from "react";
import { useCart } from "../CartContext";
import styles from "./CartDropdown.module.css";

function CartDropdown() {
  const { cart } = useCart();

  return (
    <div className={styles.cartDropdown}>
      {cart.length === 0 ? (
        <div>
          <span className={styles.cartMessage}>Cart</span>
          <span className={styles.emptyMessage}>Your cart is empty</span>
        </div>
      ) : (
        cart.map((product) => (
          <div>
            <span className={styles.cartMessage}>Cart</span>
            <img className={styles.thumbnail} src="./src/images/Rectangle.png" alt="product image" />
            <div key={product.id} className={styles.cartItem}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productPrice}>{product.price}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartDropdown;