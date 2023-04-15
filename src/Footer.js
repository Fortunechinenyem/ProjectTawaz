import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./images/tawazlogo (2).jpg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <article className="card">
      <footer className="footer w-100 mx-auto  ">
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt={logo.svg} />
        </div>
        <div className="d-flex row container g-3 mx-auto mt-2">
          <div className="d-flex row col-md-4">
            <Link to="/menu">
              <button
                type="button"
                className="btn btn-outline-info rounded-pill btn-sm m-2 mx-1"
              >
                Menu
              </button>
            </Link>

            <Link to="/menu">
              <button
                type="button"
                className="btn btn-outline-warning rounded-pill btn-sm m-2 mx-1"
              >
                Best Deals
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-light rounded-pill btn-sm m-2 mx-1"
              >
                Home
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="btn btn-outline-success rounded-pill btn-sm m-2 mx-1"
              >
                About Us
              </button>
            </Link>
          </div>
          <div className="col-md-4">
            <p>Help</p>
            <p>Privacy</p>
            <p>Terms and Condition</p>
          </div>
          <div className="col-md-4">
            <p>Contact Us</p>
            <p>08071715005</p>
            <p>tawaztastytreats@gmail.com</p>
            <ul className="social-list">
              <li className="social-list__item">
                <a className="social-list__link" href="https://twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a className="social-list__link" href="https://wa.link/o688gi">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li className="social-list__item">
                <a className="social-list__link" href="https://facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="col-md mb-0 mt-5 text-light text-center">
          &copy; 2023 Fortune.dev. All rights reserved.
        </p>
      </footer>
    </article>
  );
};

export default Footer;
