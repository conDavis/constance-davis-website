import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/constance-davis-website/" exact element={<Home />} />
          <Route path="/constance-davis-website/software" element={<Software />} />
          <Route path="/constance-davis-website/art" element={<Art />} />
          <Route path="/constance-davis-website/contact" element={<Contact />} />
          <Route path="/constance-davis-website/resume" element={<Resume />}>
            Resume
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
