import React, { useContext, useState } from "react";
import styles from "./ProductInfo.module.css";
import { CartContext } from "../CartContext";

function Counter({ count, setCount }) {
  const decrement = () => setCount(Math.max(count - 1, 0));
  const increment = () => setCount(count + 1);

  return (
    <div className={styles.productButtons}>
      <span className={styles.decrement} onClick={decrement}>
        -
      </span>
      <h3 className={styles.count}>{count}</h3>
      <span className={styles.increment} onClick={increment}>
        +
      </span>
    </div>
  );
}

function ProductInfo() {
  const [count, setCount] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const quantity = count > 0 ? count : 1; 
    addToCart({
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: quantity 
    });
    setCount(0);
  };

  return (
    <div className={styles.info}>
      <h4 className={styles.sneakerCompany}>SNEAKER COMPANY</h4>
      <h2 className={styles.productName}>Fall Limited Edition Sneakers</h2>
      <p className={styles.productDesc}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={styles.priceInfo}>
        <div className={styles.price}>
          <h3 className={styles.currentPrice}>$125.00</h3>
          <h4 className={styles.priceBefore}>$250.00</h4>
        </div>
        <h4 className={styles.sale}>50%</h4>
      </div>
      <div className={styles.counterAndAddCart}>
        <Counter count={count} setCount={setCount} />
        <div className={styles.rectangle}>
          <button className={styles.addToCart} onClick={handleAddToCart}>
            <img
              className={styles.addImg}
              src="./src/images/Group 3.png"
              alt="product image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;