import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".nav__link");

  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
  return (
    <div className="header d-flex">
      <div className="logo">
        <img src={logo} alt={logo.png} />
      </div>
      <button class="nav-toggle" aria-label="toggle navigation">
        <span class="hamburger"></span>
      </button>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <Link to="/" className="nav__link active" aria-current="page">
              Home
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/menu" className="nav__link">
              Menu
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/cart" className="nav__link">
              Cart
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/training" className="nav__link">
              Training
            </Link>
          </li>
          <li class="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
