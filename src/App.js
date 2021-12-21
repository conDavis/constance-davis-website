import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Software from "./pages/Software";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/software" element={<Software/>} />
        <Route path="/art" element={<Art/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
