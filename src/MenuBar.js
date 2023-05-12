import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d8a31a;
  color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c48915;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

function MenuBar() {
  return (
    <div className="text-center mx-auto">
      <CategoryBar>
        <Button to="/menu">Full Menu</Button>
        <Button to="/northerndelight">Northern Delight</Button>
        <Button to="/drinks">Drinks</Button>
        <Button to="/cakes">Cakes</Button>
        <Button to="/smallchops">Small Chops</Button>
      </CategoryBar>
    </div>
  );
}

export default MenuBar;
