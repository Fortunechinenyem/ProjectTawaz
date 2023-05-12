import React from "react";
import logo from "../src/images/cake2.jpg";
import { Link } from "react-router-dom";

function Menucard2() {
  return (
    <div className="col-sm-6 col-md-4 mb-4">
      <div className="card w-75 mx-auto shadow">
        <img src={logo} className="card-img" alt="Cakes" />
      </div>
      <div className="dropdown text-center">
        <Link
          to="/cakes"
          className="btn btn-warning dropdown-toggle"
          role="button"
          id="#cakes"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Variety of Cakes
        </Link>

        <ul
          className="dropdown-menu dropdown-menu-center"
          aria-labelledby="dropdownMenuLink"
        >
          <li className="dropdown-item">Plain Vanilla cake</li>
          <li className="dropdown-item">Hot milk vanilla cake</li>
          <li className="dropdown-item">Marble Vanilla cake</li>
          <li className="dropdown-item">Fruity vanilla cake</li>
          <li className="dropdown-item">Chocolate cake</li>
          <li className="dropdown-item">Red velvet cake</li>
          <li className="dropdown-item">Lemon cake</li>
          <li className="dropdown-item">Carrot cake</li>
          <li className="dropdown-item">Banana cake</li>
          <li className="dropdown-item">Coconut cake</li>
          <li className="dropdown-item">Strawberry cake</li>
          <li className="dropdown-item">Cheese cake</li>
          <li className="dropdown-item">Cookies &amp; cream cake</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard2;
