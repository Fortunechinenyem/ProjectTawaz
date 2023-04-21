import React from "react";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div className="text-center mx-auto">
      <div className=" mt-3 mb-5 " id="categoryBar">
        <div className="d-flex flex-wrap g-2 col-md text-center mx-auto">
          <Link to="/menu" className="btn btn-success col-md">
            Full Menu
          </Link>
          <Link to="/northerndelight" className="btn btn-info col-md">
            Northern Delight
          </Link>
          <Link to="/drinks" className="btn btn-primary  col-md">
            Drinks
          </Link>

          <Link to="/cakes" className="btn btn-danger  col-md">
            Cakes
          </Link>
          <Link to="/smallchops" className="btn btn-secondary col-md">
            Small Chops
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
