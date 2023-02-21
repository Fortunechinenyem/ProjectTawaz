import React from "react";
import logo from "../src/images/cake3.webp";
function Menucard4() {
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
        <div className="dropdown">
          <a
            className="btn btn-warning dropdown-toggle"
            href="/menu"
            role="button"
            id="#cakeloaves"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Cake loaves
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <h5>Small sized foil cake (all flavours)-N1000</h5>
            <hr></hr>
            <h5>medium sized foil cake</h5>
            <li>vanilla -N1500</li>
            <li>red velvet -N2000</li>
            <li>chocolate -N2000</li>
            <li>cookies and cream -N2000</li>
            <li>coconut -N1800</li>
            <li>banana -N1800</li>
            <li>fruitcake -N2000</li>
            <hr></hr>
            <h5>8" cake loaves</h5>
            <li>vanilla -N3000</li>
            <li>chocolate -N3500</li>
            <li>cookies and cream -N3500</li>
            <li>coconut -N3200</li>
            <li>others - N3000</li>
            <li>sugar free vanilla cake loaf -N2500</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menucard4;
