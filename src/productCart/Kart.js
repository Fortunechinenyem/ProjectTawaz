import React from "react";
import { useCart } from "react-use-cart";

const Kart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1>Your Cart is empty</h1>;
  return (
    <section className="container w-75 mx-auto">
      <div className=" ">
        <div className="col-12">
          <h4>
            Cart ({totalUniqueItems}) Total Items:({totalItems})
          </h4>
          <div className="card mb-4 ">
            {items.map((item, index) => {
              return (
                <div key={index} className=" card-body w-75 mx-auto">
                  <div>
                    <img src={item.img} alt={"#"} style={{ height: "4rem" }} />
                  </div>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <p>Quantity ({item.quantity})</p>
                  <div>
                    <button
                      className="btn btn-warning ms-2 mb-3"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-warning ms-2 mb-3"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-75 ms-auto">
          <h4>Total Price: N {cartTotal}</h4>
        </div>
        <div className="w-75 ms-auto">
          <button className="btn btn-danger m-2 " onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-warning">Payment</button>
        </div>
      </div>
    </section>
  );
};

export default Kart;
