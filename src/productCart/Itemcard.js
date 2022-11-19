import React from "react";
import { useCart } from "react-use-cart";

function Itemcard(props) {
  const { addItem } = useCart();
  return (
    <div className="col-sm-6 col-md-4  mb-4 ">
      <div className="card  w-75 mx-auto  shadow">
        <img
          src={props.img}
          className="card-img"
          alt=""
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
          <p>N{props.price}</p>
          <button
            className="btn btn-warning"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Itemcard;
