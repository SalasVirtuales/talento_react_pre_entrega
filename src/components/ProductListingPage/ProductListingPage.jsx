import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem'; // Adjust path if necessary
import './ProductListingPage.css';

function ProductListingPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // The API returns products with 'title', 'price', 'description', 'image', 'id'
        // We need to map them to 'name' and 'imageUrl' if ProductItem expects that,
        // or update ProductItem to use 'title' and 'image'.
        // For now, let's adapt the data here:
        const adaptedProducts = data.map(p => ({
          id: p.id,
          name: p.title, // Map title to name
          description: p.description,
          price: p.price,
          imageUrl: p.image, // Map image to imageUrl
        }));
        setProducts(adaptedProducts);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch products:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-danger" role="alert">
          Error fetching products: {error}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="container my-5 text-center">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="container my-5 product-listing-page">
      <h2 className="text-center mb-4">Nuestros Productos</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductItem product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

ProductListingPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductListingPage;
