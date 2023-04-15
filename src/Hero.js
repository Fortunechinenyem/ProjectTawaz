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

function Hero() {
  useEffect(() => {
    const header = document.querySelector(".homehero h1");
    const intervalId = setInterval(() => {
      header.style.color = getRandomColor();
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="homehero">
      <div className="header">
        <div className="">
          <h1>Tawaz Tasty Treats</h1>
          <h3 className="" style={{ color: "#FFF8EC" }}>
            Chop life, it's meant to be chopped!!
          </h3>
          <div className="d-flex  row g-2 w-50 mx-auto">
            <Link to="/menu" className="btn btn-light mt-4">
              Explore More!
            </Link>
            <a href="https://wa.link/o688gi" className="btn btn-warning">
              Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
