import React from "react";
import Home from "./pages/Home";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";

import NavBar from "./Navbar";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import About from "./pages/About";
import SmallChops from "./pages/SmallChops";
import Cakes from "./pages/Cakes";
import Icing from "./pages/Icing";
import DecoratedCakes from "./pages/DecoratedCakes";
import CakeLoaves from "./pages/CakeLoaves";
import Drinks from "./pages/Drinks";
import NorthernDelight from "./pages/NorthernDelight";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/smallchops" element={<SmallChops />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/icing" element={<Icing />} />
        <Route path="/decoratedcakes" element={<DecoratedCakes />} />
        <Route path="/cakeloaves" element={<CakeLoaves />} />
        <Route path="/northerndelight" element={<NorthernDelight />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
