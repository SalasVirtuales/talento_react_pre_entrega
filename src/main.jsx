import React, { StrictMode } from 'react'; // Combined React and StrictMode import
import ReactDOM from 'react-dom/client'; // Keep this for createRoot
// import { createRoot } from 'react-dom/client'; // This is duplicative if ReactDOM.createRoot is used
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css'; // Keep Bootstrap CSS
import './index.css'; // Keep your global styles

// Use ReactDOM.createRoot as it's the more common pattern now
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode> {/* StrictMode was already there, good to keep */}
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
