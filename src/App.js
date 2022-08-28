import Home from "./pages/Home";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";

import NavBar from "./Navbar";
import Contact from "./pages/Contact";
import Training from "./pages/Training";
import About from "./pages/About";

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
      </Routes>
    </>
  );
}

export default App;
