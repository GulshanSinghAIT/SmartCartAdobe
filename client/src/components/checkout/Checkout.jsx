import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  const handleCheckout = () => {
    // Logic to handle checkout
    console.log('Checkout completed!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Total Amount: ${totalAmount}</h3>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
