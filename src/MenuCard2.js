import React from "react";
import logo from "../src/images/cake2.jpg";
import { Link } from "react-router-dom";
function Menucard2() {
  return (
    <div className="col-sm-6 col-md-4  mb-4 ">
      <div className="card  w-75 mx-auto  shadow">
        <img
          src={logo}
          className="card-img"
          alt=""
          height="200px"
          style={{ objectFit: "cover" }}
        />
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

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>Plain Vanilla cake</li>
          <li>Hot milk vanilla cake</li>
          <li>Marble Vanilla cake</li>
          <li>Fruity vanilla cake</li>
          <li>Chocolate cake </li>
          <li>Red velvet cake</li>
          <li>Lemon cake</li>
          <li>Carrot cake</li>
          <li>Banana cake</li>
          <li>Coconut cake</li>
          <li>Strawberry cake </li>
          <li>Cheese cake</li>
          <li>cookies& cream cake</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard2;
