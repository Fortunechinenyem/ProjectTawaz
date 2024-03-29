import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "./images/tawazlogo (2).jpg";
import styled from "styled-components";

const PhoneLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin: 10px 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }
`;

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
                className="btn btn-info rounded-pill btn-sm m-2 mx-1"
              >
                Menu
              </button>
            </Link>
            <Link to="/menu">
              <button
                type="button"
                className="btn btn-warning rounded-pill btn-sm m-2 mx-1"
              >
                Best Deals
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                className="btn btn-light rounded-pill btn-sm m-2 mx-1"
              >
                Home
              </button>
            </Link>
            <Link to="/about">
              <button
                type="button"
                className="btn btn-success rounded-pill btn-sm m-2 mx-1"
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

            <PhoneLink href="tel:+2348071715005">08071715005</PhoneLink>
            <p>tawastastytreats@gmail.com</p>
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
          &copy; 2023 #iyaintech. All rights reserved.
        </p>
      </footer>
    </article>
  );
};

export default Footer;
