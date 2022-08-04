import React from "react";
import  logof from "./images/flyer.png"

const Flash =() => {
    return(
<div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={logof} className="flashimg" alt="logof" />
    </div>
    
  </div>
</div>
    )
};

export default Flash;