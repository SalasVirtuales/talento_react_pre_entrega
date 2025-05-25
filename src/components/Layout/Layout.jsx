import React from 'react';
import PropTypes from 'prop-types';
import TopBar from '../TopBar/TopBar';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
// If you have global styles for layout specifically, you can create and import Layout.css
import './Layout.css';

function Layout({ children }) {
  return (
    <>
      <TopBar />
      <NavigationBar />
      <main className="main-content"> {/* Added a class for the main content area */}
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
