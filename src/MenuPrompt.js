import React from "react";

const MenuPrompt = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <section className="">
      <div className="text-center mx-auto mt-5 mb-4">
        <a
          href="https://wa.link/o688gi"
          className="button"
          onClick={handleClick}
        >
          Place An Order
        </a>
      </div>
    </section>
  );
};

export default MenuPrompt;
