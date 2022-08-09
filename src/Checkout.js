import React from "react";
import { Link } from "react-router-dom";
import Db from "./DB.json";

const Checkout1 = (props) => {
  const { id, title, text, text1 } = props;
  return (
    <div key={id} className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{text1}</p>
        <Link to="/cart" className="btn btn-warning">
          Confirm Order
        </Link>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <>
      <div className="container w-75 mx-auto row g-3 mt-3 mb-3">
        {Db.checkout.map((menuItem) => {
          return (
            <div className="col-sm-12 col-md-12">
              <Checkout1 {...menuItem}></Checkout1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Checkout;
