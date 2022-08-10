import Home from "./pages/Home";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import NavBar from "./Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
