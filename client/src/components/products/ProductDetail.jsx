import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const ProductDetail = ({ match }) => {
  const { products } = useContext(ProductContext);
  const product = products.find((p) => p.id === match.params.id);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default ProductDetail;
