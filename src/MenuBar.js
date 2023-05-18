import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin: 0 10px;
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
      <MenuItem to="/cakes">Cakes</MenuItem>
      <MenuItem to="/smallchops">Small Chops</MenuItem>
    </MenuContainer>
  );
}

export default MenuBar;
