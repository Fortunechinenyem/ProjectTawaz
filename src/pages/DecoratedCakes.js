import React from "react";
import { Link } from "react-router-dom";

import DecoratedCakesMenu from "../DecoratedCakes";
import MenuPrompt from "../MenuPrompt";
import Footer from "../Footer";

const DecoratedCakes = () => {
  return (
    <div className="">
      <div className="mb-4 mt-4 d-flex flex-wrap g-2 mx-auto text-center align-items-center ">
        <div className="col-md">
          <Link to="/menu" className="btn btn-success mx-auto">
            View Full Menu
          </Link>
        </div>
        <div className="col-md">
          <Link to="/" className="btn btn-dark  mx-auto  ">
            Return to Home Page
          </Link>
        </div>
      </div>
      <div>
        <DecoratedCakesMenu />
        <MenuPrompt />
      </div>
      <Footer />
    </div>
  );
};

export default DecoratedCakes;
