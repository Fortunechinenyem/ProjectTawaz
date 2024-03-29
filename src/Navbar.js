import React from "react";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";
import logo from "./images/tawazlogo (2).jpg";

import MenuPrompt from "./MenuPrompt";

const Nav = styled.nav`
  padding: 1.5rem 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const LinksWrapper = styled.ul`
  background-color: #d8a31a;
  padding: 0 5rem;
`;

const SearchNavWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
`;

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

const NavbarToggler = () => {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
};

const NavLinks = () => {
  return (
    <LinksWrapper className="navbar-nav mr-auto">
      <li className="nav-item active text-white">
        <Link className="nav-link" to="/">
          Home{" "}
          <span className="sr-only" style={{ color: "#FFF8EC" }}>
            (current)
          </span>
        </Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/about" style={{ color: "#FFF8EC" }}>
          Who We Are
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/menu" style={{ color: "#FFF8EC" }}>
          Menu
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/training" style={{ color: "#FFF8EC" }}>
          Training School
        </Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/contact" style={{ color: "#FFF8EC" }}>
          Contact Us
        </Link>
      </li>
    </LinksWrapper>
  );
};

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg px-3">
      <Logo />
      <NavbarToggler />
      <SearchNavWrapper
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <NavLinks />
        <ButtonWrapper>
          <MenuPrompt />
        </ButtonWrapper>
      </SearchNavWrapper>
    </Nav>
  );
};

export default Navbar;
