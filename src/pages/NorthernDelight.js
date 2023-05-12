import React from "react";
import { Link } from "react-router-dom";

import NorthernDelightMenu from "../NorthernDelightMenu";
import MenuPrompt from "../MenuPrompt";

const NorthernDelight = () => {
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
        <NorthernDelightMenu />
        <MenuPrompt />
      </div>
    </div>
  );
};

export default NorthernDelight;
