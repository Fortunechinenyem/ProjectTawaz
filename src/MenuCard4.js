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
            Small sized foil cake (all flavours) - N1000
          </h5>
          <hr className="dropdown-divider" />
          <h5 className="dropdown-header">Medium sized foil cake</h5>
          <li className="dropdown-item">Vanilla - N1500</li>
          <li className="dropdown-item">Red velvet - N2000</li>
          <li className="dropdown-item">Chocolate - N2000</li>
          <li className="dropdown-item">Cookies and cream - N2000</li>
          <li className="dropdown-item">Coconut - N1800</li>
          <li className="dropdown-item">Banana - N1800</li>
          <li className="dropdown-item">Fruitcake - N2000</li>
          <hr className="dropdown-divider" />
          <h5 className="dropdown-header">8" cake loaves</h5>
          <li className="dropdown-item">Vanilla - N3000</li>
          <li className="dropdown-item">Chocolate - N3500</li>
          <li className="dropdown-item">Cookies and cream - N3500</li>
          <li className="dropdown-item">Coconut - N3200</li>
          <li className="dropdown-item">Others - N3000</li>
          <li className="dropdown-item">
            Sugar-free vanilla cake loaf - N2500
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard4;
