import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector(".footer h1");
    const intervalId = setInterval(() => {
      footer.style.color = getRandomColor();
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <article className="card">
      <footer className="footer w-100 mx-auto animated-bg">
        <div className="">
          <h1>Tawaz Tasty Treats</h1>
        </div>
        <div>
          <h4>Contact Us</h4>
          <p>08071715005</p>
        </div>
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
        <div className="mt-3">
          <div className="d-flex container row mx-auto">
            <Link to="/menu">
              <button
                type="button"
                className="btn btn-outline-info rounded-pill btn-sm m-2 mx-1"
              >
                Menu
              </button>
            </Link>
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-warning rounded-pill btn-sm m-2 mx-1"
              >
                Hours &amp; Location
              </button>
            </Link>

            <Link to="/training">
              <button
                type="button"
                className="btn btn-outline-light rounded-pill btn-sm m-2 mx-1"
              >
                Signup
              </button>
            </Link>
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
