import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link
import './ProductItem.css';

const formatPrice = (price) => {
  return `$${price ? price.toFixed(2) : 'N/A'}`;
}

function ProductItem({ product, addToCart }) {
  if (!product) {
    return null;
  }

  return (
    <div className="card product-item h-100 d-flex flex-column">
      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark product-link-wrapper flex-grow-1 d-flex flex-column">
        <img 
          src={product.imageUrl || 'https://placehold.co/300x200/EFEFEF/AAAAAA?text=Product'} 
          className="card-img-top" 
          alt={product.name || 'Product Image'} 
        />
        <div className="card-body d-flex flex-column flex-grow-1"> {/* Ensure card body also flex-grows */}
          <h5 className="card-title">{product.name || 'Product Name'}</h5>
          <p className="card-text flex-grow-1">{product.description || 'Product description.'}</p> {/* This p should take available space */}
          <p className="card-text fw-bold mt-auto pt-2">{formatPrice(product.price)}</p> {/* Push price to bottom before button */}
        </div>
      </Link>
      <div className="card-footer bg-transparent border-top-0 pb-3 pt-0"> {/* Footer for the button */}
         <button 
             onClick={() => addToCart(product)} 
             className="btn btn-primary w-100" // Make button full width of footer
         >
             Agregar al Carrito
         </button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
