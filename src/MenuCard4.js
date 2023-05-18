import React from "react";
import logo from "../src/images/cake3.webp";
import { Link } from "react-router-dom";

function Menucard4() {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card w-75 mx-auto shadow">
        <img src={logo} className="card-img" alt="Cake" />
      </div>
      <div className="dropdown text-center">
        <Link
          to="/cakeloaves"
          className="btn btn-warning dropdown-toggle"
          role="button"
          id="#cakeloaves"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Cake loaves
        </Link>

        <ul
          className="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownMenuLink"
        >
          <h5 className="dropdown-header">
            Small sized foil cake (all flavours)
          </h5>
          <hr className="dropdown-divider" />
          <h5 className="dropdown-header">Medium sized foil cake</h5>
          <li className="dropdown-item">Vanilla </li>
          <li className="dropdown-item">Red velvet </li>
          <li className="dropdown-item">Chocolate </li>
          <li className="dropdown-item">Cookies and cream </li>
          <li className="dropdown-item">Coconut </li>
          <li className="dropdown-item">Banana </li>
          <li className="dropdown-item">Fruitcake </li>
          <hr className="dropdown-divider" />
          <h5 className="dropdown-header">8" cake loaves</h5>
          <li className="dropdown-item">Vanilla </li>
          <li className="dropdown-item">Chocolate </li>
          <li className="dropdown-item">Cookies and cream </li>
          <li className="dropdown-item">Coconut </li>
          <li className="dropdown-item">Others </li>
          <li className="dropdown-item">Sugar-free vanilla cake loaf</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard4;
