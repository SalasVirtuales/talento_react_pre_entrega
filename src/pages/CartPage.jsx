import React from 'react';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

// This page will display the ShoppingCart component.
// It will need cartItems and cart management functions from App.jsx.
function CartPage({ cartItems, removeFromCart, updateQuantity }) {
  return (
    <div className="container mt-4">
      <h2>Your Shopping Cart</h2>
      <ShoppingCart 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
      />
    </div>
  );
}

// Add PropTypes
import PropTypes from 'prop-types';
CartPage.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
};


export default CartPage;
