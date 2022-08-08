import Home from './pages/Home';
import Navbar from './Navbar';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    </>
  );
}

export default App;
