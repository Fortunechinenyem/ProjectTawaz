import React from "react";

import Heroimage from "./images/hero10.png";

function Hero() {
  return (
    <>
      <div className="homehero mb-5 mt-5 d-flex w-75 mx-auto">
        <div className="w-25">
          <h2 className="herotext1">Tawaz</h2>
          <h4>
            Great <span className="herotext">Food, </span>Great
            <span className="herotext"> Taste!</span>
          </h4>
        </div>
        <div className="w-75">
          <img src={Heroimage} alt={Hero.png} />
        </div>
      </div>
    </>
  );
}

export default Hero;
