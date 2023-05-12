import React from "react";
import logo from "../src/images/cake5.jpg";
import { Link } from "react-router-dom";

function Menucard3() {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card w-75 mx-auto shadow">
        <img src={logo} className="card-img" alt="Cake" />
      </div>
      <div className="dropdown text-center">
        <Link
          to="/icing"
          className="btn btn-warning dropdown-toggle"
          role="button"
          id="#icing"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Icing/Frosting
        </Link>

        <ul
          className="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownMenuLink"
        >
          <li className="dropdown-item">Butter cream</li>
          <li className="dropdown-item">Fondant</li>
          <li className="dropdown-item">Whipped cream</li>
          <li className="dropdown-item">Ganache</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard3;
