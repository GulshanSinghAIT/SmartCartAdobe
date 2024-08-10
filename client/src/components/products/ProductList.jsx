import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext.jsx'; // Ensure the path is correct

const ProductList = () => {
  const context = useContext(ProductContext);

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { products, addToCart } = context;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
