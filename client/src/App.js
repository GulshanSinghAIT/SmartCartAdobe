import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Recommendations from './pages/Recommendations';
import Navigation from './pages/Navigation';
import {ProductProvider} from './context/ProductContext.jsx';
const App = () => {
  return (
    <ProductProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/navigation" element={<Navigation />} />
      </Routes>
    </Router>
    </ProductProvider>
  );
};

export default App;
