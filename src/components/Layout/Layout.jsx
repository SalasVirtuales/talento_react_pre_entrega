import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../TopBar/TopBar';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import './Layout.css'; // Keep existing Layout.css import

// Pass isAuthenticated and logout down to NavigationBar
function Layout({ children, isAuthenticated, logout }) { 
  return (
    <>
      <TopBar />
      {/* Pass auth props to NavigationBar */}
      <NavigationBar isAuthenticated={isAuthenticated} logout={logout} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired, // Add prop type
  logout: PropTypes.func.isRequired,       // Add prop type
};

// Set default props for isAuthenticated and logout if not always provided
// (though in this setup App.jsx will always provide them)
Layout.defaultProps = {
  isAuthenticated: false,
  logout: () => {}, // Placeholder, should be overridden by App.jsx
};

export default Layout;
