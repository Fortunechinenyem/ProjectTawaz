import React from "react";
import logo3 from "./images/cake1.jpg";
import logo4 from "./images/dough.jpg";
import logo5 from "./images/chops1.jpg";
import logo6 from "./images/chops2.jpg";

 
function Menu() {
  return (
    <div className="w-100 d-flex">
      <div className="card col-md-3 col-sm-6">
         <img src={logo3} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card col-md-3 col-sm-6">
         <img src={logo4} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card col-md-3 col-sm-6">
         <img src={logo5} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card col-md-3 col-sm-6">
         <img src={logo6} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    </div>
    
        
        
      
    
  );
}


 export default Menu;