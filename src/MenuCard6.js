import React from "react";
import logo from "../src/images/drink.jpg";
import { Link } from "react-router-dom";

function Menucard6() {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card w-75 mx-auto shadow">
        <img
          src={logo}
          className="card-img"
          alt="Drink"
          height="200px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="dropdown text-center">
        <Link
          to="/drinks"
          className="btn btn-warning dropdown-toggle"
          role="button"
          id="#drinks"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Drinks
        </Link>

        <ul
          className="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownMenuLink"
        >
          <li className="dropdown-item">
            Kunun Zaki - N600 (75cl) N300 (45cl)
          </li>
          <li className="dropdown-item">
            Tiger nut milk - N1200 (75cl) N600 (45cl)
          </li>
          <li className="dropdown-item">Zobo - N600 (75cl) N300 (45cl)</li>
          <li className="dropdown-item">Fresh fruit juices - N1000 (50cl)</li>
          <li className="dropdown-item">Smoothies/Parfaits</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard6;
