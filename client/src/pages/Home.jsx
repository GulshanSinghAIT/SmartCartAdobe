import React from 'react';
import ProductList from '../components/products/ProductList';
import Recommendations from '../components/recommendations/Recommendations';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Smart Cart System</h1>
      <ProductList />
      <Recommendations />
    </div>
  );
};

export default Home;
