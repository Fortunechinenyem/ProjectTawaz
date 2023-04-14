import React from "react";
import logo from "../src/images/drink.jpg";
function Menucard6() {
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
        <a
          className="btn btn-warning dropdown-toggle"
          href="/menu"
          role="button"
          id="#drinks"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Drinks
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>Kunun Zaki -N600(75cl) N300(45cl)</li>
          <li>Tiger nut milk - N1200(75cl) N600(45cl)</li>
          <li>Zobo - N600(75cl) N300(45cl)</li>
          <li>fresh fruit juices -N1000 (50cl)</li>
          <li>smoothies/parfaits </li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard6;
