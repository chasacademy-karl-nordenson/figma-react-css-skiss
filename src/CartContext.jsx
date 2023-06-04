import { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const updateTotalQuantity = () => {
      const quantity = cart.reduce((total, item) => total + item.quantity, 0);
      setTotalQuantity(quantity);
    };

    updateTotalQuantity();
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity; 
      setCart([...cart]); 
    } else {
      product.quantity = product.quantity; 
      setCart([...cart, product]); 
    }
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};