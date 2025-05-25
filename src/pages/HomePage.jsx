import React from 'react';
import ProductListingPage from '../components/ProductListingPage/ProductListingPage';
import HeroSection from '../components/HeroSection/HeroSection'; // Ensure HeroSection is imported
import PropTypes from 'prop-types';

function HomePage({ addToCart }) {
  return (
    <>
      <HeroSection /> {/* HeroSection is rendered here */}
      <ProductListingPage addToCart={addToCart} /> {/* ProductListingPage receives addToCart */}
    </>
  );
}

HomePage.propTypes = {
    addToCart: PropTypes.func.isRequired,
};

export default HomePage;
