import React from "react";
import FeaturedList from "../FeaturedList";
import Footer from "../Footer";
import Hero from "../Hero";
import Menu from "../Menu";

const Home = () => {
    return(
        <article>
            <Hero />
            <Menu />
            <FeaturedList />
            <Footer />
        </article>
    )
}

export default Home;