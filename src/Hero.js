import React from "react";
import background from "./images/meat.jpg";
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
        <h1 className="mb-4">Good Food, Tasty Food!</h1>
        <Link to="/menu" className="btn btn-warning">
          VIEW MENU
        </Link>
      </div>
    </div>
  );
}

export default Hero;
