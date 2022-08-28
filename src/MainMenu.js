import React, { useState } from "react";

import Db from "./DB.json";

const MenuCart = (item, handleChange) => {
  const { id, title, price, image } = item;
  return (
    <div key={id} className="cards">
      <div className="image_box">
        <img src={image} alt="swallow.jpg" />
      </div>

      <div className="details">
        <p className="">{title}</p>
        <p className="">N{price}</p>
        <button onClick={() => handleChange(item)} className="btn btn-warning">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const MainMenu = () => {
  const { mainmenu, setMainmenu } = useState([]);
  const handleClick = (item) => {
    mainmenu.push(item);
  };
  return (
    <section>
      <div className="cart container row g-3 w-75 mx-auto">
        {Db.mainmenu.map((item) => {
          return (
            <div className="col-sm-6 col-md-3">
              <MenuCart key={item.id} {...item} handleClick={handleClick} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MainMenu;
