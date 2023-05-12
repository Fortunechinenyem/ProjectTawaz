import React from "react";

import Db from "./DB.json";

const HomeMenu1 = (props) => {
  const { id, title, text, image } = props;
  return (
    <div key={id} className="card shadow">
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
            <div className="col-sm-6 col-md-6" key={menuItem.id}>
              <HomeMenu1 {...menuItem} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DecoratedCakesMenu;
