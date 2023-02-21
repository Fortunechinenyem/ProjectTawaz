import React from "react";
import logo from "../src/images/cake5.jpg";
function Menucard3() {
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
            id="#icing"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Icing/Frosting
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>Butter cream</li>
            <li>Fondant</li>
            <li>Whipped cream</li>
            <li>Ganache</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menucard3;
