import React from "react";
// import ContactBody from "../ContactBody";
// import ContactHero from "../Contacthero";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillChatDotsFill } from "react-icons/bs";
import Footer from "../Footer";
import MenuPrompt from "../MenuPrompt";
import styled from "styled-components";

const PhoneLink = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin: 10px 0;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #555;
  }
`;

const Contact = () => {
  return (
    <article>
      {/* <ContactHero />
      <ContactBody /> */}
      <div className="m-4 mx-auto mt-5 mb-5 p-5 rounded shadow">
        <div className="mx-auto text-center">
          <h3>You've got questions?</h3>
          <h4>We're just a call or chat away!</h4>
        </div>
        <div className=" text-center mx-auto">
          <PhoneLink href="tel:+2348071715005" className="btn btn-warning mt-3">
            <FiPhoneCall />
            08071715005
          </PhoneLink>
        </div>
        <div className=" text-center mx-auto">
          <a href="https://wa.link/o688gi" className="btn btn-warning mt-3">
            <BsFillChatDotsFill /> Chat
          </a>
        </div>
      </div>
      <MenuPrompt />
      <Footer />
    </article>
  );
};

export default Contact;
