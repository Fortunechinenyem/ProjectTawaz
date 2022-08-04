import React from "react";
import logo3 from "./images/cake1.jpg";
import logo4 from "./images/dough.jpg";
import logo5 from "./images/chops1.jpg";
import logo6 from "./images/chops2.jpg";

 
function FeaturedList() {
  return (
    <div className="feature w-100 ms-auto mb-3">
    <div className="card">
  <h5 className="card-header">Star Menu</h5>
  <div className="card-body">
    <h5 className="card-title">Northern Delight!</h5>
    <p className="card-text">We have a Variety of Northern Delicacies, customised specially for you.</p>
    <a href="#" className="btn btn-warning">Order</a>
  </div>
</div>
    </div>
    
  );
}


 export default FeaturedList;

