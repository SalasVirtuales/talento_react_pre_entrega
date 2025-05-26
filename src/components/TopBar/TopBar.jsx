import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar bg-light py-1 text-center text-md-start">
      <div className="container-fluid px-md-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-1 mb-md-0">
            <small>Envío gratis a partir de $ 159.999</small>
          </div>
          <div className="col-md-4 mb-1 mb-md-0 text-md-center">
            <small>3 y 6 Cuotas Sin Interés con monto mínimo</small>
          </div>
          <div className="col-md-4 text-md-end">
            {/* Assuming these are placeholders for now, or could be actual routes if defined */}
            <small className="me-3"><Link to="#" className="text-dark text-decoration-none">SEGUÍ TU ENVÍO</Link></small>
            <small className="me-3"><Link to="#" className="text-dark text-decoration-none">TIENDAS</Link></small>
            <small><Link to="#" className="text-dark text-decoration-none">DEVOLUCIONES</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
