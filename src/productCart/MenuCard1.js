import React from "react";
import logo from "../images/chops.jpg";
import { Link } from "react-router-dom";
function Menucard1() {
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
          className="btn btn-warning dropdown-toggle"
          to="/smallchops"
          role="button"
          id="#smallchops"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Small Chops /Snacks
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>Samosa</li>
          <li>masa sticks</li>
          <li>Spring roll (vegetables/chicken/beef)</li>
          <li>Puff-puff (plain/coconut/chocolatey)</li>
          <li>Buns (plain/lemony)</li>
          <li>Chin-chin</li>
          <li>Doughnut (plain/filled)</li>
          <li>Meat pies</li>
          <li>Fish pies</li>
          <li>Sausage roll</li>
          <li>Fish roll</li>
          <li>Egg roll</li>
          <li>Shawarma special</li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard1;
