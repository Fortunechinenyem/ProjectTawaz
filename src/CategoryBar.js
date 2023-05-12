import React from "react";
import { Link } from "react-router-dom";

function CategoryBar() {
  return (
    <div className="text-center mx-auto animated fadeIn categorybar">
      <h2 className="mt-4 mb-4 text-center">Best Served</h2>
      <p className="text-center">Browse our Menu</p>
      <div className="mt-3 mb-5" id="categoryBar">
        <div className="text-center mx-auto">
          <Link to="/menu" className="button button-primary">
            Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
