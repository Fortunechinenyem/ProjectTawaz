import React from "react";
import Logol from "./images/carthero.jpg";

const CardBody = () => {
  return (
    <div className="card">
      <img src={Logol} alt={Logol} />
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
    </div>
  );
};

export default CardBody;
