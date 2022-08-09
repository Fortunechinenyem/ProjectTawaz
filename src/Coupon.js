import React from "react";
import { Link } from "react-router-dom";

const Coupon = () => {
  return (
    <div className="w-25 mx-auto">
      <Link to="/menu" className="btn btn-warning">
        Apply Coupon
      </Link>
    </div>
  );
};

export default Coupon;
