import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header d-flex">
      <div className="logo">
        <img src={logo} alt={logo.png} />
      </div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <button
            className="nav-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="hamburger"></span>
          </button>
          <div className=" navbar-collapse" id="navbarTogglerDemo03">
            <ul className="nav__list me-auto mb-2 mb-lg-0">
              <li className="nav__item">
                <Link to="/" className="nav__link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/about" className="nav__link">
                  About
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/menu" className="nav__link">
                  Menu
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/cart" className="nav__link">
                  Cart
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/training" className="nav__link">
                  Training
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
