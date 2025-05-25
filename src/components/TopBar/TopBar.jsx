import React from 'react';
import './TopBar.css'; // We'll create this next

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
            <small className="me-3"><a href="#" className="text-dark text-decoration-none">SEGUÍ TU ENVÍO</a></small>
            <small className="me-3"><a href="#" className="text-dark text-decoration-none">TIENDAS</a></small>
            <small><a href="#" className="text-dark text-decoration-none">DEVOLUCIONES</a></small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
