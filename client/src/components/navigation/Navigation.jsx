import React from 'react';

const Navigation = () => {
  const handleNavigate = () => {
    // Logic to handle navigation
    console.log('Navigating to product location...');
  };

  return (
    <div>
      <h2>Navigation</h2>
      <button onClick={handleNavigate}>Navigate to Product</button>
    </div>
  );
};

export default Navigation;
