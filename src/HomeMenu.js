import React from "react";
import { Link } from "react-router-dom";
import Db from "./DB.json";

const HomeMenu1 = (props) => {
  const { id, title, text, image } = props;
  return (
    <div key={id} className="card">
      <img src={image} alt="dough.jpg" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link to="/menu" className="btn btn-warning">
          Order
        </Link>
      </div>
    </div>
  );
};

const HomeMenu = () => {
  return (
    <>
      <div className="container row g-3">
        {Db.menu.map((menuItem) => {
          return (
            <div className="col-sm-6 col-md-3">
              <HomeMenu1 {...menuItem}></HomeMenu1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeMenu;
