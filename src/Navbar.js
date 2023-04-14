import React from "react";
import styled from "styled-components";
import { NavLink as Link, useNavigate } from "react-router-dom";
import logo from "./images/tawazlogo (2).jpg";

const Nav = styled.nav`
  padding: 1.5rem 0;
  background-color: #9b7621;
`;

const LinksWrapper = styled.ul`
  background-color: #fff;
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
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about" style={{ color: "#268f7d" }}>
          Who We Are
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/training" style={{ color: "#268f7d" }}>
          Training School
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" style={{ color: "#268f7d" }}>
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
          <a href="https://wa.link/o688gi" className="btn btn-warning">
            Order
          </a>
        </ButtonWrapper>
      </SearchNavWrapper>
    </Nav>
  );
};

export default Navbar;
