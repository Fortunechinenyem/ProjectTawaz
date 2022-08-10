import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section>
      <h2 className="w-25  mb-3 mt-3 bg-warning text-center mx-auto">
        Services
      </h2>
      <div className="container w-75 mx-auto g-3">
        <div className="card text-dark bg-light mb-3 col-sm-12">
          <div className="card-body">
            <h5 className="card-title">Indoor Catering</h5>
            <p className="card-text">
              We provide variety of meals that can be delivered to your
              doorstep.
            </p>
          </div>
        </div>
        <div className="card text-dark bg-light mb-3 col-sm-12 ">
          <div className="card-body">
            <h5 className="card-title">Outdoor Catering Services</h5>
            <p className="card-text">
              We can cater for your events treating your guests to well
              prepared, sumptious meals.
            </p>
          </div>
        </div>
        <div className="card text-dark bg-light mb-3 col-sm-12">
          <div className="card-body">
            <h5 className="card-title">Training School</h5>
            <p className="card-text">
              We provide hands on cullinary training to students who will like
              to improve their skills.
            </p>
          </div>
        </div>
        <Link to="/services" className="btn btn-warning">
          View More
        </Link>
      </div>
    </section>
  );
};

export default Services;
