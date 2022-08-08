import React from "react";
import background from './images/hero1.jpg';

function Hero() {
  return (
    <div style={{ backgroundImage: `url(${background})`, height: '80vh', backgroundPosition: 'center', 
 }}>
      <div className="herotext">
        <h2 className="mb-4">Good Food, Tasty Food!</h2>
        <a href="mailto:sarahtawanyida@gmail.com" className="btn btn-warning">View Menu</a>
      </div>
       
    </div>
    

    
  );
}

export default Hero;
