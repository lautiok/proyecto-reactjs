import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './navbar-module.css';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'white' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="nav-v1">
            <div className="nav-v2">
              <img className="logo" src="/img/wolf-logo.png" alt="logo-nav" />
              <h1> Wolf</h1>
            </div>
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/masculino">
                Hombre
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/femenino">
                Mujer
              </Link>
            </li>
          </ul>
          <div className="c-product" style={{ marginRight: '20rem' }}>
            <CartWidget />
          </div>
        </div>
      </div>

    </nav>
  );
};
