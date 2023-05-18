import React from "react";
import Db from "./DB.json";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  height: 300px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h5`
  margin-bottom: 0;
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BestDealsMenu = () => {
  return (
    <div className="container  g-3 w-75 mx-auto">
      <CardContainer>
        {" "}
        {Db.bestdeals.map((menuItem) => (
          <div className="col-sm-6 col-md-6 " key={menuItem.id}>
            <Card>
              <CardImage
                src={menuItem.image}
                alt="dough.jpg"
                className="card-img"
              />
              <CardBody>
                <CardTitle>{menuItem.name}</CardTitle>
              </CardBody>
            </Card>
          </div>
        ))}
      </CardContainer>
    </div>
  );
};

export default BestDealsMenu;
