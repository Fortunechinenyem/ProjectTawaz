import React from "react";
import logoh from './images/tawazhero.jpg';

function Hero() {
  return (
    <div className="d-flex g-5 mb-3 containerh">
        <div className="herotext1 w-25">
            <h2 className="mb-4">Enjoy Delicious Food at affordable prices!</h2>
            <a href="mailto:sarahtawanyida@gmail.com" className="btn btn-warning">View Menu</a>
        </div>
      <div className="heroimg w-75">
        <img src={logoh} className="" alt="logoh" />
    </div>
    </div>
    
  );
}

export default Hero;
