import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/AboutMePage";
import Software from "./pages/SoftwarePage/Software";
import Art from "./pages/ArtPage/Art";
import Contact from "./pages/ContactPage/Contact";
import Navbar from "./components/NavBar/Navbar";
import Resume from "./pages/ResumePage/Resume";

function App() {
  return (
    <Router>
      <Navbar sticky="top" />
      <div className="main">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/software" element={<Software />} />
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />}>
            Resume
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
