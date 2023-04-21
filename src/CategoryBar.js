import React from "react";
import { Link } from "react-router-dom";

function CategoryBar() {
  return (
    <div className="text-center mx-auto">
      <h2 className="mt-4 mb-4 text-center">Best Served</h2>
      <p className="text-center">Browse our Menu</p>
      <div className=" mt-3 mb-5 " id="categoryBar">
        <div className="d-flex flex-wrap g-2 col-md text-center mx-auto">
          <Link to="/smallchops" className="button col-md">
            Small Chops
          </Link>
          <Link to="/northerndelight" className="button col-md">
            Northern Delight
          </Link>
          <Link to="/drinks" className="button  col-md">
            Drinks
          </Link>

          <Link to="/drinks" className="button  col-md">
            Cakes
          </Link>
          <Link to="/dessert" className="button col-md">
            Dessert
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
