import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-sm-6 col-md-6 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img img-fluid" alt="" />
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
};

export default Itemcard;
