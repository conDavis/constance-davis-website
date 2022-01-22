import React from "react";
import {
  Bars,
  Nav,
  NavLink,
  NavLogo,
  NavMenu,
  NavName,
} from "./NavBarElements";
import { NavLink as Link } from "react-router-dom";

import logo from "../../assets/conlong3.png";
const Navbar = () => {
  return (
    <>
      <Nav>
        <Link to="/constance-davis-website" className={({ isActive }) => (isActive ? "active" : "")}>
          <NavLogo src={logo} alt="Logo" />
        </Link>

        <NavName>Constance Davis</NavName>

        <Bars />

        <NavMenu>
          <NavLink
            to="/constance-davis-website"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Me
          </NavLink>
          <NavLink
            to="/software"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Software
          </NavLink>
          <NavLink
            to="/art"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Art
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
          <a
            href="https://www.linkedin.com/in/constanceleedavis/"
            target="_blank"
          ></a>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
