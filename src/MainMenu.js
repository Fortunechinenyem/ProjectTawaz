import React from "react";
import { Link } from "react-router-dom";
import Db from "./DB.json";

const HomeMenu2 = (props) => {
  const { id, title, amount, image } = props;
  return (
    <div key={id} className="card">
      <img src={image} alt="swallow.jpg" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{amount}</p>
        <Link to="/cart" className="btn btn-warning">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

const MainMenu = () => {
  return (
    <>
      <div className="container row g-3">
        {Db.mainmenu.map((menuItem) => {
          return (
            <div className="col-sm-6 col-md-3">
              <HomeMenu2 {...menuItem}></HomeMenu2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainMenu;
