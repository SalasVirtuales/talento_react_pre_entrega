import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // useNavigate removed as it's not used in the final provided snippet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import './NavigationBar.css'; // Ensure this is imported for any custom badge styles

// Receive totalCartQuantity prop
function NavigationBar({ isAuthenticated, logout, totalCartQuantity }) { 
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    // Navigation to home after logout is typically handled by App.jsx or a redirect in ProtectedRoute if applicable,
    // or could be added back here if direct navigation is preferred.
    // For now, simply calling logout as per the apparent change in the snippet.
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top main-nav">
      <div className="container-fluid px-md-5">
        <Link className="navbar-brand" to="/">
          <img src="https://placehold.co/100x40/FFFFFF/000000?text=PUMA" alt="PUMA Logo" style={{ height: '30px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/extra-week">EXTRA WEEK</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/nuevos">Nuevos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/mujeres">Mujeres</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/hombres">Hombres</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/ninos">Niños</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/deportes">Deportes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={navLinkStyle} to="/category/colecciones">Colecciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-danger" style={navLinkStyle} to="/outlet">Outlet</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex flex-row align-items-center">
            <li className="nav-item me-3">
              <Link className="nav-link" to="#"><FontAwesomeIcon icon={faSearch} /></Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="#"><FontAwesomeIcon icon={faHeart} /></Link>
            </li>
            <li className="nav-item me-3 position-relative"> {/* Added position-relative for badge positioning */}
              <Link className="nav-link" to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalCartQuantity > 0 && (
                  <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                    {totalCartQuantity}
                    {/* <span className="visually-hidden">items in cart</span> */}
                  </span>
                )}
              </Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item"> {/* Changed from me-2 to no margin, Profile text added */}
                  <Link className="nav-link" to="/profile" title="Profile">
                    <FontAwesomeIcon icon={faUser} className="me-1" /> Profile
                  </Link>
                </li>
                <li className="nav-item ms-2"> {/* Added ms-2 for spacing from Profile */}
                  <a href="#" className="nav-link" onClick={handleLogout} title="Logout">
                    {/* <FontAwesomeIcon icon={faSignOutAlt} /> Optional: Add logout icon */}
                     Logout
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login" title="Login">
                  <FontAwesomeIcon icon={faUser} className="me-1" /> Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

NavigationBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  totalCartQuantity: PropTypes.number.isRequired, // Add prop type
};

NavigationBar.defaultProps = {
  // isAuthenticated and logout are already set in Layout.defaultProps,
  // but it's fine to have them here too if NavigationBar is ever used standalone.
  isAuthenticated: false, 
  logout: () => {},
  totalCartQuantity: 0,
};

export default NavigationBar;
