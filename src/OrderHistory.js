import React from "react";

const OrderHistory = () => {
  return (
    <section>
      <div className="w-75 mx-auto text-center">
        <h3>Order History</h3>
      </div>
      <table className="table w-75 mx-auto mt-3 mb-3">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Order</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default OrderHistory;
