import { CartProvider } from './CartContext';
import { useState } from 'react'
import './App.css'
import Header from "../src/components/Header"
import ProductImages from "../src/components/ProductImages"
import ProductInfo from "../src/components/ProductInfo"

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header/>
        <div className='productBody'>
          <ProductImages/>
          <ProductInfo/>
        </div>
      </div>
   </CartProvider>
  )
}

export default App