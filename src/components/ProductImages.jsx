import styles from "./ProductImages.module.css"
import React from "react"    

function ProductImages () {

    return (
        <div>
            <div className={styles.imageContainer}>
                <img src="./src/images/Rectangle.png" alt="product image" />
                <div className={styles.thumbnails}>
                    <img src="./src/images/Rectangle.png" alt="product image" />
                    <img src="./src/images/Rectangle Copy 2.png" alt="product image" />
                    <img src="./src/images/Rectangle Copy 3.png" alt="product image" />
                    <img src="./src/images/Rectangle Copy 4.png" alt="product image" />

                </div> 
            </div>

        </div>
     
    )

}

export default ProductImages