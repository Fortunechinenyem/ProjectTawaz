import React from "react";
import { Link } from "react-router-dom";
import Db from "./DB.json";

const CardBody = (props) => {
  const { id, title, text, image } = props;
  return (
    <div key={id} className="card mb-3 w-75 mx-auto">
      <div className="container row g-0">
        <div className="col-md-4 col-sm-6 ">
          <img
            src={image}
            alt="burger.jpg"
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8 col-sm-6">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text} </p>
            <Link to="/cart" className="btn btn-warning">
              -
            </Link>
            <Link to="/cart" className="btn btn-warning">
              +
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <>
      <div classNameName="container row g-3">
        {Db.cart.map((menuItem) => {
          return (
            <div classNameName="col-sm-12 col-md-12">
              <CardBody {...menuItem}></CardBody>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
