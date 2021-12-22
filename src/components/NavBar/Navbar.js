import React from "react";
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavLogo,
  NavMenu,
  NavName,
} from "./NavBarElements";

import logo from "../../assets/conLogo.png";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo src={logo} alt="Logo" />
        <NavName>Constance Davis</NavName>

        <Bars />

        <NavMenu>
          <NavLink
            to="/"
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
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
