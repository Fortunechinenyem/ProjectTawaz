import React from "react";
import FeaturedList from "../FeaturedList";
import Footer from "../Footer";
import Hero from "../Hero";
import Menu from "../Menu";
import Navbar from "../Navbar";

const Home = () => {
    return(
        <article>
            <Navbar />
            <Hero />
            <Menu />
            <FeaturedList />
            <Footer />
        </article>
    )
}

export default Home;