import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Logic to add item to cart
    console.log('Adding to cart...');
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    // Logic to remove item from cart
    console.log('Removing from cart...');
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
