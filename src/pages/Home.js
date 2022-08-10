import React from "react";
import FeaturedList from "../FeaturedList";
import Flash from "../FlashMessage";
import Footer from "../Footer";
import Welcome from "../Header";
import Hero from "../Hero";
import HomeMenu from "../HomeMenu";
import Services from "../Services";

const Home = () => {
  return (
    <article>
      <Welcome />
      <Hero />
      <FeaturedList />
      <HomeMenu />
      <Services />
      <Flash />
      <Footer />
    </article>
  );
};

export default Home;
