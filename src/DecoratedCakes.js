import React from "react";
import { Link } from "react-router-dom";
import Db from "./DB.json";

const HomeMenu1 = (props) => {
  const { id, title, text, image } = props;
  return (
    <div key={id} className="card">
      <img
        src={image}
        alt="dough.jpg"
        className="card-img"
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <Link
          to="/menu"
          className="button "
          style={{ BackgroundColor: "#d8a31a" }}
        >
          Order
        </Link>
      </div>
    </div>
  );
};

const DecoratedCakesMenu = () => {
  return (
    <>
      <div className="container row g-3 w-75 mx-auto">
        {Db.decoratedcakes.map((menuItem) => {
          return (
            <div className="col-sm-6 col-md-6">
              <HomeMenu1 key={menuItem.id} {...menuItem}></HomeMenu1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DecoratedCakesMenu;
