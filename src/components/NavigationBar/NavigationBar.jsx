import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'; // Import Link, NavLink, and useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; // Import PropTypes
import './NavigationBar.css';

function NavigationBar({ isAuthenticated, logout }) { // Receive props
  const navigate = useNavigate(); // Hook for navigation

  // Helper for NavLink active style
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/'); // Navigate to home after logout
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
            <li className="nav-item me-3">
              <Link className="nav-link" to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item me-2"> {/* Added me-2 for spacing from logout */}
                  <Link className="nav-link" to="/profile" title="Profile">
                    <FontAwesomeIcon icon={faUser} className="me-1" /> Profile
                  </Link>
                </li>
                <li className="nav-item">
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

// Add PropTypes
NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
};

// Setting defaultProps for NavigationBar is good practice,
// though App.jsx is expected to always provide them.
NavigationBar.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

export default NavigationBar;
