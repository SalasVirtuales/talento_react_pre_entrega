import React from 'react';
import PropTypes from 'prop-types'; // Good practice to define prop types
import './ProductCard.css';

function ProductCard({ imageUrl, title, description, productUrl = "#" }) {
  return (
    <div className="card h-100"> {/* Added h-100 for consistent card height if needed in a row */}
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column"> {/* Added d-flex flex-column for footer alignment */}
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={productUrl} className="btn btn-dark mt-auto">Ver Detalles</a> {/* mt-auto to push button to bottom */}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productUrl: PropTypes.string
};

export default ProductCard;
