import React from "react";
import MeatLogo from "./images/meat.jpg";
import HeroImage from "./images/heroimage.jpg";
import ChopsLogo from "./images/chops2.jpg";

const Flash = () => {
  return (
    <div className="flash">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={MeatLogo} className="flash-logo" alt="Meat Logo" />
          </div>
          <div className="carousel-item">
            <img src={HeroImage} className="flash-logo" alt="Hero Image" />
          </div>
          <div className="carousel-item">
            <img src={ChopsLogo} className="flash-logo" alt="Chops Logo" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Flash;
