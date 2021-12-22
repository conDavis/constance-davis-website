import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import Software from "./pages/Software";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import Navbar from "./components/NavBar/Navbar";
import Resume from "./pages/Resume";

function App() {
  return (
    <Router>
      <Navbar sticky="top" />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/software" element={<Software />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />}>
          Resume
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
