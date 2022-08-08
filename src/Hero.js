import React from "react";
import background from "./images/hero1.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "80vh",
        backgroundPosition: "center",
      }}
    >
      <div className="herotext">
        <h2 className="mb-4">Good Food, Tasty Food!</h2>
        <Link to="/menu" className="btn btn-warning">
          VIEW MENU
        </Link>
      </div>
    </div>
  );
}

export default Hero;
