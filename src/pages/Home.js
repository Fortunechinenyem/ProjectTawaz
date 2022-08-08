import React from "react";
import FeaturedList from "../FeaturedList";
import Flash from "../FlashMessage";
import Footer from "../Footer";
import Welcome from "../Header";
import Hero from "../Hero";
import HomeMenu from "../HomeMenu";

const Home = () => {
  return (
    <article>
      <Welcome />
      <Hero />
      <FeaturedList />
      <HomeMenu />
      <Flash />
      <Footer />
    </article>
  );
};

export default Home;
