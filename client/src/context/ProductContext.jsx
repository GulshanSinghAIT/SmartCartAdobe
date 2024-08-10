import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // Fetch product data and recommendations from API
    console.log('Fetching products...');
    setProducts([
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      // Add more products here
    ]);

    console.log('Fetching recommendations...');
    setRecommendedProducts([
      { id: 3, name: 'Recommended Product 1', price: 15 },
      { id: 4, name: 'Recommended Product 2', price: 25 },
      // Add more recommended products here
    ]);
  }, []);

  return (
    <ProductContext.Provider value={{ products, recommendedProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

