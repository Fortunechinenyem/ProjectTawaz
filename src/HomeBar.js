import React from "react";
import logo from "./images/ta (25).jpg";
import { Link } from "react-router-dom";

const HomeBar = () => {
  return (
    <section className="mt-5">
      <div className="container mx-auto d-flex justify-content-center align-items-center home-bar-container shadow">
        <div className="mr-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="pt-3">
          <h2 className="mb-4">Support good food and local business.</h2>
          <Link to="/menu">
            <button
              type="button"
              className="button animate__animated animate__fadeIn"
            >
              Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBar;
