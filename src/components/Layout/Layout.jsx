import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../TopBar/TopBar';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import './Layout.css'; // Keep existing Layout.css import

// Accept totalCartQuantity and pass it to NavigationBar
function Layout({ children, isAuthenticated, logout, totalCartQuantity }) { 
  return (
    <>
      <TopBar />
      <NavigationBar 
        isAuthenticated={isAuthenticated} 
        logout={logout} 
        totalCartQuantity={totalCartQuantity} // Pass down
      />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  totalCartQuantity: PropTypes.number.isRequired, // Add prop type for totalCartQuantity
};

// Default prop for totalCartQuantity in case it's ever not provided,
// although App.jsx should always provide it.
Layout.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
  totalCartQuantity: 0, // Default to 0
};

export default Layout;
