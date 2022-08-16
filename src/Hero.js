import React from "react";
import Heroimage from "./images/herohome.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="">
      <div className="homehero mb-5 mt-5 mx-auto w-75">
        <div className="heroimage">
          <img src={Heroimage} alt={Hero.png} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
