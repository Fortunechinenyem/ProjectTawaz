import React from "react";
import logoh from './images/tawazhero.jpg';

function Hero() {
  return (
    <div className="d-flex">
        <div className="w-25">
            <h1>Enjoy Delicious Food at affordable prices</h1>
            <a href="mailto:sarahtawanyida@gmail.com" className="btn btn-warning">View Menu</a>
        </div>
      <div className="heroimg w-75">
        <img src={logoh} className="" alt="logoh" />
    </div>
    </div>
    
  );
}

export default Hero;
