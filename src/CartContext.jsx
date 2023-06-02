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
      existingProduct.quantity += product.quantity; // Add the quantity to the existing product
      setCart([...cart]); // Update the cart state
    } else {
      product.quantity = product.quantity; // Set the quantity for the new product
      setCart([...cart, product]); // Add the new product to the cart
    }
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};