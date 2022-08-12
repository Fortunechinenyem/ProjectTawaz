import React from "react";

const MenuBody = () => {
  return (
    <section>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Belleful Series</option>
        <option value="1">Pounded Yam And Soup</option>
        <option value="2">Semo and Soup</option>
        <option value="3">Tuwon Masara and Soup</option>
      </select>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option select="true">Breakfast Series</option>
        <option value="1">Tea with bread</option>
        <option value="2">Tea with bread and egg</option>
        <option value="3">Plantain with egg sauce and Sausages</option>
        <option value="4">Noodles Special</option>
      </select>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option select="true">Selense Series</option>
        <option value="1">Spaghetti with fish sauce</option>
        <option value="2">Spaghetti and stir fry Vegetables</option>
        <option value="3">Boiled Yam with fish sauce/Stew/Vegetable</option>
      </select>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option select="true">Pasteries</option>
        <option value="1">Cakes</option>
        <option value="2">Small chops and meat</option>
        <option value="3">Doughnut</option>
      </select>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option select="true">Drinks and Smoothies</option>
        <option value="1">Kunun Aya</option>
        <option value="2">Zobo</option>
        <option value="3">Customized Smoothie</option>
      </select>
    </section>
  );
};

export default MenuBody;
