import React from "react";
import { Link } from "react-router-dom";

function CategoryBar() {
  return (
    <div>
      <h2 className="mt-4 mb-4 text-center">Best Served</h2>
      <div className=" mt-3 mb-5 social-list" id="categoryBar">
        <div className="d-flex flex-wrap">
          <Link to="/menu">
            <button
              type="button"
              className="btn btn-success rounded-pill btn-sm m-2 mx-1"
            >
              Small Chops
            </button>
          </Link>
          <Link to="/menu">
            <button
              type="button"
              className="btn btn-warning rounded-pill btn-sm m-2 mx-1"
            >
              Northern Delight
            </button>
          </Link>
          <Link to="/menu">
            <button
              type="button"
              className="btn btn-danger rounded-pill btn-sm m-2 mx-1"
            >
              Drinks
            </button>
          </Link>

          <Link to="/menu">
            <button
              type="button"
              className="btn btn-dark btn-sm rounded-pill disabled m-2 mx-1"
            >
              Cakes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(CategoryBar);
