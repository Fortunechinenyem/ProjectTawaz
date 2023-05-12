import React from "react";

import Db from "./DB.json";

const HomeMenu1 = (props) => {
  const { id, name, image } = props;
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
        <h5 className="card-title">{name}</h5>
        {/* <p className="card-text">{amount}</p> */}
      </div>
    </div>
  );
};

const BestDealsMenu = () => {
  return (
    <>
      <div className="container row g-3 w-75 mx-auto">
        {Db.bestdeals.map((menuItem) => {
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

export default BestDealsMenu;
