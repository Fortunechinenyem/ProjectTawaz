import React from "react";
import { IoFastFood } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";

function HomeInfoCard() {
  return (
    <div className="mt-4 mb-4">
      <h2 className="text-center">Why Us?</h2>
      <div className="d-flex row container g-3 mx-auto mt-4">
        <div
          className="card text-center col-md-4"
          style={{ backgroundColor: "#E8DBB7" }}
        >
          <p>
            Get Best Food <IoFastFood />{" "}
          </p>
        </div>
        <div
          className="card  text-center col-md-4"
          style={{ backgroundColor: "#E8DBB7" }}
        >
          <p>
            Extra Fast Delivery <MdDeliveryDining />
          </p>
        </div>
        <div
          className="card  text-center col-md-4"
          style={{ backgroundColor: "#E8DBB7" }}
        >
          <p>
            Best Quality <BsFillCheckCircleFill />
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeInfoCard;
