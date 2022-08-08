import Home from "./pages/Home";
import Navbar from "./Navbar";
import HomeMenu from "./HomeMenu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
