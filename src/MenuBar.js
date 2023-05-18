import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin: 10px 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }
`;

function MenuBar() {
  return (
    <MenuContainer className="mt-7 mb-5">
      <MenuItem to="/northerndelight">Yummy Meals</MenuItem>
      <MenuItem to="/drinks">Drinks</MenuItem>
      <MenuItem to="/cakes">Cake Loaves</MenuItem>
      <MenuItem to="/smallchops">Small Chops</MenuItem>
      <MenuItem to="/decoratedcakes">Decorated Cakes</MenuItem>
    </MenuContainer>
  );
}

export default MenuBar;
