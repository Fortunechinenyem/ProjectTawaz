import React from "react";
import logoh from "./images/meat.jpg";
import logoi from "./images/riceshrimp.jpg";
import logoj from "./images/doughnut.jpg";

const Flash = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={logoh} className="" alt="logoh" />
        </div>
        <div className="carousel-item">
          <img src={logoi} className="" alt="logoi" />
        </div>
        <div className="carousel-item">
          <img src={logoj} className="" alt="logoj" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Flash;
