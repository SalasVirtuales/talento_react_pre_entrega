import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get URL parameters
import PropTypes from 'prop-types'; // For addToCart prop
// You might want a specific CSS file for this page later
// import './ProductDetailPage.css'; 

const formatPrice = (price) => {
  return `$${price ? price.toFixed(2) : 'N/A'}`;
}

function ProductDetailPage({ addToCart }) {
  const { productId } = useParams(); // Get productId from URL
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Product not found');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Adapt API response if necessary (e.g., title to name, image to imageUrl)
        const adaptedProduct = {
          id: data.id,
          name: data.title,
          description: data.description,
          price: data.price,
          imageUrl: data.image,
          category: data.category, // Keep category if you want to display it
        };
        setProduct(adaptedProduct);
      } catch (e) {
        setError(e.message);
        console.error("Failed to fetch product details:", e);
      } finally {
        setIsLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]); // Re-run effect if productId changes

  if (isLoading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading product details...</span>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-danger" role="alert">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container my-5 text-center">
        <p>Product details could not be loaded.</p>
      </div>
    );
  }

  // Basic product detail layout
  return (
    <div className="container mt-4 product-detail-page">
      <div className="row">
        <div className="col-md-6">
          <img src={product.imageUrl} alt={product.name} className="img-fluid rounded shadow-sm" style={{ maxHeight: '500px', objectFit: 'contain' }} />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">Category: {product.category}</p>
          <p className="lead">{product.description}</p>
          <h3 className="my-3">{formatPrice(product.price)}</h3>
          <button 
            onClick={() => addToCart(product)} 
            className="btn btn-primary btn-lg"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
      {/* Future: Add related products, reviews, etc. */}
    </div>
  );
}

ProductDetailPage.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetailPage;
