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
    <section className="container w-75">
      <div className="row justify-content-center">
        <div className="col-12">
          <h4>
            Cart ({totalUniqueItems}) Total Items:({totalItems})
          </h4>
          <table className="table table-warning table-hover mb-4 w-100 mx-auto">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        alt={"#"}
                        style={{ height: "4rem" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
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
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h4>Total Price: N {cartTotal}</h4>
        </div>
        <div className="col-auto">
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
