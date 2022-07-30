import React from "react";
import logo3 from "./images/cake1.jpg";
import logo4 from "./images/dough.jpg";
import logo5 from "./images/chops1.jpg";
import logo6 from "./images/chops2.jpg";

 
function Menu() {
  return (
    <div className="menu w-100 mx-auto">
      <div className="card col-md-3 col-sm-6 w-25">
         <img src={logo3} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">menu 1</p>
        </div>
        </div>
        <div className="card col-md-3 col-sm-6 w-25">
         <img src={logo4} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Menu 2</p>
        </div>
        </div>
        <div className="card col-md-3 col-sm-12 w-25">
         <img src={logo5} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Menu 3</p>
        </div>
        </div>
        <div className="card col-md-3 col-sm-12 w-25">
         <img src={logo6} className="" alt="logo" />
        <div className="card-body">
        <p className="card-text">Menu 4</p>
        </div>
        </div>
    </div>
  );
}


 export default Menu;