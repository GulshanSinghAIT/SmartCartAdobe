import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Recommendations = () => {
  const { recommendedProducts } = useContext(ProductContext);

  return (
    <div>
      <h2>Recommended Products</h2>
      {recommendedProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
