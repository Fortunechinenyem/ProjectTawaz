import React from "react";
import { FiArrowRight } from "react-icons/fi";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #d8a31a;
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #c48915;
  }
`;

const ArrowIcon = styled(FiArrowRight)`
  margin-left: 0.5rem;
`;

const MenuPrompt = () => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open("https://wa.link/o688gi", "_blank");
  };

  return (
    <Section>
      <Button className="button" onClick={handleClick}>
        Place An Order <ArrowIcon />
      </Button>
    </Section>
  );
};

export default MenuPrompt;
