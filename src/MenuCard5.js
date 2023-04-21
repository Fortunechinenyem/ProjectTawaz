import React from "react";
import logo from "../src/images/cakee.jpg";
import { Link } from "react-router-dom";
function Menucard5() {
  return (
    <div className="col-sm-6 col-md-4  mb-4 ">
      <div className="card  w-75 mx-auto  shadow text-center">
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
          to="/decoratedcakes"
          className="btn btn-warning dropdown-toggle"
          role="button"
          id="#decoratedcakes"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Decorated Cakes
        </Link>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>6" high with Butter cream decor N8,000</li>
          <li>6" 6" high decorated with fondant N10,000</li>
          <li>6" 8" high decorated with whipped cream N15,000</li>
          <li>8" triple flavored decorated with buttercream N18,000</li>
          <li>8" Multiple layers decorated with fondant N20,500</li>
          <li>8" Multiple layers decorated with whipped cream N23,000</li>
          <li>10" 8" High with butter cream decoration N20,500</li>
          <li>10" 8" high with fondant decoration N25,500</li>
          <li>10" 8" high with whipped cream decoration N30,000</li>
          <li>12" Multiple layers decorated with butter cream N30,000</li>
          <li>12" Multiple layers decorated with fondant N35,000</li>
          <li>
            12" multiple flavored layers decorated with whipped cream N40,000
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menucard5;
