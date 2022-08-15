import React from "react";
import Heroimage from "./images/figma.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="">
      <div className="homehero mb-5 mx-auto">
        <div className="heroimage">
          <img src={Heroimage} alt={Hero.png} />
        </div>

        <Link to="/menu" className="btn btn-warning  mt-3mb-3">
          VIEW MENU
        </Link>
      </div>
    </div>
  );
}

export default Hero;
