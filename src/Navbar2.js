import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";
import logo from "./images/tawazlogo (2).jpg";

import MenuPrompt from "./MenuPrompt";

const LogoWrapper = styled.div`
  margin-right: 5rem;
`;

const Logo = () => {
  const navigate = useNavigate();

  return (
    <LogoWrapper className="logo" onClick={() => navigate("/")}>
      <img src={logo} alt={logo.svg} />
    </LogoWrapper>
  );
};
const NavBar2 = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Logo />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/about">Who We Are</Nav.Link>
          <Nav.Link to="/menu">Menu</Nav.Link>
          <Nav.Link to="/training">Training</Nav.Link>
          <Nav.Link to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar2;
