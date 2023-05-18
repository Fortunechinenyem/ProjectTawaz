import React from "react";
import logo from "../src/images/cakee.jpg";
import { Link } from "react-router-dom";

function Menucard5() {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card w-75 mx-auto shadow text-center">
        <img
          src={logo}
          className="card-img"
          alt="Cake"
          height="200px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="dropdown text-center">
        <Link
          to="/decoratedcakes"
          className="btn btn-warning dropdown-toggle"
          role="button"
          id="#decoratedcakes"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Decorated Cakes
        </Link>

        <ul
          className="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownMenuLink"
        >
          <li className="dropdown-item">6" high with Butter cream decor</li>
          <li className="dropdown-item">6" 6" high decorated with fondant</li>
          <li className="dropdown-item">
            6" 8" high decorated with whipped cream
          </li>
          <li className="dropdown-item">
            8" triple flavored decorated with buttercream
          </li>
          <li className="dropdown-item">
            8" Multiple layers decorated with fondant
          </li>
          <li className="dropdown-item">
            8" Multiple layers decorated with whipped cream
          </li>
          <li className="dropdown-item">
            10" 8" High with butter cream decoration
          </li>
          <li className="dropdown-item">10" 8" high with fondant decoration</li>
          <li className="dropdown-item">
            10" 8" high with whipped cream decoration
          </li>
          <li className="dropdown-item">
            12" Multiple layers decorated with butter cream
          </li>
          <li className="dropdown-item">
            12" Multiple layers decorated with fondant
          </li>
          <li className="dropdown-item">
            12" multiple flavored layers decorated with whipped cream
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard5;
