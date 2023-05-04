import styles from "./ProductInfo.module.css"
import React from "react"    

function ProductInfo () {

    return (
        <div className={styles.info}>
            <h4 className={styles.sneakerCompany}>SNEAKER COMPANY</h4>
            <h2 className={styles.productName}>Fall Limited Edition Sneakers</h2>
            <p className={styles.productDesc}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className={styles.priceInfo}>
                <div className={styles.price}>
                    <h3 className={styles.currentPrice}>$125.00</h3>
                    <h4 className={styles.priceBefore}>$250.00</h4>
                </div>
                <h4 className={styles.sale}>50%</h4>
            </div>
            <div className={styles.counterAndAddCart}>
                <div className={styles.productButtons}>
                    <span className={styles.decrement}>-</span>
                    <h3 className={styles.count}>0</h3>
                    <span className={styles.increment}>+</span>
                </div>
                <div className={styles.rectangle}>
                    <button className={styles.addToCart}><img className={styles.addImg} src="./src/images/Group 3.png" alt="product image" /></button>
                </div>
            </div>

        </div>
    )


}

export default ProductInfo