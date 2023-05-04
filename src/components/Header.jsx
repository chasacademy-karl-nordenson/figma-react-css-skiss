import styles from "./Header.module.css"
import React from "react"

function Header ()  {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoButtons}>
                <img className={styles.sneaker} src="./src/images/sneakers.png" alt="logo" />
                    <div className={styles.buttonsGroup}>
                        <button typeof="button">Collections</button>
                        <button>Men</button>
                        <button>Women</button>
                        <button>About</button>
                        <button>Contact</button>
                    </div>
            </div>
            <div className={styles.cartAccount}>
                <img className={styles.cart} src="./src/images/Shape.png" alt="cart" />
                <img className={styles.account} src="./src/images/Oval.png" alt="" />
            </div>

        </div>
    )
}

export default Header