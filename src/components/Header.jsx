import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import CartDropdown from "./CartDropdown";
import { useCart } from "../CartContext";

function Header() {
  const { cart } = useCart();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
  }, [cart]);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logoButtons}>
        <img
          className={styles.sneaker}
          src="./src/images/sneakers.png"
          alt="logo"
        />
        <div className={styles.buttonsGroup}>
          <button typeof="button">Collections</button>
          <button>Men</button>
          <button>Women</button>
          <button>About</button>
          <button>Contact</button>
        </div>
      </div>
      <div className={styles.cartAccount}>
        <img
          className={styles.cart}
          src="./src/images/Shape.png"
          alt="cart"
          onClick={toggleDropdown}
        />
        {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
        <img
          className={styles.account}
          src="./src/images/Oval.png"
          alt=""
        />
      </div>
      {dropdownVisible && <CartDropdown />}
    </div>
  );
}

export default Header;