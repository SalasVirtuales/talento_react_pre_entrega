import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // For redirect after login
import PropTypes from 'prop-types';

function LoginPage({ login, isAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // Get redirect path or default to home

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent actual form submission
    // In a real app, you'd validate credentials here
    login(); // Call the mock login function from App.jsx
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true }); // Redirect to original destination or home
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email address (mock)</label>
          <input type="email" className="form-control" id="emailInput" placeholder="Enter any email" defaultValue="user@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">Password (mock)</label>
          <input type="password" className="form-control" id="passwordInput" placeholder="Enter any password" defaultValue="password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default LoginPage;
