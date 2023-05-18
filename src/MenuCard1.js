import React from "react";
import logo from "../src/images/chops2.jpg";
import { Link } from "react-router-dom";

function Menucard1() {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card w-75 mx-auto shadow">
        <img src={logo} className="card-img" alt="Small Chops" />
      </div>
      <div className="dropdown text-center">
        <Link
          className="btn btn-warning dropdown-toggle"
          to="/smallchops"
          role="button"
          id="#smallchops"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Small Chops / Snacks
        </Link>

        <ul
          className="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownMenuLink"
        >
          <li className="dropdown-item">Samosa</li>
          <li className="dropdown-item">Masa sticks</li>
          <li className="dropdown-item">
            Spring roll (vegetables/chicken/beef)
          </li>
          <li className="dropdown-item">
            Puff-puff (plain/coconut/chocolatey)
          </li>
          <li className="dropdown-item">Buns (plain/lemony)</li>
          <li className="dropdown-item">Chin-chin</li>
          <li className="dropdown-item">Doughnut (plain/filled)</li>
          <li className="dropdown-item">Meat pies</li>
          <li className="dropdown-item">Fish pies</li>
          <li className="dropdown-item">Sausage roll</li>
          <li className="dropdown-item">Fish roll</li>
          <li className="dropdown-item">Egg roll</li>
          <li className="dropdown-item">Shawarma special</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard1;
