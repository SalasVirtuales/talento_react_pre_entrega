import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import routing components
import Layout from './components/Layout/Layout';
// Import Page Components
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'; // Import ProtectedRoute

// Keep ShoppingCart component import if CartPage uses it directly,
// or if a cart summary is still desired in the Layout (e.g. navbar).
// For now, CartPage will render the full ShoppingCart.
// import ShoppingCart from './components/ShoppingCart/ShoppingCart'; 

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  // Mock authentication state - will be expanded later
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems => {
      if (newQuantity <= 0) {
        return prevItems.filter(item => item.id !== productId);
      }
      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Mock login/logout functions - to be properly implemented with LoginPage/ProfilePage later
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    // Pass isAuthenticated and logout to Layout
    <Layout isAuthenticated={isAuthenticated} logout={logout}>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage addToCart={addToCart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
            />
          } 
        />
        <Route 
          path="/login" 
          element={<LoginPage login={login} isAuthenticated={isAuthenticated} />} 
        />
        <Route 
          path="/product/:productId" 
          element={<ProductDetailPage addToCart={addToCart} />} 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
      </Routes>
    </Layout>
  );
}

export default App;
